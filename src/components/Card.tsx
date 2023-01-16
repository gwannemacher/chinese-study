import { ToggleState } from "../App";
import { Character } from "../types/character";

type CardProps = {
  character: Character;
  toggleState: ToggleState;
  setToggleState: (value: React.SetStateAction<ToggleState>) => void;
};

export const Card = (props: CardProps) => {
  const { character, toggleState, setToggleState } = props;

  return (
    <button
      style={{
        height: "10em",
        border: "2px solid pink",
        borderRadius: ".6em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5em",
        flexGrow: "1",
      }}
      onClick={() =>
        setToggleState((previous) =>
          previous === ToggleState.BACK ? ToggleState.FRONT : ToggleState.BACK
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
