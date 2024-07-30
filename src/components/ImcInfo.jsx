import React from 'react'
import Btn from './Btn'
import {tv} from 'tailwind-variants'

const buttonVariant = tv(
  {
    base: 'cursor-point p-2 w-40 border',
    variants: {
      colorBtn: 
      {
        primary:  'text-white font-bold text-lg uppercase border-red-800 bg-red-500 hover:bg-red-800 active:bg-red-900'
      }
    }
  }
)

// No IMCInfo recebemos propriedades
const ImcInfo = ({ data }) => {
  return (
    <div className='w-full flex flex-col p-4'>
        
            <p className='text text-[50px] text-orange-400 p-4 flex items-center justify-center'>
              Seu IMC:
            </p>
            <p className='text-slate-300 text-3xl flex justify-center'>
              Situação Atual
            </p>

            <h3 className='text-slate-300 flex justify-center mb-5 mt-2'>
              Confira às classificações
            </h3>

            <div>
                <div className='flex justify-between text-zinc-200 mb-2 pb-2 px-px border-b-2 text-[20px]  border-zinc-500'>
                  <h4>IMC</h4>
                  <h4>Classificação</h4>
                  <h4>Obesidade</h4>
                </div>
                
                {data.map((item) => (
                  
                  <div 
                    key={item.info}
                    className='flex justify-between text-zinc-200 mb-2 p-2 border-b-2 border-dashed border-zinc-500 hover:bg-orange-400 hover:text-zinc-800'>
                  
                    
                      <p>{item.classification}</p>
                      <p>{item.info}</p>
                      <p>{item.obesity}</p>
                  </div>
                  

                ))}
            </div>
        
        <div className='flex justify-center items-center mt-5'>
            <Btn 
              text='Voltar'
              className={buttonVariant({colorBtn: 'primary'})}
            > 
            </Btn>
        </div>
    </div>
  )
}

export default ImcInfo