import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { useState,useEffect } from "react";

function BotsPage() {
  //start here with your code for step one
  const [bots,setBots]=useState('')
  useEffect(()=>{
    fetch('http://localhost:8002/bots')
    .then(respnse=>respnse.json())
    .then(data=>setBots(data))
  },[])

  return (
    <div>
      <YourBotArmy />
      <BotCollection bots={bots} />
    </div>
  )
}

export default BotsPage;
