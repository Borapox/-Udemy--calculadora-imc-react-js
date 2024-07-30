// Supports weights 200-800
import '@fontsource-variable/dosis';
import { useState } from 'react';
// import { data } from './data/Data';
import ImcCalc from './components/ImcCalc';
import ImcInfo from './components/ImcInfo';



export default function App() {

  const calcImc = (e, height, weight) => {
    e.preventDefault(e);

    if(!weight || height) {
      return;
    }

    console.log("Executou!")
  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [incoclass, setInfoClass] = useState("");
  

  return (
    <div className="flex justify-center items-center h-[500px] w-[450px] bg-[#2d4258] border border-orange-400">
      
      {!imc ?
        <ImcCalc 
          calcImc={calcImc}
        /> 
      :
        (
          <ImcInfo />
        )
      }

    </div>
  )
}