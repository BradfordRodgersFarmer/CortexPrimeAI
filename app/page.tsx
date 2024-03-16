"use client";
import Image from "next/image";
import { useForm } from 'react-hook-form';
import Avatar, { genConfig } from 'react-nice-avatar'

import { createCharacter, createEpisode, createScene } from './queries/character'
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

export default function Home() {
  const [characters, setCharacters] = useState<Character[] >([])
  const [curEpisode, setEpisodes] = useState<Episode | null>(null );
  const [scenes, setScenes] = useState<Scene[] >([]);
  const { register, handleSubmit } = useForm();
  const episodeCreater = async ({desciption}) => {
    const episode = await createEpisode(desciption);
    const villianForEpisode : Character = {
        name: "",
        description: episode.villian,
        attributes: episode.attributes,
        roles: episode.roles,
        imageConfig: genConfig(episode.villian, {size: 200})
    }
    characters.push(villianForEpisode);
    const episdeInfo = {
        description: episode.description,
        villian: villianForEpisode,
        mcguffin: episode.mcguffin,
        missionId: episode.missionId,
    }
    setEpisodes(episode);


  }
  const characterCreater = async ({job, alignment}) => {
    const character = await createCharacter(job, alignment);
    character.imageConfig = genConfig(character.name, {size: 200})
    setCharacters([...characters, character])
  }

  const sceneCreater = async ({location}) => {
     const scene = await createScene(location);
     setScenes([...scenes, scene]);
  }
  return (
    <div>
      <h1>Cortext Prime NPC Generater</h1>
        <form onSubmit={handleSubmit(episodeCreater)}>
            <label>Episode Description</label>
            <div className="ui input">
                <input {...register('description')}  placeholder="Description..."/>
            </div>
            <button type="submit" className="ui primary button">Create Episode</button>
        </form>
        <form onSubmit={handleSubmit(characterCreater)}>
            <label>Character Job</label>
            <div className="ui input">
                <input {...register('job')}  />
            </div>
            <label>Character Alignment</label>
            <div className="ui input">
                 <input {...register('alignment')} />
            </div>
            <button type="submit" className="ui primary button">Create Character</button>
        </form>
        <form onSubmit={handleSubmit(sceneCreater)}>
            <label>Scene Location</label>
            <div className="ui input">
                <input {...register('location')}  />
            </div>
            <button type="submit" className="ui primary button">Create Scene</button>
        </form>
        <h2>Episodes</h2>
        <ul>
            {curEpisode && <li>{curEpisode.description}</li>}
        </ul>
        <div className="ui divider"></div>
        <h2>Characters</h2>
        <ul>
            {characters.map((character, index) => (
                <div className="ui card">
                    <div className="image">
                        <Avatar {...character.imageConfig} />
                    </div>
                    <div className="content">
                        <a className="header">{character.name}</a>
                        <div className="meta">
                            <span className="date">{character.job}</span>
                        </div>
                        <div className="description">
                            {character.description}
                        </div>
                        <div className="description">
                            Special Item: {character.specialItem}
                        </div>
                    </div>
                    <div className="extra content">

                        {Object.keys(character.attributes).map((key, index) => (
                            <div key={index}>
                                <span>{key}</span>
                                <span>d{character.attributes[key]}</span>
                            </div>
                        ))}
                        {Object.keys(character.roles).map((key, index) => (
                            <div key={index}>
                                <span>{key}</span>
                                <span>d{character.roles[key]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </ul>
        <div className="ui divider"></div>


    </div>
  );
}
