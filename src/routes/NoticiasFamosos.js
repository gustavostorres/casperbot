import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Famosos from '../componentes/Famosos';
import ListaFamosos from '../componentes/ListaFamosos';

const NoticiasFamosos = () => {
    //ID Famosos
    const [idFamosos, setIdFamosos] = useState("");

    const getIdFamososHandler = (id) => {
        console.log("ID: ", id);
        setIdFamosos(id);
    };

    return (
        <>
            <header>
                <h1>Notícias sobre Famosos</h1>
            </header>

            <Famosos id={idFamosos} setIdFamosos={setIdFamosos} />
            <ListaFamosos getIdFamosos={getIdFamososHandler} />
            <Link to="/">Retorne Home</Link>
        </>
    );
}

export default NoticiasFamosos;