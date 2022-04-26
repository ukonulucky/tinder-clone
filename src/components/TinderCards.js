import React, { useEffect, useState } from 'react'
import axios from "axios"
import axiosInitial from './axios.js'
import "./styles/TinderCards.css"
import TinderCard from "react-tinder-card"
import "./styles/TinderCards.css"
import { EscalatorRounded } from '@mui/icons-material'
import Spinner from "./Spinner.jsx"
function TinderCards() {

  const swiped = (dir, nameToremove) => {
    console.log(`removing ${nameToremove}`)
  }

  const outOfFrame = (removedName) => {
  console.log(`${removedName} left the screen`)
  }
  const [loader, setLoader] = useState(true)
  const [people, setpeople] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const info = await axios.get("http://localhost:8001/tinder-clone/getCards");
      if (info.data) {
        // console.log(info.data)
        setpeople([...info.data])
        if (people !== []) {
          setLoader(false)
        }
        }
      } catch (err) {
        console.log(err)
        
      }
    }
    getData()
    },[])
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
  return (loader ? <Spinner loader={ loader}/>:
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
           { TinderCardsImages }
      </div>
    </div>
  );
}

export default TinderCards;
