import React, {useState} from 'react'
import styles from './Cards.css'
import TinderCard from 'react-tinder-card';


function Cards() {
  const [people, setPeople] = useState([
    {
      name:"number 1",
      url: "https://miro.medium.com/max/1400/0*5r30PTL5B_YGcl5M"
    },
    {
      name:"numsber 2",
      url: "https://images.unsplash.com/photo-1574701148212-8518049c7b2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      name:"number 3",
      url:"https://images.unsplash.com/photo-1533729590644-695ded775a63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      name:"number 4",
      url:"https://images.unsplash.com/photo-1575439462433-8e1969065df7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      name:"number 5",
      url:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0aWZ1bCUyMGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
  ]);

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