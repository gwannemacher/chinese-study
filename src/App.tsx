import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { Lessons } from "./data/lessons";
import { FlashcardStyles } from "./thingy/styleConstants";
import { Lesson } from "./types/lesson";

export enum ToggleState {
  FRONT,
  BACK,
}

const getRandomIndex = (lesson: Lesson): number => {
  let randomIndex = Math.floor(Math.random() * lesson.characters.length);
  while (lesson.characters[randomIndex].hidden) {
    randomIndex = Math.floor(Math.random() * lesson.characters.length);
  }

  return randomIndex;
};

const App = () => {
  const lessons = Lessons;
  const [toggleState, setToggleState] = useState(ToggleState.FRONT);
  const [lesson, setLesson] = useState(lessons[0]);
  const [randomIndex, setRandomIndex] = useState(() =>
    getRandomIndex(lessons[0])
  );

  const setRandomCharacter = (lesson: Lesson) => {
    const randomIndex = getRandomIndex(lesson);
    setRandomIndex(randomIndex);
  };

  const toggleKeys = ["ArrowRight", "ArrowLeft", "k"];
  const nextKeys = ["ArrowUp", "ArrowDown", "j"];

  useEffect(() => {
    const keydownEventListener = (e: KeyboardEvent) => {
      if (toggleKeys.find((x) => x === e.key)) {
        setRandomCharacter(lesson);
        setToggleState(ToggleState.FRONT);
      } else if (nextKeys.find((x) => x === e.key)) {
        setToggleState((previous) =>
          previous === ToggleState.BACK ? ToggleState.FRONT : ToggleState.BACK
        );
      }
    };

    document.addEventListener("keydown", keydownEventListener);

    return () => {
      document.removeEventListener("keydown", keydownEventListener);
    };
  }, [lesson]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: ".61em",
        alignItems: "start",
        width: "30em",
      }}
    >
      <div
        style={{
          display: "flex",
          rowGap: ".5em",
          columnGap: ".61em",
          flexWrap: "wrap",
        }}
      >
        {lessons.map((l) => (
          <button
            key={l.chapter}
            style={{
              border: FlashcardStyles.border,
              width: "4.48em",
              backgroundColor:
                lesson.chapter === l.chapter ? FlashcardStyles.accentColor : "",
            }}
            onClick={() => {
              setRandomCharacter(l);
              setLesson(l);
            }}
          >
            {l.chapter}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", gap: ".5em", width: "100%" }}>
        <Card
          character={lesson.characters[randomIndex]}
          toggleState={toggleState}
          setToggleState={setToggleState}
        />
        <button
          style={{ border: FlashcardStyles.border }}
          onClick={() => {
            setToggleState(ToggleState.FRONT);
            setRandomCharacter(lesson);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default App;
