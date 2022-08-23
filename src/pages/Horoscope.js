import React, { Component } from 'react';

class Aztro extends Component {
    constructor(props){
        super(props);
        this.state = {
          json: {}
        }
    }

    handleClick = () => {
    console.log('click')
    const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
    fetch(URL, {
        method: 'POST'
    }).then(response => response.json())
    .then(json => { this.setState({json}); });
    }


    // componentDidMount () {
    //     const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
    //     fetch(URL, {
    //         method: 'POST'
    //     }).then(response => response.json())
    //     .then(json => { this.setState({json}); });
    // }






    render() {
        return (

          <main>
            
          <h1>Current Date: {this.state.json.current_date}</h1>
          
          <div className='zodiac-btn'>

              
            <button onClick={this.handleClick}>
            Aries
            </button>
              <button>Taurus</button>
              <button>Gemini</button>
              <button>Cancer</button>
              <button>Leo</button>
              <button>Virgo</button>
              <button>Libra</button>
              <button>Scorpio</button>
              <button>Sagittarius</button>
              <button>Capricorn</button>
              <button>Aquarius </button>
              <button>Pisces</button>
          </div>

          <br />
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


//backup

// function Horoscope() {
//   return (
//     <main>
//         <h1>Daily Horoscope</h1>
//         <p>😎Choose your sign 😎</p>
//         <button> libra </button>




//     </main>
//   )
// }

// export default Horoscope