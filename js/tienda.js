
const padre1=document.querySelector('.products')
document.addEventListener("DOMContentLoaded", () => {
    
    tienda()
  });
  function tienda() {
    
    carrito.forEach((producto)=>{
        const {nombre,imagen,precio}=producto
    const producto1=document.createElement('p')
    producto1.innerHTML=`
                <div class="tarjetas">
                    <h1>${nombre}</h1>
                    <img src="${imagen}" alt="">
                    <h3>${precio}</h3>
                   <button class="open-modal1">Ver datos</button>
                </div>
                `
                padre1.appendChild(producto1)     
    })
   
      }
