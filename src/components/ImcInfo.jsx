import React from 'react'
import Btn from './Btn'
import {tv} from 'tailwind-variants'

const buttonVariant = tv(
  {
    base: 'cursor-point p-2 w-40 border opacity-90',
    variants: {
      colorBtn: 
      {
        primary:    'text-white font-bold text-lg uppercase border-orange-800 bg-orange-500 hover:bg-orange-800 hover:text-orange-300',
        secondary:  'text-white font-bold text-lg uppercase border-red-800 bg-red-500 hover:bg-red-800 hover:text-red-300'
      }
    }
  }
)

// No IMCInfo recebemos propriedades
const ImcInfo = ({ data }) => {
  return (
    <div className='flex flex-col w-full p-4'>
        <p className='text text-[50px] text-orange-400 mb-10'>
          Seu IMC:
        </p>
        <p className='text-slate-300 text-3xl'>
          Situação Atual:
        </p>
        <h3>Confira às classificações</h3>

        <div>
            <div>
              <h4>IMC</h4>
              <h4>Classificação</h4>
              <h4>Obesidade</h4>
            </div>
            
            {data.map((item) => (
              
              <div key={item.info}>
                
                <p>{item.clasification}</p>
                <p>{item.info}</p>
                <p>{item.obesity}</p>

              </div>

            ))}
        </div>
        <Btn 
          text='Voltar'
          className={buttonVariant({colorBtn: 'secondary'})}
        > 
        </Btn>
    </div>
  )
}

export default ImcInfo