import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { Lessons } from "./data/lessons";

export enum ToggleState {
  FRONT,
  BACK,
}

const getRandom = (listLength: number): number =>
  Math.floor(Math.random() * (listLength - 1));

const App = () => {
  const lessons = Lessons;
  const [toggleState, setToggleState] = useState(ToggleState.FRONT);
  const [lesson, setLesson] = useState(lessons[0]);
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    const keydownEventListener = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        setRandomIndex(getRandom(lesson.characters.length));
      } else if (e.key === "Enter") {
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
        rowGap: ".5em",
        alignItems: "start",
      }}
    >
      <div style={{ display: "flex", columnGap: ".5em" }}>
        {lessons.map((l) => (
          <button
            style={{
              border:
                lesson.chapter === l.chapter
                  ? "2px solid pink"
                  : "2px solid transparent",
            }}
            onClick={() => {
              setRandomIndex(getRandom(l.characters.length));
              setLesson(l);
            }}
          >
            {l.chapter}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", gap: ".5em" }}>
        <Card
          character={lesson.characters[randomIndex]}
          toggleState={toggleState}
          setToggleState={setToggleState}
        />
        <button
          style={{ border: "2px solid pink" }}
          onClick={() => {
            setToggleState(ToggleState.FRONT);
            setRandomIndex(getRandom(lesson.characters.length));
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default App;
