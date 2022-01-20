import React, { useState, useEffect } from 'react';

export default function ScrollHooks(){
    const [scrollY,setScrollY] = useState(0)

    useEffect(() => {
        

        const detectarScroll = () => setScrollY(window.pageYOffset)
        
        window.addEventListener("scroll",detectarScroll)
    });

    return(
        <>
        <h2>Hooks use effect y el ciclo de vida</h2>
        <p>Scroll Y del Navegador {scrollY}px</p>
        </>
    )
}