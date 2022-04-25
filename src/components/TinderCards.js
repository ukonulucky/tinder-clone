import React, { useState } from 'react'
import "./styles/TinderCards.css"
import TinderCard from "react-tinder-card"
import "./styles/TinderCards.css"
import { EscalatorRounded } from '@mui/icons-material'
function TinderCards() {

  const swiped = (dir, nameToremove) => {
    console.log(`removing ${nameToremove}`)
  }

  const outOfFrame = (removedName) => {
  console.log(`${removedName} left the screen`)
  }
    const [people, setpeople] = useState([{
        name: "Elon Musc",
        url:"https://media.gettyimages.com/photos/tesla-ceo-elon-musk-speaks-during-an-event-to-launch-the-new-tesla-x-picture-id490597838?k=20&m=490597838&s=612x612&w=0&h=iS2ZaGo4mu_ooqXzwivn4pFzxaYg-1FJ5VYMHzy1J5I="
    },
    {
        name: "Jeff Bezos",
        url:"https://media.gettyimages.com/photos/amazon-ceo-jeff-bezos-unveils-new-kindle-reading-devices-at-a-press-picture-id151367140?k=20&m=151367140&s=612x612&w=0&h=SlUilghFc20dXJHamiPtvPNa33P5JdiUVQalsqUPV2Y="
        }])
    
    const TinderCardsImages = people.map((person, index) => 
    
    (
      
        <TinderCard
      className="swipe"
      key={index}
      preventSwipe={["up", "down"]}
      onSwipe={(dir) => swiped(dir, person.name)}
      onCardLeftScreen={ () => outOfFrame(person.name)}
      >
        <div style={{
          backgroundImage:`url(${person.url})`
        }}
        className="card">
          <h3>{person.name}</h3>
        </div>
      </TinderCard>

     
      )
    )
  
  console.log(`this is the TinderCardImages ${TinderCardsImages.toString()}`)
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
           { TinderCardsImages }
      </div>
    </div>
  );
}

export default TinderCards;
