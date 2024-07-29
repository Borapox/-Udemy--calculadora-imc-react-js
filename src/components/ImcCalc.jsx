import React, { useState } from 'react'
import Btn from './Btn'




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
                > 
                </Btn>
                <Btn 
                    id='clear-btn'
                    text="Limpar"
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
