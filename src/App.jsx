// Supports weights 200-800
import '@fontsource-variable/dosis';

import { useState } from 'react';
import { data } from './data/data';

import ImcCalc from './components/ImcCalc';
import ImcInfo from './components/ImcInfo';



export default function App() {

  const calcImc = (e, height, weight) => {
    e.preventDefault(e);

    if(!weight || !height) return;
    
//replace troca a vírgula pelo ponto.
    const weightFloat = +weight.replace("," , "."); 
    const heightFloat = +height.replace("," , ".");

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    setImc(imcResult)

    data.forEach((item) => {
      if(imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoclass);

      }
    })

    if(!info) {
      return
    }


  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoclass, setInfoClass] = useState("");
  

  return (
    <div className="flex justify-center items-center h-[600px] w-[470px] bg-[#2d4258] border border-orange-400">
      
      {!imc ? <ImcCalc calcImc={ calcImc } /> : <ImcInfo data={ data } imc={imc} info={info}  infoclass={infoclass}/> }

    </div>
  )
}