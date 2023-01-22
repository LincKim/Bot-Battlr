import React from "react";
import CardBot from "./CardBot";

function BotCollective ({numberBots, enlistBot, deleteBot}){

    const showBot = numberBots.map((bot)=>{
        return (
            <CardBot 
            key={bot.id}
            bot={bot}
            clickEvent={enlistBot}
            deleteBot={deleteBot}
            />
        )
    })

    return (
        <div className="container mt-4">
            <div className="row">
                {showBot}
            </div>
        </div>
    )
}

export default BotCollective

