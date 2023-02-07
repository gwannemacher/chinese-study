import { Character } from "./character";

export type Lesson = {
    chapter: string | number;
    characters: Character[];
};