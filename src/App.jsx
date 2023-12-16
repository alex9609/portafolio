import { useState } from 'react'
import desarrolloSoftware from './assets/desarrollo-sofware.webp'
import uniminasImage from './assets/minerocontrolfoto.png'
import techdes from './assets/techdesportafolio.png'
import whatsApp from './assets/WhatsApp_icon.png'
import gmail from './assets/gmail-icon-free-png.webp'
import programador from './assets/programador.png'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <header className='header'>
            <div className='header-principal'>
                <h2 className='header-item-title'>SOLUCIONES DE SOFTWARE</h2>
                <p className='header-item-text pipe'>|</p>
                <p className='header-item-text'>Transformando ideas en Soluciones Digitales</p>
            </div>

            <h1 className='header-logo'>M&R</h1>
        </header>

        <hr className='hr'/>

        <section className='us'>
            <p className='us-text'>
            Cada idea tiene el potencial de cambiar el mundo digital,
            y es por eso que nos esforzamos por convertir esas ideas 
            en realidad. Ya sea que necesites una aplicación móvil intuitiva, 
            un sistema empresarial escalable o una plataforma web sofisticada, 
            en M&R Soluciones de Software estamos comprometidos a proporcionar 
            soluciones que no solo cumplan, sino que superen tus expectativas.
            </p>
            <img src={desarrolloSoftware} className="us-desarrollo-software-image" alt="Desarrollo Software" />
        </section>

        <hr className='hr'/>

        <section>
            <h1 className='title-generic'>Nuestros proyectos</h1>
            <div className='our-proyects'>
                <div className='proyects-1'>
                    <a href='https://minerocontrol.com/'
                        target='_blank'
                    >
                    <img src={uniminasImage} className="our-proyects-uniminas" alt="Uniminas" />
                    </a>
                    <p className='header-item-text'>Portal de gestión de control minero</p>
                </div>
                <div className='proyects-2'>
                    <a href='https://www.figma.com/proto/rK8W2dG1TCeNRexAmlMfmT/Proyecto-Ciclo4?type=design&node-id=1-2&t=xQlfnmxYboADvYj4-0&scaling=min-zoom&page-id=0%3A1'
                        target='_blank'
                    >
                    <img src={techdes} className="our-proyects-pagina" alt="Uniminas" />
                    </a>
                    <p className='header-item-text'>Desarrollo pagina web</p>
                </div>
            </div>
        </section>

        <hr className='hr'/>

        <section>
            <h1 className='title-generic'>Contactenos</h1>
            <div className='pattern-icon'>
                <figure className='contact-figure'>
                    <a className='contact-link' href="https://wa.me/+573167435302?text=Hola,%20estoy%20interesado%20en%20un%20desarrollo" target="_blank">
                        <img src={whatsApp} className="contact-icon" alt="whatsapp"/>
                        <figcaption>+57 316 743 5302</figcaption>
                    </a>
                </figure>
                <figure className='contact-figure'>
                    <a className='contact-link' href="https://wa.me/+573506039473?text=Hola,%20estoy%20interesado%20en%20un%20desarrollo" target="_blank">
                        <img src={whatsApp} className="contact-icon" alt="whatsapp" />
                        <figcaption>+57 321 464 2648</figcaption>
                    </a>
                </figure>
                <figure className='contact-figure'>
                    <a className='contact-link' href="mailto:minerocontrol23@gmail.com?subject=Desarrollo%20de%20producto&body=Estoy%20interesado%20en%20un%20desarrollo" target="_blank">
                        <img src={gmail} className="contact-icon" alt="gmail" />
                        <figcaption>minerocontrol23@gmil.com</figcaption>
                    </a>
                </figure>
            </div>
        </section>

        <hr className='hr'/>

        <section>
            <h1 className='title-generic'>Nosotros</h1>
            <div className='pattern-icon'>
                <div className='developer-figure'>
                        <img src={programador} className="developer" alt="developer"/>
                        <h4 className='developer-text'>Ingeniero de Software</h4>
                        <p className='developer-text'>Jesus Mendivielso</p>
                </div>
                <div className='developer-figure'>
                        <img src={programador} className="developer" alt="developer" />
                        <h4 className='developer-text'>Ingeniero de Software</h4>
                        <p className='developer-text'>Alexander Rodriguez</p>
                </div>
            </div>
        </section>

        <hr className='hr'/>
        <footer className='footer'>
        <p> © M&R Soluciones de software </p>
        <p> Designed by: Alexander Rodriguez </p>
        </footer>
    </>
  )
}

export default App
