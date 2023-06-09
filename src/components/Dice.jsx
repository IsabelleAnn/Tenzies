import Dot from "./Dot.jsx";
export default function Dice(props) {
  let dotElements = [];
  for (let i = 1; i <= props.value; i++) {
    dotElements.push(<Dot value={props.value} />);
  }

  let diceStyle = "";
  switch (props.value) {
    case 1:
      diceStyle = "first-face";
      break;
    case 2:
      diceStyle = "second-face";
      break;
    case 3:
      diceStyle = "third-face";
      break;
    case 4:
      diceStyle = "fourth-face";
      break;
    case 5:
      diceStyle = "fifth-face";
      break;
    case 6:
      diceStyle = "sixth-face";
      break;
  }

  return (
    <div
      onClick={() => props.handleDiceClick(props.id)}
      style={props.isLocked ? { backgroundColor: "#F9D949" } : {}}
      className={`die ${diceStyle}`}
    >
      {dotElements}
    </div>
  );
}
