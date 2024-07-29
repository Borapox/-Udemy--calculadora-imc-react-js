// Utilização do Props para passar o texto do botão
import React, { Children } from 'react';


const Btn = ({Children, variant,  ...props}) => {
  return (
    <button
      {...props}>
      {props.text}
    </button>
  );
};

export default Btn;
