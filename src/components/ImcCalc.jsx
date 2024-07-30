import React, { useState } from 'react'
import Btn from './Btn'
import {tv} from 'tailwind-variants'
import { Ruler, Weight } from 'lucide-react'

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

const ImcCalc = ({ calcImc }) => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
  
    const clearForm = (e) => {
        
        // e.preventDefault(e) - Vai evitar que a tela recarregue a ativar um botão
        e.preventDefault(e);
        setHeight("");
        setWeight("");
    }

// criação de bloqueio de dígitos não necessários
    const validDigits = (text) => {
        return text.replace(/[^0-9, ]/g, "")
    }

    const handleHeightChance = (e) => {
        const updateValue = validDigits(e.target.value)
        
        setHeight(updateValue);
    }

    const handleWeightChance = (e) => {
        const updateValue = validDigits(e.target.value)

        setWeight(updateValue)
    }

  return (
    <div className='flex items-center justify-center flex-col'>
        <h2 className='text text-[50px] text-orange-400 mb-10'>
            Calculadora de IMC
        </h2>

        <form>
            <div className='flex flex-col items-center justify-center'>
                
                <div className='flex flex-col gap-2 w-full mb-2'>
                    <label 
                        htmlFor="height"
                        className='text-orange-400 text-3xl'
                    >
                        Altura: 
                    </label>
                    <div className='flex'>
                        <Ruler className='text-orange-400 size-11 mr-3'     />
                        <input
                            type="text" 
                            name="height"
                            id='height'
                            placeholder='Exemplo 1,75'
                            onChange={(e) => handleHeightChance(e)}
                            value={height}

                            className='outline-none p-4 w-full font-bold focus:bg-slate-200'
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-2  w-full'>
                    <label 
                        htmlFor="weight"
                        className='text-orange-400 text-3xl'
                    >
                        Peso: 
                    </label>
                    <div className='flex'>
                        <Weight className='text-orange-400 size-11 mr-3'/>
                        <input 
                            type="text" 
                            name="weight"
                            id='weight'
                            placeholder='Exemplo 70.5'
                            onChange={(e) => handleWeightChance(e)}
                            value={weight}

                            className='outline-none p-4 w-full font-bold focus:bg-slate-200'
                        />
                    </div>
                </div>

            </div>

            <div
             className='flex gap-3 items-center justify-center mt-7 '
            >

                {/* calcImc foi passado via Props do App para o Button! */}
                {/* Botões Calcular e Limpar */}
                <Btn
                    text="Calcular"
                    action={(e) => calcImc(e, height, weight)}
                    className={buttonVariant({colorBtn: 'primary'})}
                > 
                </Btn>
                <Btn 
                    text="Limpar"
                    action={clearForm}
                    className={buttonVariant({colorBtn: 'secondary'})}
                >
                </Btn>
            </div>
        </form>

        <div className='border border-cyan-400 mt-5 flex flex-1'>
    
            {/* resultado */}
    
        </div>
    </div>
  )
}

export default ImcCalc
