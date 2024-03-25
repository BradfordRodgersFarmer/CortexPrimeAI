"use client";
import { useForm } from 'react-hook-form';
import Head from 'next/head';
import Link from 'next/link';
import  { genConfig } from 'react-nice-avatar';
import { Character, Episode, Scene, FormValues, FormValues2, FormValues3  } from '../../configs/interfaces';
import { CharactersList } from '../../layouts/character';
import { createCharacter, createEpisode, createScene } from '@/queries/character'
import { useState } from "react";


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
        character.job = data.job;
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
                <CharactersList characters={characters} episode={curEpisode}/>

                <div className="ui divider"></div>
            </div>
        </div>
    );
}
