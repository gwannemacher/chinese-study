import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { Lessons } from "./data/lessons";

export enum ToggleState {
  FRONT,
  BACK,
}

const getRandom = (listLength: number): number =>
  Math.floor(Math.random() * listLength);

const App = () => {
  const lessons = Lessons;
  const [toggleState, setToggleState] = useState(ToggleState.FRONT);
  const [lesson, setLesson] = useState(lessons[0]);
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    const keydownEventListener = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        setRandomIndex(getRandom(lesson.characters.length));
        setToggleState(ToggleState.FRONT);
      } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
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
              border: "2px solid pink",
              backgroundColor:
                lesson.chapter === l.chapter ? "pink" : "inherit",
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
      <div style={{ display: "flex", gap: ".5em", width: "100%" }}>
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
