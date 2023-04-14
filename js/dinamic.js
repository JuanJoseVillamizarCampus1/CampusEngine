// script llenado dinamico
// script accordion
// Tarjetas servicios
// selectores

const padre=document.querySelector('#contenedor-tarjetas')

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
               <button class="open-modal1">Ver datos</button>
            </div>
            `
            padre.appendChild(hunter)
})
  }


// //Modal servicios
// const openModal=document.querySelector('.open-modal1')
// const modal=document.querySelector('.modal')
// const closeModal=document.querySelector('.close')

// openModal.addEventListener('click',(e)=>
// {
//     e.preventDefault()
//     modal.classList.add('show-modal')
    
// })
// openModal.addEventListener('click',()=>
// {
//     modal.classList.remove('show-modal')
// })
