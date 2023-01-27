import { useState } from 'react'
import './App.css';

export default function App() {
  const [peso, setPeso] = useState(''); 
  const [altura, setAltura] = useState(''); 

  const[mensagem, setMensagem] = useState('');

  function calIMC() {
    const alt = altura / 100;
    const imc = peso / (alt + alt);

    if(imc < 18.5) {
      setMensagem("Você está abaixo do peso! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 18.5 && imc < 24.9){
      setMensagem("Você está no peso normal! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 24.9 &&  imc < 34.9){
      setMensagem("Você está na Obesidade grau 1! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 34.9 && imc < 39.9){
      setMensagem("Você está na obesidade grau 2! Seu IMC: " + imc.toFixed(2))
    }else if(imc > 40){
      setMensagem("Cuidado, está na obsesidade grau 3! Seu IMC: " + imc.toFixed(2))
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Calcular IMC</span>
    
      <div className="input">
        <input type="text" placeholder="Peso (KG)"
        value={peso}
        onChange={(evento) => setPeso(evento.target.value)} //Saber o que o usuario está digitando. 
        ></input>
        
        
        <input type="text" placeholder="Altura (CM) "
        value={altura}
        onChange={(evento) => setAltura(evento.target.value)}></input>
        
      
        <button onClick={calIMC}>
          Calcular
        </button>
      </div>
    
      <h2>{mensagem}</h2>

    </div>
  )
}