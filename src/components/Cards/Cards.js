import React, {useEffect, useState} from 'react'
import styles from './Cards.css'
import TinderCard from 'react-tinder-card';
import axios from '../../axios.js'

function Cards() {
  const [people, setPeople] = useState([]);
// when the cards will get load this piece of code in use effect will run once.
  useEffect(async()=>{
    function fetchData(){
      const req = await axios.get('/api/cards')
      setPeople(req.data);
    }
    fetchData();
  }, [])

  const swiped=(direction, nameToDelete)=>{
    console.log("removing:"+nameToDelete)
  }
  const outOfFrame=(name)=>{
    console.log(name + "left the screen")
  }

  return (
    <div className='cards'>
      <div className="Cards_cardContainer">
        {/* rendering required stuff from people usestate */}
      {people.map((person)=>(
        <TinderCard className='swipe' preventSwipe={["up", "down"]} onSwipe={(dir)=>swiped(dir, person.name)} onCardLeftScreen={()=> outOfFrame(person.name)}>
            <div style={{backgroundImage:`url(${person.url})`}} className="card">
              <h3>{person.name}</h3>
            </div>
        </TinderCard>
      ))}
      </div>  
    </div>
  )
}

export default Cards