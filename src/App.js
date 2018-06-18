import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Img from "./components/Img.json";
import angelfish from "./images/angelfish.JPG";
import blowfish from "./images/blowfish.JPG";
import coral from "./images/coral.JPG";
import crab from "./images/crab.JPG";
import dollarshell from "./images/dollarshell.JPG";
import dolphin from "./images/dolphin.JPG";
import jellyfish from "./images/jellyfish.JPG";
import lobster from "./images/lobster.JPG";
import mantaray from "./images/mantaray.JPG";
import seahorse from "./images/seahorse.JPG";
import seasnail from "./images/seasnail.JPG";
import seaturtle from "./images/seaturtle.JPG";
import shark from "./images/shark.JPG";
import shrimp from "./images/shrimp.JPG";
import spikeything from "./images/spikeything.JPG";
import squid from "./images/squid.JPG";
import starfish from "./images/starfish.JPG";
import swordfish from "./images/swordfish.JPG";
import walrus from "./images/walrus.JPG";
import whale from "./images/whale.JPG";
import "./App.css";


class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topScore: 0,
    message: 'Click an Image to Begin'
  };

  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray;
  }

  pickImg = (name) => {
    console.log("Image Clicked");
    let picked = this.state.picked;

    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topScore: this.state.correct + 1 > this.state.topScore ? this.state.correct + 1 : this.state.topScore,
        message: "Correct. Bravo!"
      })
      this.shuffleArray();
    } else {
      this.setState({
        message: "Incorrect. Play Again.",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case 'angelfish': return `${angelfish}`
      case 'blowfish': return `${blowfish}`
      case 'coral': return `${coral}`
      case 'crab': return `${crab}`
      case 'dollarshell': return `${dollarshell}`
      case 'dolphin': return `${dolphin}`
      case 'jellyfish': return `${jellyfish}`
      case 'lobster': return `${lobster}`
      case 'mantaray': return `${mantaray}`
      case 'seahorse': return `${seahorse}`
      case 'seasnail': return `${seasnail}`
      case 'seaturtle': return `${seaturtle}`
      case 'shark': return `${shark}`
      case 'shrimp': return `${shrimp}`
      case 'spikeything': return `${spikeything}`
      case 'squid': return `${squid}`
      case 'starfish': return `${starfish}`
      case 'swordfish': return `${swordfish}`
      case 'walrus': return `${walrus}`
      case 'whale': return `${whale}`
      default: return `${angelfish}`
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topScore={this.state.topScore} message={this.state.message} />
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg} />
          ))}
        </Main>
        <Footer />
      </div>
    )
  }
}

export default App;
