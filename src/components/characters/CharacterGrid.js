import React from 'react';
import CharacterItem from './CharacterItem.js';
import Spinner from '../ui/Spinner.js';

const CharacterGrid = ({items,loading}) => {
  return loading?  (<Spinner/> ) : (<div className="cards">
      {items.map((item)=>(
         <CharacterItem key={item.char_id} item = {item}/>
      ))}
  </div>);

}

export default CharacterGrid;