import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({onRemove,bots,onDischarge}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
          {bots.map(bot=>(
            <BotCard
            key={bot.id}
            bot={bot}
            onRemove={onRemove}
            onDischarge={onDischarge}
            isInArmy={true}/>
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
