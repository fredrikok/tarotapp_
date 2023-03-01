import React, { Component } from 'react';
import QuickNav from '../components/QuickNav';

const SIGN_IMAGES = {
  aries: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Sidney_Hall_-_Urania%27s_Mirror_-_Aries_and_Musca_Borealis.jpg/800px-Sidney_Hall_-_Urania%27s_Mirror_-_Aries_and_Musca_Borealis.jpg',
  taurus: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Sidney_Hall_-_Urania%27s_Mirror_-_Taurus.jpg/1280px-Sidney_Hall_-_Urania%27s_Mirror_-_Taurus.jpg',
  gemini: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Sidney_Hall_-_Urania%27s_Mirror_-_Gemini.jpg/1280px-Sidney_Hall_-_Urania%27s_Mirror_-_Gemini.jpg',
  cancer: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Sidney_Hall_-_Urania%27s_Mirror_-_Cancer.jpg/800px-Sidney_Hall_-_Urania%27s_Mirror_-_Cancer.jpg',
  leo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Sidney_Hall_-_Urania%27s_Mirror_-_Leo_Major_and_Leo_Minor.jpg/800px-Sidney_Hall_-_Urania%27s_Mirror_-_Leo_Major_and_Leo_Minor.jpg',
  virgo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Sidney_Hall_-_Urania%27s_Mirror_-_Virgo.jpg/1280px-Sidney_Hall_-_Urania%27s_Mirror_-_Virgo.jpg',
  libra: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Sidney_Hall_-_Urania%27s_Mirror_-_Libra.jpg/1280px-Sidney_Hall_-_Urania%27s_Mirror_-_Libra.jpg',
  scorpio: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Sidney_Hall_-_Urania%27s_Mirror_-_Scorpio.jpg/800px-Sidney_Hall_-_Urania%27s_Mirror_-_Scorpio.jpg',
  sagittarius: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Sidney_Hall_-_Urania%27s_Mirror_-_Sagittarius_and_Corona_Australis%2C_Microscopium%2C_and_Telescopium.png/1280px-Sidney_Hall_-_Urania%27s_Mirror_-_Sagittarius_and_Corona_Australis%2C_Microscopium%2C_and_Telescopium.png',
  capricorn: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Sidney_Hall_-_Urania%27s_Mirror_-_Capricornus.jpg/1280px-Sidney_Hall_-_Urania%27s_Mirror_-_Capricornus.jpg',
  aquarius: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Sidney_Hall_-_Urania%27s_Mirror_-_Aquarius%2C_Piscis_Australis_%26_Ballon_Aerostatique.jpg/1280px-Sidney_Hall_-_Urania%27s_Mirror_-_Aquarius%2C_Piscis_Australis_%26_Ballon_Aerostatique.jpg',
  pisces: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Sidney_Hall_-_Urania%27s_Mirror_-_Pisces.jpg/1280px-Sidney_Hall_-_Urania%27s_Mirror_-_Pisces.jpg',
};

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
    const signImageUrl = SIGN_IMAGES[this.state.sign.toLowerCase()];
    return (
      <main className='horoscope-main'>
      <QuickNav />
        <h1>Current Date: {this.state.currentDate}</h1>
        <div className='filters'>
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
          {/* Filter */}
        <div className='filter-mobile'>
          <select name="sign" id="sign" onChange={(event) => this.fetchHoroscope(event.target.value)}>
          <option value="none" selected disabled hidden>Choose</option>
            <option value="capricorn">Capricorn</option>
            <option value="aries">Aries</option>
            <option value="taurus">Taurus</option>
            <option value="gemini">Gemini</option>
            <option value="cancer">Cancer</option>
            <option value="leo">Leo</option>
            <option value="virgo">Virgo</option>
            <option value="libra">Libra</option>
            <option value="scorpio">Scorpio</option>
            <option value="sagittarius">Sagittarius</option>
            <option value="aquarius">Aquarius</option>
            <option value="pisces">Pisces</option>
          </select>
        </div>
        {/* Wrapper */}
        <div className="horoscope-wrapper">
          {/* Left */}
          <div className='left'>
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
          <div className='right'>
            <img
              className="horoscope-img"
              src={signImageUrl} alt={this.state.sign}>
            </img>
          </div>
        </div>
      </main>
    );
  }
}

export default Aztro;
