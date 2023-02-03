import Datos from "../atoms/Datos";
import Iconos from "../atoms/Iconos";
import Icono1 from '../../assets/imgs/Icono1.svg'
import icono2 from '../../assets/imgs/icono2.svg'
import icono3 from '../../assets/imgs/icono3.svg'
import icono4 from '../../assets/imgs/icono4.png'
import '../../assets/styles/iconos.css'
function Footer() {
    return (  
        <>
      
       <div className="iconos">
        <div >
                <Iconos imagen={Icono1}></Iconos>
            </div>
            <div >
                <Iconos imagen={icono2}></Iconos>
            </div>
            <div >
                <Iconos imagen={icono3}></Iconos>
            </div>
            <div >
                <Iconos imagen={icono4}></Iconos>
            </div>
            </div>
  
        </>
    );
}

export default Footer;