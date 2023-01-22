import React from "react";

const classBot = {
    Assault: "	fas fa-fighter-jet",
    Defender: " fas fa-shield-alt",
    Support: "fas fa-user-tie",
    Medic: "fas fa-ambulance",
    Witch: "fas fa-broom",
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
                        <br />
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <i className=""/>
                                        <strong>{bot.health}</strong>
                                    </div>
                                    <div>
                                        <i className=""/>
                                        <strong>{bot.damage}</strong>
                                    </div>
                                    <div>
                                        <i className=""/>
                                        <strong>{bot.armor}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                        onClick={()=>{}}>
                            Back
                        </button>
                        <button
                        onClick={()=>{}}>
                            EnList
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
  }

  export default BotAttribute