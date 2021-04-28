import React, { useState } from "react";

function Toggle() {

  const[isOn, setIsOn] = useState(false)

  function handelClick(){
      setIsOn(!isOn)
  }
  
  const color = isOn? 'red' : 'white'
  return <button style={{background: color}} onClick={handelClick}>{isOn ? "On" : "Off"}</button>;
}

export default Toggle;


// function Toggle() {

//   const[isOff, setIsOff] = useState(false)

//   function handelClick(){
//       setIsOff(!isOff)
//   }

//   return <button onClick={handelClick}>{isOff ? "On" : "Off"}</button>;
// }

// export default Toggle;


