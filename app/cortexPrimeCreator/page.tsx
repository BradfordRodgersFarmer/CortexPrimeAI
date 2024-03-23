"use client";
import { useForm } from 'react-hook-form';
import Head from 'next/head';
import Link from 'next/link';
import Avatar, { genConfig } from 'react-nice-avatar'

import { createCharacter, createEpisode, createScene } from '@/queries/character'
import {useState} from "react";

interface Role {
    grifter: number;
    hacker: number;
    thief: number;
    hitter: number;
    mastermind: number;
}
interface Attributes {
    agility: number;
    intelligence: number;
    strength: number;
    willpower: number;
    vitality: number;
    alertness: number;
}
interface Scene {
    description: string;
    difficulty: number;
    sceneId: number;
}
interface Character {
    name: string;
    description: string;
    roles: Role;
    attributes: Attributes;
    specialItem?: string;
    npcId?: number;
    motivation?: string;
    job?: string;
    imageConfig?: any;
}

interface Episode {
    description: string;
    villian: Character;
    mcguffin: string;
    missionId: number;
}

type FormValues = {
    description: string
}
type FormValues2 = {
    job:string,
    alignment:string
}
type FormValues3 = {
    location: string
}

export default function Page() {
    const [characters, setCharacters] = useState<Character[] >([])
    const [curEpisode, setEpisodes] = useState<Episode | null>(null );
    const [scenes, setScenes] = useState<Scene[] >([]);
    const [missionId, setMissionId] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const { register, handleSubmit} = useForm<FormValues>();
    const { register: register2, handleSubmit: handleSubmit2 } = useForm<FormValues2>();
    const { register: register3, handleSubmit: handleSubmit3  } = useForm<FormValues3>();
    const episodeCreator = async (data : FormValues) => {
        setLoading(true);
        const episode = await createEpisode(data.description);
        setMissionId(parseInt(episode.missionId));
        const villianForEpisode : Character = {
            name: "",
            description: episode.villain,
            attributes: episode.attributes,
            job: 'Main Villian',
            roles: episode.roles,
            imageConfig: genConfig(episode.villain)
        }
        characters.push(villianForEpisode);
        const episdeInfo : Episode = {
            description: episode.description,
            villian: villianForEpisode,
            mcguffin: episode.mcguffin,
            missionId: episode.missionId,
        }
        setEpisodes(episdeInfo);
        setLoading(false);
    }
    const characterCreator = async (data : FormValues2) => {
        setLoading(true);
        const character = await createCharacter(data.job, data.alignment, missionId);
        character.imageConfig = genConfig(character.name)
        setCharacters([...characters, character])
        setLoading(false);
    }

    const sceneCreator = async (data : FormValues3 ) => {
        setLoading(true);
        const scene = await createScene(data.location, missionId);
        setScenes([...scenes, scene]);
        setLoading(false);
    }
    
    return (
        <div>
            <div className={`ui ${loading ? 'active' : ''} dimmer`}>
                <div className="ui large text loader">Loading</div>
            </div>
            <div className="ui container">
                <Head>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title>Cortex Prime NPC Generator</title>
                </Head>
                <h1 className="ui huge header">Cortex Prime NPC Generator <Link className="ui button primary" href="/">Home</Link></h1>
                <form className="ui form" onSubmit={handleSubmit(episodeCreator)}>
                    <div className="field">
                        <label>Episode Description</label>
                        <input {...register('description')} placeholder="Description..."/>
                    </div>
                    <button type="submit" className="ui primary button">Create Episode</button>
                </form>

                <form className="ui form" onSubmit={handleSubmit2(characterCreator)}>
                    <div className="field">
                        <label>Character Job</label>
                        <input {...register2('job')} />
                    </div>
                    <div className="field">
                        <label>Character Alignment</label>
                        <input {...register2('alignment')} />
                    </div>
                    <button type="submit" className="ui primary button">Create Character</button>
                </form>

                <form className="ui form" onSubmit={handleSubmit3(sceneCreator)}>
                    <div className="field">
                        <label>Scene Location</label>
                        <input {...register3('location')} />
                    </div>
                    <button type="submit" className="ui primary button">Create Scene</button>
                </form>

                <h2 className="ui header">Episodes</h2>
                <ul className="ui list">
                    {curEpisode && <li className="item">{curEpisode.description}</li>}
                </ul>

                <div className="ui divider"></div>

                <h2 className="ui header">Characters</h2>
                <div className="ui cards">
                    {characters.map((character, index) => (
                        <div className="card" key={character.name}>
                            <div className="image">
                                <Avatar {...character.imageConfig} />
                            </div>
                            <div className="content">
                                <a className="header">{character.name}</a>
                                <div className="meta">
                                    <span>{character.job}</span>
                                </div>
                                <div className="description">
                                    {character.description}
                                    <p>Special Item: {character.specialItem}</p>
                                </div>
                            </div>
                            <div className="extra content">
                                {Object.keys(character.attributes).map((key, index) => (
                                    <div key={`${key}-${index}`}>
                                        <strong>{key}:</strong> d{character.attributes[key as keyof Attributes]}
                                    </div>
                                ))}
                                {Object.keys(character.roles).map((key, index) => (
                                    <div key={`${key}-${index}`}>
                                        <strong>{key}:</strong> d{character.roles[key as keyof Role]}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="ui divider"></div>
            </div>
        </div>
    );
}
