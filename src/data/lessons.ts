import { Lesson } from "../types/lesson";
import { Lesson10 } from "./lesson10";
import { Lesson11 } from "./lesson11";
import { Lesson12 } from "./lesson12";
import { Lesson13 } from "./lesson13";
import { Lesson14 } from "./lesson14";
import { Lesson15 } from "./lesson15";
import { Lesson16 } from "./lesson16";
import { Lesson17 } from "./lesson17";
import { Lesson5 } from "./lesson5";
import { Lesson6 } from "./lesson6";
import { Lesson7 } from "./lesson7";
import { Lesson8 } from "./lesson8";
import { Lesson9 } from "./lesson9";

const AllLessons: Lesson = {
    chapter: 'all',
    characters: [
        ...Lesson5.characters, 
        ...Lesson6.characters, 
        ...Lesson7.characters, 
        ...Lesson8.characters, 
        ...Lesson9.characters, 
        ...Lesson10.characters, 
        ...Lesson11.characters, 
        ...Lesson12.characters, 
        ...Lesson13.characters, 
        ...Lesson14.characters, 
        ...Lesson15.characters, 
        ...Lesson16.characters, 
        ...Lesson17.characters
    ]
};

export const Lessons: Lesson[] = [
    Lesson5,
    Lesson6,
    Lesson7,
    Lesson8,
    Lesson9, 
    Lesson10, 
    Lesson11, 
    Lesson12, 
    Lesson13, 
    Lesson14, 
    Lesson15, 
    Lesson16, 
    Lesson17, 
    AllLessons
];