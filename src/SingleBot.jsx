import React from "react";

const SingleBot = ({ bot, addBot }) => {
  return (
    <div className='card'>
      <button onClick={() => addBot(bot)}>Add Bot</button>
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <ul>
        <li>Health: {bot.health}</li>
        <li>DAMAGE: {bot.damage}</li>
        <li>Armor: {bot.armor}</li>
        <li>Class: {bot.bot_class}</li>
        <li>Catchphrase: {bot.catchphrase}</li>
        <li>Created on: {bot.created_at}</li>
        <li>Updated at: {bot.updated_at}</li>
      </ul>
    </div>
  );
};

export default SingleBot;