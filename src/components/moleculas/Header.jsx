import Titulo from '../atoms/Titulo'
import ImgPersonal from '../atoms/ImgPersonal';
import '../../assets/styles/imagenHeader.css'


function Header() {
    return ( 
   <>
       
            
            <div className='contImg'><ImgPersonal></ImgPersonal></div>
            <div><Titulo></Titulo></div>
           
        </>
     
     );
}

export default Header;