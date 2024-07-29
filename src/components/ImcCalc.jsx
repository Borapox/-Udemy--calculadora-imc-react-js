import React, { useState } from 'react'
import Btn from './Btn'
import {tv} from 'tailwind-variants'

const buttonVariant = tv(
  {
    base: 'cursor-point rounded-md p-2 w-40 border opacity-90',
    variants: {
      colorBtn: {
        primary: 'border-orange-400 text-orange-500 hover:text-orange-700 uppercase hover:bg-zinc-800 hover:opacity-100 bg-zinc-700',
        secondary: 'text-red-100 border-red-800 bg-red-500 hover:bg-red-800 hover:text-red-300'
      }
    }
  }
)



const ImcCalc = () => {

  return (
    <div className='flex items-center justify-center flex-col'>
        <h2 className='mb-5 text text-3xl'>
            Calculadora de IMC
        </h2>

        <form>
            <div className='flex flex-col items-center w-[450px]'>
                
                <div className='flex gap-5'>
                    <label 
                        htmlFor="height"
                        className='text-orange-400 text-3xl'
                    >
                        Altura - 
                    </label>
                    <div>
                        <input 
                            type="text" 
                            name="height"
                            id='height'
                            placeholder='Exemplo 1,75'
                            className='outline-none rounded-md h-8 px-2'
                        />
                    </div>
                </div>

                <div className='flex gap-5'>
                    <label 
                        htmlFor="weight"
                        className='text-orange-400 text-3xl'
                    >
                        Peso - 
                    </label>
                    <div>
                        <input 
                            type="text" 
                            name="weight"
                            id='weight'
                            placeholder='Exemplo 70.5'
                            className='outline-none rounded-md h-8 px-2'    
                        />
                    </div>
                </div>

            </div>

            <div
             className='flex gap-3 items-center justify-center mt-5 '
            >
                <Btn
                    id='calc-btn'
                    text="Calcular"
                    className={buttonVariant({colorBtn: 'primary'})}
                > 
                </Btn>
                <Btn 
                    id='clear-btn'
                    text="Limpar"
                    className={buttonVariant({colorBtn: 'secondary'})}
                >
                </Btn>
            </div>
        </form>

        <div className='border border-cyan-400 mt-5'>
    {/* resultado */}
        </div>
    </div>
  )
}

export default ImcCalc
