'use strict';

const imagenes= document.querySelectorAll('.propiedad__imagen');


window.addEventListener('DOMContentLoaded',  ()=>{

    this.addEventListener('scroll', ()=>{

        const scroll= this.scrollY / -22;

        imagenes.forEach((imagen)=>{

            imagen.style.backgroundPositionY = `${scroll}px`;

        });

    });
}); //!este código es para hacer que las imágenes se muevan con el scroll