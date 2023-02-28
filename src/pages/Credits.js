import React from 'react'
import QuickNav from '../components/QuickNav'

function Credits() {
  return (
    <main>
      <QuickNav />
        <h4>Made with:</h4>
      <p>React & Sass</p>
    <p>API :</p>
        <a href="https://aztro.sameerkumar.website/" rel="noreferrer"  target="_blank">Tarot Cards</a>
        <a href="https://rws-cards-api.herokuapp.com/" rel="noreferrer"  target="_blank">Horoscope</a>

        <p>Images :</p>
        <a href="https://www.yoshitakaamano.com/" rel="noreferrer"  target="_blank">yoshitaka amano</a>
        <a href="https://en.wikipedia.org/wiki/Rider%E2%80%93Waite_tarot_deck" rel="noreferrer"  target="_blank">Tarot Cards</a>
        <a href="https://en.wikipedia.org/wiki/Zodiac" rel="noreferrer"  target='blank'>Horoscope Images</a>
        <p>Font</p>
        <a href='https://www.dafont.com/ancient.font' rel="noreferrer"  target="_blank">
          www.dafont.com
        </a>

    </main>
  )
}

export default Credits