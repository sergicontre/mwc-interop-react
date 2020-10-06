import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@material/mwc-slider';

class App extends React.Component {

  constructor(props){
    super();
    this.state = {
      sliderValue: 5
    };
    // This binding is necessary to make `this` work in the callback
    this.sendInfo = this.sendInfo.bind(this);
  }

  componentDidMount() {
    this.nv.addEventListener("input", this.sendInfo);
  }

  componentDidUnmount() {
    this.nv.removeEventListener("input", this.sendInfo);
  }

  sendInfo(event) {
    console.log('===>', event);
    this.setState(state => ({
      sliderValue: JSON.stringify(event.detail.value)
    }));
  }

  handleNvEnter = (event) => {
    this.sliderValue = event.detail.value;
    console.log("Nv Enter:", event.detail.value);
  }

  render() {
    return ( <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
      </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
      </a>
        <h2>Seamlessly interoperable</h2>
        <p>Here an example of how Material Web Components work with React:</p>
        <ul>
          <li> React can set properties <span role="img" aria-label="down">⬇️ </span> to Web Component</li>
          <li> React can listen <span role="img" aria-label="up">⬆️</span> events from Web Component </li>
        </ul>
        <mwc-slider ref={elem => this.nv = elem}
          step="5"
          pin
          markers
          max="50"
          value={this.state.sliderValue}>
        </mwc-slider>
        <p>{ this.state.sliderValue }</p>
      </header>
    </div> 
    );
  }
}

export default App;
