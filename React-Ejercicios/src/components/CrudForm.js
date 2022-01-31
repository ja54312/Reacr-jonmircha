import React, { useState } from 'react';

const initialForm = {
    name:"",
    constelacion:"",
    id:null
}

const CrudForm = ()=>{
    const [form,setForm] = useState(initialForm);
    const handleChange = (e) => {}
    const handleSubmit = (e) => {}
    const handleReset = (e) => {}
    return(
        <>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={form.name}/>
                <input type="text" name="constelacion" placeholder="Constelacion" onChange={handleChange} value={form.constelacion}/>
                <input type="submit" value="Enviar"/>
                <input type="reset" value="Limpiar" onClick={handleReset}/>
            </form>
        </>
    )
}

export default CrudForm