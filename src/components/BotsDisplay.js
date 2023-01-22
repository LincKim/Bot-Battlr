import React, {useState, useEffect} from "react";
import BotCollective from "./BotCollective";
import BotListArmy from "./BotListArmy";


function BotsDisplay (){

    const [bots, setBots] =  useState([]);

    //fetch data regarding bots

    const getData =()=>{
        return (fetch (`http://localhost:3000/bots`)
                    .then(res=>res.json())
                    .then((data)=>{
                        setBots(data)
                    })

        )
    }

    useEffect(()=>{
        getData();
    }, [])

    //Enabling the addition of the bot once the cardbot is clicked
    const enlistBot= (bot)=>{
        setBots(bots.map((b)=>(b.id === bot.id ? {...b, army:true} : b)))
    }
    const removeBot =(bot)=>{
        setBots(bots.map((b)=>(b.id === bot.id ? {...b, army:false} : b)))
    }

    const deleteBot = (bot)=>{
        const botRemoved =  bots.filter((b)=> b.id !==bot.id);
        setBots((bots)=>botRemoved)
    }

    return (
        <div>
            <BotListArmy
            bots={bots.filter((b)=>b.army)}
            removeBot={removeBot}
            deleteBot={deleteBot}
            
            />

            <BotCollective 
            numberBots={bots}
            enlistBot={enlistBot}
            deleteBot={deleteBot}
            
            />
        </div>
    )
}

export default BotsDisplay