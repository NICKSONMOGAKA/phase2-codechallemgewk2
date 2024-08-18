import React from 'react';
import SingleBot from './SingleBot';

const YourBotArmy = ({ bots }) => (
  <div className='card'>
    <h2>BOT ARMY</h2>
    <div>
      {bots.map(bot => (
        <SingleBot key={bot.id} bot={bot} />
      ))}
    </div>
  </div>
);

export default YourBotArmy;
