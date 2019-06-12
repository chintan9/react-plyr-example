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
          type="video"
          url="https://now-serve-1caeda3efe559aef5c5e41c90fc9153e.chintan9.now.sh/content/Big_Buck_Bunny_1080_10s_30MB.mp4"
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

