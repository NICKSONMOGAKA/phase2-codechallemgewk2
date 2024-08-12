import React, { useState, useEffect } from "react";
import SingleBot from "./SingleBot";
import YourBotArmy from "./YourBotArmy";

const BotCollection = () => {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);
  const [showArmy, setShowArmy] = useState(false);

  useEffect(() => {
    fetch("https://wk2backend.vercel.app/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  const handleAddBot = (bot) => {
    setYourBotArmy([...yourBotArmy, bot]);
  };

  const toggleArmy = () => {
    setShowArmy(!showArmy);
  };

  return (
    <div>
      <button onClick={toggleArmy}>
        {showArmy ? "Close Your Bot Army" : "Your Bot Army"}
      </button>
      {showArmy ? (
        <YourBotArmy bots={yourBotArmy} />
      ) : (
        <div className='card'>
          {bots.map((bot) => (
            <SingleBot key={bot.id} bot={bot} addBot={handleAddBot} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BotCollection;
