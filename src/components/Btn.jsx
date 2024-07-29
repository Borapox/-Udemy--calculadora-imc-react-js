// Utilização do Props para passar o texto do botão
import React from 'react';

const Btn = (props) => {
  return (
    <button
      className='cursor-pointer border border-orange-400 rounded-md bg-zinc-700 text-orange-500 p-2 w-40 hover:bg-zinc-800 hover:text-orange-700'
    >
      {props.text}
    </button>
  );
};

export default Btn;
