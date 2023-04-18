// script llenado dinamico
// script accordion
// Tarjetas servicios
// selectores

const padre=document.querySelector('#contenedor-tarjetas')
const tabla=document.querySelector('.tabla')

// const productos= document.querySelector()

document.addEventListener("DOMContentLoaded", () => {
    agregando();
    
    
  });

  function agregando() {
servicios.forEach((servicio)=>{
    const {name,img}=servicio
const hunter=document.createElement('p')
hunter.innerHTML=`
            <div class="tarjetas">
                <h1>${name}</h1>
                <img src="${img}" alt="">
               <button class="modal-open">Ver datos</button>
            </div>

            <div class="modal1" >
                <div class="modal-content1">
                      <table>
                          <tr>
                              <th>Nombre</th>
                              <th>Detalles</th>
                              <th>Disponibilidad</th>
                      
                          </tr>
                          <tr>
                            <td>${servicio.name}</td>
                             <td>${servicio.detalle}</td>
                            <td>Disponibilidad</td>
                          </tr>
                  
                    
                        
                      </table>
                      <button class="modal-close">close</button>
                        
                </div>
              </div>
            `
            padre.appendChild(hunter)
            const openModal= hunter.querySelector('.modal-open');
            const modal=document.querySelector('.modal1');
            const closeModal=document.querySelector('.modal-close');
            openModal.addEventListener('click',()=>{
              modal.classList.add('modal-show')
             
          })
          closeModal.addEventListener('click',()=>{
            modal.classList.remove('modal-show')
          })
                    
          })
          
            
            // contenidoModal.appendChild(contTable)
            console.log(name);
           
            


  }
  
 
  
  
 
 
  
 /*  MODAL */
 


 
 



