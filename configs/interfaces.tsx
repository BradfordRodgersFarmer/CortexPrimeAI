
export interface Role {
    grifter: number;
    hacker: number;
    thief: number;
    hitter: number;
    mastermind: number;
}
export interface Attributes {
    agility: number;
    intelligence: number;
    strength: number;
    willpower: number;
    vitality: number;
    alertness: number;
}
export interface Scene {
    description: string;
    difficulty: number;
    sceneId: number;
}
export interface Character {
    name: string;
    description: string;
    roles: Role;
    attributes: Attributes;
    specialItem?: string;
    npcId?: number;
    job?: string;
    imageConfig?: any;
}

export interface Episode {
    description: string;
    villian: Character;
    mcguffin: string;
    missionId: number;
}

export type FormValues = {
    description: string
}
export type FormValues2 = {
    job:string,
    alignment:string
}
export type FormValues3 = {
    location: string
}