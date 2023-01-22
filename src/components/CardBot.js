import React from "react";

const classBot = {
  Assault: "	fas fa-fighter-jet",
  Defender: " fas fa-shield-alt",
  Support: "fas fa-user-tie",
  Medic: "fas fa-ambulance",
  Witch: "	fas fa-broom",
  Captain: " fas fa-star",
};

function CardBot({ bot, clickEvent, deleteBot }) {
  return (
    <div className="col-3 p-1">
      <div
        className="card h-100 shadow p-3 mb-5 bg-body rounded"
        key={bot.id}
        onClick={() => clickEvent(bot)}
      >
        <img
          className="card-img-top"
          src={bot.avatar_url}
          alt="bot incoming!"
        />
        <div className="card-body">
          <div className="card-title">
            {bot.name}
            <i className={classBot[bot.bot_class]} />
          </div>
          <div className="card-text">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="card-text">
          <span>
            <i className="fas fa-heartbeat" /> Health: {bot.health} <br />
          </span>
          <span>
            <i className="fas fa-bolt" />
            Damage: {bot.damage} <br />
          </span>
          <span>
            <i className="	fas fa-shield-alt" /> Armour: {bot.armor}
          </span>
          <span>
            <div>
              <button
                className="btn btn-warning"
                onClick={(event) => {
                  event.stopPropagation();
                  deleteBot(bot);
                }}
              >
                delete
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardBot;
