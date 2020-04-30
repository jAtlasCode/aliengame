import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import Canvas from './components/Canvas';
import { getCanvasPosition } from './utils/formulas';



function App(props) {

  useEffect(() => {
    setInterval(() => {
      self.props.moveObjects(self.canvasMousePosition);
    }, 10)
  }, [])

  return (
    <div className="App">
        <Canvas />
    </div>
  );
}

// App.propTypes = {
//   message: PropTypes.string.isRequired,
// };

export default App;
