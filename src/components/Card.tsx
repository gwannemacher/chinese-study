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
    <button
      style={{
        width: "15em",
        height: "10em",
        border: "2px solid pink",
        borderRadius: ".6em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5em",
      }}
      onClick={() =>
        setToggleState(
          toggleState === ToggleState.BACK
            ? ToggleState.FRONT
            : ToggleState.BACK
        )
      }
    >
      <div>
        {toggleState === ToggleState.FRONT && (
          <div style={{ fontSize: "1.75em" }}>{character.hanzi}</div>
        )}
        {toggleState === ToggleState.BACK && (
          <>
            <div>{character.pinyin}</div>
            <div
              style={{
                paddingTop: ".5em",
                fontSize: ".75em",
                fontWeight: "lighter",
              }}
            >
              {character.definition}
            </div>
          </>
        )}
      </div>
    </button>
  );
};

export default Card;
