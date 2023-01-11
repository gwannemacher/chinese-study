import { useState } from "react";
import { ToggleState } from "../App";
import { Character } from "../types/character";

type CardProps = {
  chapter: number;
  character: Character;
  toggleState: ToggleState;
  setToggleState: (toggleState: ToggleState) => void;
};

export const Card = (props: CardProps) => {
  const { chapter, character, toggleState, setToggleState } = props;

  return (
    <div
      style={{
        width: "15em",
        height: "10em",
        border: "2px solid pink",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() =>
        setToggleState(
          toggleState === ToggleState.BACK
            ? ToggleState.FRONT
            : ToggleState.BACK
        )
      }
    >
      <div style={{ fontSize: ".75em" }}>Chapter {chapter}</div>
      <div style={{ paddingTop: "1em" }}>
        {toggleState === ToggleState.FRONT && (
          <div style={{ fontSize: "1.75em" }}>{character.hanzi}</div>
        )}
        {toggleState === ToggleState.BACK && (
          <>
            <div>{character.pinyin}</div>
            <div style={{ paddingTop: ".5em", fontSize: ".9em" }}>
              {character.definition}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
