import { Lesson } from "../types/lesson";
import { Lesson16 } from "./lesson16";
import { Lesson17 } from "./lesson17";

const AllLessons: Lesson = {
    chapter: 'all',
    characters: [...Lesson16.characters, ...Lesson17.characters]
};

export const Lessons: Lesson[] = [Lesson16, Lesson17, AllLessons];