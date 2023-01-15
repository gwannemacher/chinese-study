import { Lesson } from "../types/lesson";
import { Lesson13 } from "./lesson13";
import { Lesson14 } from "./lesson14";
import { Lesson15 } from "./lesson15";
import { Lesson16 } from "./lesson16";
import { Lesson17 } from "./lesson17";

const AllLessons: Lesson = {
    chapter: 'all',
    characters: [...Lesson13.characters, ...Lesson14.characters, ...Lesson15.characters, ...Lesson16.characters, ...Lesson17.characters]
};

export const Lessons: Lesson[] = [Lesson13, Lesson14, Lesson15, Lesson16, Lesson17, AllLessons];