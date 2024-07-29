// Utilização do Props para passar o texto do botão
import React, { Children } from 'react';


// Estamos criando uma função "action" e passamos a função para o botão
const Btn = ({action, Children, variant,  ...props}) => {
  const handleAction = (e) => {
    action(e);
  }
  
  return (
    <button
      {...props}
      onClick={handleAction}>
      {props.text}
    </button>
  );
};

export default Btn;
