import React from "react";
import CardBot from "./CardBot";

function BotListArmy ({bots, removeBot, deleteBot}){

    const botArmy =  bots.map((bot)=>{
        return (
            <CardBot
            key={bot.id}
            bot={bot}
            clickEvent={removeBot}
            deleteBot={deleteBot}
            />
        )
    })

    return(
        <div className= 'd-block p-2 bg-secondary army'>
            <strong className="text-light">MARVIN'S BOT ARMY</strong>
            <div className="container mt-5">
                <div className="row army-row">
                    {botArmy}
                </div>
            </div>
        </div>
    )
}

export default BotListArmy