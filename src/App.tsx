import { useState } from "react";
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
  const lesson = lessons[0];
  const [randomIndex, setRandomIndex] = useState(
    getRandom(lesson.characters.length)
  );
  const [toggleState, setToggleState] = useState(ToggleState.FRONT);

  return (
    <div style={{ display: "flex", gap: ".5em" }}>
      <Card
        chapter={lesson.chapter}
        character={lesson.characters[randomIndex]}
        toggleState={toggleState}
        setToggleState={setToggleState}
      />
      <button
        onClick={() => {
          setToggleState(ToggleState.FRONT);
          setRandomIndex(getRandom(lesson.characters.length));
        }}
      >
        next
      </button>
    </div>
  );
};

export default App;
