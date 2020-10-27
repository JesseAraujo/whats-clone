import React from 'react';
import "./styles/styles.css"

function App() {
  return (
    <div className="App">
      <header></header>

      <div className="container">
        <div className="left">
          <div className="top">
            <img src="https://avatars1.githubusercontent.com/u/28305012?s=460&u=e947608a2d0a560ea99595c3b37e3a02ef1ad93b&v=4" />
            <div className="icons">
            </div>
          </div>
          <div className="search">
            <input type="text" placeholder="Procurar ou começar uma conversa nova" />
          </div>
        </div>
        <div className="right">
          <div className="contant">


            <img src="https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg" />
            <h1>Mantenha seu celular conectado</h1>

            <p>
              O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. <br />
              Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.
            </p>

            <hr />

            <p>
              O WhatsApp está disponível para Windows. <a href="#">Obtenha-o aqui</a>
            </p>
          </div>
        </div>


      </div>


    </div>
  );
}

export default App;
