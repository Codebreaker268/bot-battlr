import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { useState,useEffect } from "react";

function BotsPage() {
  //start here with your code for step one
  const [bots,setBots]=useState([])
  const [army,setArmy]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8002/bots')
    .then(response=>response.json())
    .then(data=>setBots(data))
  },[])
  const addBot=(bot)=>(
    setArmy([...army,bot])
  )

  const removeBotFromArmy = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  }
    const dischargeBot = (bot) => {
      fetch(`http://localhost:8002/bots/${bot.id}`, {
        method: 'DELETE',
      }).then(() => {
        setArmy(army.filter(b => b.id !== bot.id));
        setBots(bots.filter(b => b.id !== bot.id));
      });
    }

  

  return (
    <div>
      <YourBotArmy onRemove={removeBotFromArmy}  bots={army} onDischarge={dischargeBot} />
      <BotCollection bots={bots} onAddBot={addBot} />
    </div>
  )
}

export default BotsPage;
