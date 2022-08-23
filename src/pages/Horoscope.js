import React, { Component } from 'react';

class Aztro extends Component {
    constructor(props){
        super(props);
        this.state = {
          json: {}
        }
    }

    componentDidMount () {


        const URL = 'https://aztro.sameerkumar.website?sign= <sign> &day= <day>';
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { this.setState({json}); });

        console.log()
    }

    render() {
        return (
          <main>
              Current Date: {this.state.json.current_date} <br />
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