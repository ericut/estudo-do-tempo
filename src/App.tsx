import "./App.css";

function App() {
  const lista = [
    { title: "Ler a documentação básica do Vite", link: "https://vitejs.dev/guide/#scaffolding-your-first-vite-project" },
    { title: "Fazer um Hello World em React", link: "https://www.youtube.com/watch?v=AKXpOUo10k0" },
    { title: "Ver este vídeo do Firebase sobre Monorepos", link: "https://www.youtube.com/watch?v=9iU_IE6vnJ8" },
    {
      title: "Ler este artigo sobre testes com Jest (tem até um botão Listen para ouvir)",
      link: "https://medium.com/swlh/how-to-testwith-jest-bfdb9bd40d86",
    },
    {
      title: "Ou até mesmo ver esse React do Casimiro vendo vídeo do Corbucci em 1.2x",
      link: "https://www.youtube.com/watch?v=z9NT4gAY3xk",
    },
  ];

  return (
    <div className="App">
      <iframe
        src="https://www.youtube.com/embed/JkWMnad72bk"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <div className="lyrics">
        <h1>Estudo do Tempo</h1>
        <p>Esta página levou 9m14s para ser criada e publicada!</p>
        <h2>Neste tempo você também conseguiria:</h2>
        {lista.map((item) => {
          return (
            <p>
              {item.title}
              <br />
              <a href={item.link} target="_blank">
                {item.link}
              </a>
            </p>
          );
        })}
        <h2>A decisão é sua!</h2>
      </div>
    </div>
  );
}

export default App;
