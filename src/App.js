import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Canvas from "./components/Canvas";
import { getCanvasPosition } from "./utils/formulas";

window.onresize = () => {
  const cnv = document.getElementById("aliens-go-home-canvas");
  cnv.style.width = `${window.innerWidth}px`;
  cnv.style.height = `${window.innerHeight}px`;
};

function App(props) {
  const canvasMousePos = useRef();
  useEffect(() => {
    console.log(props.gameState)
    window.onresize();
    const id = setInterval(() => props.moveObjects(canvasMousePos.current));
    return () => clearInterval(id);
  }, [props]);

  const trackMouse = (event) => {
    canvasMousePos.current = getCanvasPosition(event);
  };

  return (
    <div className="App">
      <Canvas
        angle={props.angle}
        trackMouse={trackMouse}
        gameState={props.gameState}
        startGame={props.startGame}
      />
    </div>
  );
}

App.propTypes = {s
  angle: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
    flyingObjects: PropTypes.arrayOf(PropTypes.shape({
      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
  moveObjects: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

// App.propTypes = {
//   angle: PropTypes.number.isRequired,
//   gameState: PropTypes.shape({
//     started: PropTypes.bool.isRequired,
//     kills: PropTypes.number.isRequired,
//     lives: PropTypes.number.isRequired,
//     flyingObjects: PropTypes.arrayOf(PropTypes.shape({
//       position: PropTypes.shape({
//         x: PropTypes.number.isRequired,
//         y: PropTypes.number.isRequired
//       }).isRequired,
//       id: PropTypes.number.isRequired,
//     })).isRequired,
//     // ... other propTypes definitions ...
//   }).isRequired,
//   // ... other propTypes definitions ...
// };
export default App;

// class App extends React.Component {
//   componentDidMount() {
//     const self = this;
//     console.log(self)
//     setInterval(() => {
//         self.props.moveObjects(self.canvasMousePosition);
//     }, 10);
//   }

//   trackMouse(event) {
//     this.canvasMousePosition = getCanvasPosition(event);
//   }

//   render() {
//     return (
//       <Canvas
//         angle={this.props.angle}
//         trackMouse={event => (this.trackMouse(event))}
//       />
//     );
//   }
// }
