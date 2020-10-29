import React from 'react';
import { MdComputer } from "react-icons/md"

import "./styles/styles.css"

import storiesImg from './images/icons/circle.svg'
import statusImg from './images/icons/status.svg'
import moreImg from './images/icons/more.svg'
import searchImg from './images/icons/search.svg'
import checkImg from './images/icons/check.svg'

function App() {
  return (
    <div className="App">
      <header></header>

      <div className="container">
        <div className="left">
          <div className="top">
            <img src="https://avatars1.githubusercontent.com/u/28305012?s=460&u=e947608a2d0a560ea99595c3b37e3a02ef1ad93b&v=4" alt="icone" />
            <div className="icons">
              <img src={storiesImg} alt="icone" />
              <img src={statusImg} alt="icone" />
              <img src={moreImg} alt="icone" />
            </div>
          </div>
          <div className="search">
            <div className="searchGroup" >
              <img src={searchImg} alt="icone" />
              <input type="text" placeholder="Procurar ou começar uma conversa nova" />
            </div>
          </div>

          <div id="chatList" >
            <div className="avatar">
              <img src="https://engenharia360.com/wp-content/uploads/2019/05/esta-pessoa-nao-existe-engenharia360-4.png" alt="icone" />
            </div>
            <div className="label">
              <div className="name_chat">
                <h2>Marcos Andrade Souza</h2>
                <div className="chatText">
                  <p>Bom dia amigo</p>
                </div>
              </div>
              <div className="hour">
                12:00
              </div>
            </div>
          </div>


          <div id="chatList" >
            <div className="avatar">
              <img src="https://image.freepik.com/fotos-gratis/adulto-pele-oculos-pessoa-juventude_1187-6165.jpg" alt="icone" />
            </div>
            <div className="label">
              <div className="name_chat">
                <h2>Beatriz Maia</h2>
                <div className="chatText">
                  <img src={checkImg} alt="icone" /><p>Olha o projeto</p>
                </div>
              </div>
              <div className="hour">
                11:23
              </div>
            </div>
          </div>


          <div id="chatList" >
            <div className="avatar">
              <img src="https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?w=328" alt="icone" />
            </div>
            <div className="label">
              <div className="name_chat">
                <h2>Roberto Carlos</h2>
                <div className="chatText">
                  <p>Cara precisa ver, ETs invadindo a terra agora</p>
                </div>
              </div>
              <div className="hour">
                Ontem
              </div>
            </div>
          </div>


        </div>



        {/**-------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="right">
          <div className="contant">


            <img src="https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg" alt="icone" />
            <h1>Mantenha seu celular conectado</h1>

            <p>
              O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. <br />
              Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.
            </p>

            <hr />

            <p>
              <MdComputer size={18} color="#919191" className="icon" alt="icone" />  O WhatsApp está disponível para Windows. <a href="https://www.whatsapp.com/download" target="_blank" alt=""> Obtenha-o aqui</a>.
            </p>
          </div>
        </div>


      </div>


    </div>
  );
}

export default App;
