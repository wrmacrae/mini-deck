import React from 'react';
import './MiniDeck.css';


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function subsetDeck(deck) {
  var deckWithRepeats = []
  deck.forEach(function (line) {
    var count = line.split(" ")[0];
    var name = line.split(" ").slice(1).join(" ");
    for (var i = 0; i < count; i++) {
      deckWithRepeats.push(name);
    }
  });
  shuffleArray(deckWithRepeats);
  return deckWithRepeats.slice(0,59);
}

function deckToString(deck, commander) {
  return "Commander\n" + commander + "\n\nDeck\n1 " + deck.join("\n1 ");
}

function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
        return window.clipboardData.setData("Text", text);

    }
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
}

export default class MiniDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      commander: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  copyMiniDeckToClipboard() {
    var miniDeckString = deckToString(subsetDeck(this.state.deck), this.state.commander);
    console.log(miniDeckString);
    copyToClipboard(miniDeckString);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (name === "upload") {
      this.processUpload(value);
    }
  }


  processUpload(upload) {
    var deck = upload.split("\n");
    var commanderIndex = deck.indexOf("Commander");
    if (commanderIndex !== -1) {
      var commander = deck[commanderIndex + 1];
    }
    var deckIndex = deck.indexOf("Deck");
    if (deckIndex !== -1) {
      deck = deck.slice(deckIndex + 1);
    }
    this.setState({
      deck: deck,
      commander: commander
    });
  }

  render() {
    return <div className="page">
      <div className="explanation">
        <div className="explanationText">
          <p>
            1) Paste a deck that you would import into Arena in the textbox (e.g. a 100 card brawl deck).<br />
            2) Click Copy Mini-Deck to get a 59-card deck randomly selected from that, which goes on your clipboard.<br />
            3) Import that to Arena.
          </p>
        </div>
      </div>
      <div className="form">
        <textarea className="upload" type="string" id="upload" name="upload" onChange={this.handleInputChange} />
      </div>
      <button className="copy" onClick={this.copyMiniDeckToClipboard.bind(this)}>
        Copy Mini-Deck
      </button>
    </div>;
  }
}