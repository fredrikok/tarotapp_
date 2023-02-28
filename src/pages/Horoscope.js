import React, { Component } from 'react';

class Aztro extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      json: {},
      currentDate: '',
      sign: ''
    };
  }

  fetchHoroscope = (sign) => {
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;
    fetch(URL, {
      method: 'POST'
    })
      .then(response => response.json())
      .then(json => { this.setState({ json, sign }); });
  }

  componentDidMount() {
    const date = new Date().toLocaleDateString();
    this.setState({currentDate: date});
  }

  render() {
    return (
      <main className='horoscope-main'>
        <h1>Current Date: {this.state.currentDate}</h1>
        <div className='zodiac-btn'>
          <button onClick={() => this.fetchHoroscope('aries')}>
            Aries
          </button>
          <button onClick={() => this.fetchHoroscope('taurus')}>
            Taurus
          </button>
          <button onClick={() => this.fetchHoroscope('gemini')}>
            Gemini
          </button>
          <button onClick={() => this.fetchHoroscope('cancer')}>
            Cancer 
          </button>
          <button onClick={() => this.fetchHoroscope('leo')}>
            Leo 
          </button>
          <button onClick={() => this.fetchHoroscope('virgo')}>
            Virgo 
          </button>
          <button onClick={() => this.fetchHoroscope('libra')}>
            Libra 
          </button>
          <button onClick={() => this.fetchHoroscope('scorpio')}>
            Scorpio 
          </button>
          <button onClick={() => this.fetchHoroscope('sagittarius')}>
            Sagittarius 
          </button>
          <button onClick={() => this.fetchHoroscope('capricorn')}>
            Capricorn 
          </button>
          <button onClick={() => this.fetchHoroscope('aquarius')}>
            Aquarius 
          </button>
          <button onClick={() => this.fetchHoroscope('pisces')}>
            Pisces 
          </button>
        </div>
{/* Wrapper */}
    <div className="horoscope-wrapper">
      {/* Left */}
      <div>
        <h2>SIGN: {this.state.sign.toUpperCase()}</h2>
        <h4>compatibility</h4><p>{this.state.json.compatibility}</p> 
        <h4>Lucky Number:</h4> {this.state.json.lucky_number} 
        <h4>Lucky Time:</h4> {this.state.json.lucky_time} 
        <h4>Color: </h4>{this.state.json.color} 
        <h4>Date Range:</h4> {this.state.json.date_range} 
        <h4>Mood:</h4> {this.state.json.mood} 
        <h4>Description:</h4> {this.state.json.description} 
      </div>
      {/* Right */}
      <div>
        <img
          className="horoscope-img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Sidney_Hall_-_Urania%27s_Mirror_-_Aries_and_Musca_Borealis.jpg/1280px-Sidney_Hall_-_Urania%27s_Mirror_-_Aries_and_Musca_Borealis.jpg" alt="lol">
        </img>
      </div>
    </div>
      </main>
    );
  }
}

export default Aztro;


