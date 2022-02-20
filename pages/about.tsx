import React from 'react';
import MyButtom from '../components/MyButtom';
import {useCounter} from "../lib/Counter"

const About= () => {
  const [state, {increment,decrease}]= useCounter();

  return(
    <div>
      <p>About</p>
      <img src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5beaba975bafe86f2c2b41c4/marvel-heroes_0.jpg" alt="" width= "500px" />
      <MyButtom actionsButton = {() => increment()} text = "Add one" />
      <MyButtom actionsButton = {()=>decrease()} text = "Delete one" />
    </div>
  
  )

}
export default About;