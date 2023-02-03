import { useState } from 'react'
import Header from '../../src/components/moleculas/Header.jsx'
import ImgPersonal from '../../src/components/atoms/ImgPersonal.jsx'
import Sobremi from '../../src/components/atoms/Sobremi.jsx'
import Tecnologias from '../../src/components/atoms/Tecnologias.jsx'
import Datos from '../../src/components/atoms/Datos.jsx'
import Estudios from '../../src/components/atoms/Estudios.jsx'
import Footer from '../../src/components/moleculas/Footer.jsx'
import '../assets/styles/iconos.css'
import '../assets/styles/App.css'


function App() {

  return (
    <>
     <div>
  <Header></Header>
 </div>
 <div>
<Sobremi></Sobremi>
 </div>
 <div>
  <Tecnologias></Tecnologias>
 </div>
 <div>
  <Estudios></Estudios>
 </div>
 <div>
  <Datos></Datos>
 </div>
 <div>
  <Footer></Footer>
 </div>
    </>

  )
}

export default App;
