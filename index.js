import React, { Component } from 'react';
import { render } from 'react-dom';
import Plyr from 'react-plyr';
import './style.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Plyr
          type="youtube"
          videoId="3xGJZoaTODQ"
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

