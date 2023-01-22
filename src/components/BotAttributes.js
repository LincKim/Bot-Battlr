import React from "react";

const classBot = {
    Assault: "	fas fa-fighter-jet",
    Defender: " fas fa-shield-alt",
    Support: "fas fa-user-tie",
    Medic: "fas fa-ambulance",
    Witch: "	fas fa-broom",
    Captain: " fas fa-star",
  };

  function BotAttribute({bot}){
    return (
        <div>
            <div>
                <div>
                    <div>
                        <img src={bot.avatar_url} alt="bot incoming" />
                    </div>
                    <div>
                        <h2>Name: {bot.name}</h2>
                        <p>
                            <em>Catchphrase: </em>
                            {bot.catchphrase}
                        </p>
                        <strong>
                            Class: {bot.bot_class}
                            <i className={classBot[bot.bot_class]}/>
                        </strong>
                    </div>
                </div>
            </div>
        </div>
    )
  }