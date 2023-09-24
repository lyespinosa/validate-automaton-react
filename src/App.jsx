import './App.css'
import { Input, Image, Button } from "@nextui-org/react";
import validateWithAutomata from './service/validateWithAutomata';
import diagrama from './assets/diagrama.png';
import { useState } from 'react';

function App() {

  const [inputString, setinputString] = useState("")

  const [result, setResult] = useState()
  const [statesFollowed, setStatesFollowed] = useState()

  const handleInput = (value) => {
    setinputString(value)
  }

  const validateString = () => {
    if (inputString.length === 9) {
      const result = validateWithAutomata(inputString);
      if (result.isAccepted) {
        setResult(`La cadena "${inputString}" fue aceptada.`);
      } else {
        setResult(`La cadena "${inputString}" no fue aceptada.`);
      }
      let states = result.statesFollowed.join(" -> ")
      setStatesFollowed("Estados recorridos:" + states);
    }
  }

  return (

    <div className='py-10'>
      <div className='flex flex-col justify-center items-center'>

        <h1 className='text-3xl'>Automata de rango de matrículas:
          <span> 7-SR-99-D -- 8-SV-99-W</span>
        </h1>
        <Image
          width={1500}
          alt="diagram"
          src={diagrama}
        />
     
      </div>

      <div className='px-64 pt-10 flex flex-col items-center'>
        <hr />

        <p className='py-4 font-medium text-2xl'>Ingresa la cadena a comprobar</p>

        <div className='flex flex-row w-[75%] gap-5 items-center  h-auto justify-center '>
          <div className='flex-1'></div>
          <Input onValueChange={handleInput} value={inputString} className='w-[10em]' maxLength={9} size='lg' type="text" label="Cadena" />
          <Button onPress={validateString} className='' color="primary">
            Comprobar
          </Button  >
          <p className=' font w-[35%] text-lg'>{result}</p>
        </div>

        <p className='mt-6 font-medium text-lg'>{statesFollowed}</p>
      </div>
    </div>
  )
}

export default App
