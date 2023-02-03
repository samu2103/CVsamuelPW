import Sobremi from "../atoms/Sobremi";
import Estudios from "../atoms/Estudios";





function Body() {
    return ( 

     <>
     <section>
        <div>
           <Sobremi></Sobremi>
        </div>
     </section>
     <section>
        <div><Tecnologias></Tecnologias></div>
    </section>
     <section>
        <div><Estudios></Estudios></div>
     </section>
     </>           
     
    );
}

export default Body;