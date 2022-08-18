import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <iframe
        src="https://www.youtube.com/embed/JkWMnad72bk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="lyrics">
        <h1>Estudo do Tempo</h1>
        <p>Esta página levou 9m14s para ser criada e publicada!</p>
        <h2>Neste tempo você também conseguiria:</h2>
        <p>
          Ler a documentação básica do Vite
          <br />
          https://vitejs.dev/guide/#scaffolding-your-first-vite-project
        </p>
        <p>
          Fazer um Hello World em React <br />
          https://www.youtube.com/watch?v=AKXpOUo10k0
        </p>
        <p>
          Ver este vídeo do Firebase sobre Monorepos
          <br />
          https://www.youtube.com/watch?v=9iU_IE6vnJ8
        </p>
        <p>
          Ler este artigo sobre testes com Jest (tem até um botão Listen para ouvir)
          <br />
          https://medium.com/swlh/how-to-testwith-jest-bfdb9bd40d86
        </p>
        <p>
          Ou até mesmo ver esse React do Casimiro vendo vído do Corbucci <br />
          https://www.youtube.com/watch?v=z9NT4gAY3xk
        </p>
        <h2>A decisão é sua!</h2>
      </div>
    </div>
  );
}

export default App;
