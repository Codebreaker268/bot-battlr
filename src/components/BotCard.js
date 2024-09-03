import React from "react";
import { useState } from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot ,onAddBot,onRemove,onDischarge,isInArmy}) {
  const[disabled,setDisabled]=useState(false)
  function handleAdd(){
    onAddBot(bot)
    setDisabled(true)
  }
  // function handleDischarge(){
  //   onDischarge(bot)
  // }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        
      >
        {!isInArmy &&<button onClick={handleAdd} disabled={disabled}>addBot</button > }
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              {isInArmy &&<button
                className="ui mini red button"
                onClick={()=>onDischarge(bot)}
              >
                x
              </button>}
              {isInArmy &&<button onClick={()=>onRemove(bot)}>Remove from army</button>}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
