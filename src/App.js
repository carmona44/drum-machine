import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: '',
            letraActual: ''
        }
        this.clickAction = this.clickAction.bind(this);
        this.playSound = this.playSound.bind(this);
        this.keyAction = this.keyAction.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.keyAction);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.keyAction);
    }

    keyAction(event) {
        const validLetters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
        let text = '';

        switch (event.key.toUpperCase()){
            case "Q":
                text = "heater1";
                break;
            case "W":
                text = "heater2";
                break;
            case "E":
                text = "heater3";
                break;
            case "A":
                text = "heater4";
                break;
            case "S":
                text = "clap";
                break;
            case "D":
                text = "openHH";
                break;
            case "Z":
                text = "kickAndHat";
                break;
            case "X":
                text = "kick";
                break;
            case "C":
                text = "closedHH";
                break;
            default:
                break;
        }

        if(validLetters.find(i => i === event.key.toUpperCase())){
            this.clickAction({
                target: {
                    id: text,
                    value: event.key.toUpperCase()
                }
            });
        } else {
            console.error("La tecla \"" + event.key + "\" no corresponde con ninguna de las opciones.")
        }
    }

    clickAction (event){
        console.log(event.target.value)
        this.setState({
            text: event.target.id,
            letraActual: event.target.value
        });
        setTimeout(() => {this.playSound();}, 1);
    }

    playSound(){
        let audioElement = document.getElementById(this.state.letraActual);
        audioElement.currentTime = 0;
        audioElement.play();
    }

  render() {
    return (
      <div className="App">
        <div id="drum-machine">
            <div id="display">
                {this.state.text}
            </div>
            <div className="cuadro">
                <button id="heater1" className="drum-pad" onClick={this.clickAction} value="Q">Q
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio>
                </button>
                <button id="heater2" className="drum-pad" onClick={this.clickAction} value="W">W
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"></audio>
                </button>
                <button id="heater3" className="drum-pad" onClick={this.clickAction} value="E">E
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"></audio>
                </button>
                <button id="heater4" className="drum-pad" onClick={this.clickAction} value="A">A
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"></audio>
                </button>
                <button id="clap" className="drum-pad" onClick={this.clickAction} value="S">S
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S"></audio>
                </button>
                <button id="openHH" className="drum-pad" onClick={this.clickAction} value="D">D
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio>
                </button>
                <button id="kickAndHat" className="drum-pad" onClick={this.clickAction} value="Z">Z
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"></audio>
                </button>
                <button id="kick" className="drum-pad" onClick={this.clickAction} value="X">X
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"></audio>
                </button>
                <button id="closedHH" className="drum-pad" onClick={this.clickAction} value="C">C
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"></audio>
                </button>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
