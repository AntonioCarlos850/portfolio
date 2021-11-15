import styles from "../styles/index.module.css";
import React, { useState, useEffect } from 'react';

export default function Home() {
  
  useEffect(() => {
    document.title = "Portfólio - Antonio Carlos"
  }, [])

  return (
    <div className={styles.pageContainer}>
      <div id={styles.imageContainer}>
      </div>
      <div id={styles.firstContainer}>
        <h1>ANTONIO CARLOS</h1>
        <div id={styles.textContainer}>
            <div id={styles.text}>
              <span>PROGRAMADOR</span><br/>
              <span>FREELANCER</span><br/>
              <span>DESENVOLVEDOR FULLSTACK</span><br/>
            </div>
        </div>
      </div>
      <div id={styles.secondContainer}>
          <div className={styles.hyperLink}>
            <div id="sobre" className={styles.link}>
            </div>
            <h2>SOBRE</h2>
          </div>
          <div className={styles.flexDiv}>
            <div className={styles.aboutDiv}>
              <div id={styles.aboutName}>
                <span>Antonio Carlos</span>
              </div> 
              <div id={styles.about}>
                  <p>
                  <b>Programador e desenvolvedor desde 2020, sendo desenvolvedor full stack</b> atuando principalmente com PHP, JAVA, HTML, 
                  JavaScript e CSS, mas sempre estando aberto ao uso de novas tecnologias para desenvolvimento.<br/><br/>
                  <b>Teve início na área em 2015, onde fez seu primeiro curso de introdução à computação, descobrindo assim sua vocação.</b> 
                  Trabalhou inicialmente com montagem e manutenção de computadores, mas após a ingressão no curso de Técnico em Informática 
                  no Instituto Federal do Paraná, teve seu primeiro contato com a programação, assim mudando seu foco na área.<br/><br/>
                  <b>Tendo sua primeira experiência profissional como desenvolvedor na startup Portal Vegano, onde trabalha atualmente.</b> Assim, 
                  conseguindo obter conhecimento de mercado e relacionamento com outras pessoas, desenvolvendo o trabalho em equipe e o 
                  relacionamento com clientes.<br/><br/>
                  </p>
              </div>
            </div>
            <div className={styles.aboutDiv}>
              <div id={styles.selfImage}>
                  <img alt="Uma imagem de Antonio dentro de um circulo branco" src="/img/foto.png"/>
              </div>
            </div>
        </div>
      </div> 
      <div id={styles.thirdContainer}>
          <div className={styles.hyperLink}>
            <div id="servicos" className={styles.link}>
            </div>
            <h2>SERVIÇOS</h2>
          </div>
          <div id={styles.servicesExternalContainer}>
            <div id={styles.servicesInternalContainer}>
              <div className={styles.service}>
                <div className={styles.serviceImage}>
                  <img src="/img/api.png" />
                </div>
                <div>
                  <span className={styles.serviceTitle}>
                    Api  
                  </span> 
                  <p className={styles.serviceText}>
                    Criação de API's, utilizando arquitetura RESTful, possibilitando usabilidade em múltiplos sistemas.
                  </p>
                </div>
              </div>
              <div className={styles.service}>
                <div className={styles.serviceImage}>
                  <img src="/img/server.png" />
                </div>
                <div>
                  <span className={styles.serviceTitle}>
                    Servidor
                  </span> 
                  <p className={styles.serviceText}>
                    Configuração e manutenção de servidor, criação de rotinas, registros e backups.
                  </p>
                </div>
              </div>
              <div className={styles.service}>
                <div className={styles.serviceImage}>
                  <img src="/img/desing.png" />
                </div>
                <div>
                  <span className={styles.serviceTitle}>
                    Desing
                  </span> 
                  <p className={styles.serviceText}>
                    A arte gráfica é essencial para web e para o marketing. Plafletos, banners, flyers, logo, etc.
                  </p>
                </div>
              </div>
              <div className={styles.service}>
                <div className={styles.serviceImage}>
                  <img src="/img/computer.png" />
                </div>
                <div>
                  <span className={styles.serviceTitle}>
                    Aplicação Web
                  </span> 
                  <p className={styles.serviceText}>
                    Páginas simples como landing pages, sites pessoais ou de exibição, até a criação de web commerce e sistemas.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div> 
      <div id={styles.fourthContainer}>
          <div className={styles.hyperLink}>
            <div id="contatos" className={styles.link}>
            </div>
            <h2>CONTATOS</h2>
          </div>
          <div className={styles.flexDivContact}>
            <div className={styles.Contact}>
              <a className={styles.linkContact} target="_blank" href="https://www.instagram.com/antonio__carloos_/">
                <img src="/img/instagram.png" />
                <span className={styles.ContactName}>Instagram</span>
              </a>
            </div>
            <div id={styles.ContactWhats}>
              <a className={styles.linkContact} target="_blank" href="https://wa.me/5545998194884">
                <img src="/img/whatsapp.png" />
                <span className={styles.ContactName}>Whatsapp</span>
              </a>
            </div>
            <div className={styles.Contact}>
              <a className={styles.linkContact} target="_blank" href="https://www.linkedin.com/in/antonio-carlos-114941207/">
                <img src="/img/linkedin.png" />
                <span className={styles.ContactName}>Linkedin</span>
              </a>
            </div>
        </div>
      </div> 
    </div>
  )
}


