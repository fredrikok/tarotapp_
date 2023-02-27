import React, { Component, useState } from 'react';

class Aztro extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      json: {}
    };
  }

  fetchHoroscope = (sign) => {
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;
    fetch(URL, {
      method: 'POST'
    })
      .then(response => response.json())
      .then(json => { this.setState({ json }); });
  }

  componentDidMount() {
    const date = new Date().toLocaleDateString();
    this.setState({currentDate: date});
  }

  render() {
    return (
      <main>
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
            scorpio 
          </button>
          <button onClick={() => this.fetchHoroscope('sagittarius')}>
            sagittarius 
          </button>
          <button onClick={() => this.fetchHoroscope('capricorn')}>
            capricorn 
          </button>
          <button onClick={() => this.fetchHoroscope('aquarius')}>
            aquarius 
          </button>
          <button onClick={() => this.fetchHoroscope('pisces')}>
            pisces 
          </button>
          {/* Repeat for all signs */}
        </div>
        <br />
        <h2>SIGN: {}</h2>
        Compatibility: {this.state.json.compatibility} <br />
        Lucky Number: {this.state.json.lucky_number} <br />
        Lucky Time: {this.state.json.lucky_time} <br />
        Color: {this.state.json.color} <br />
        Date Range: {this.state.json.date_range} <br />
        Mood: {this.state.json.mood} <br />
        Description: {this.state.json.description} <br />
      </main>
    );
  }
}

export default Aztro;
