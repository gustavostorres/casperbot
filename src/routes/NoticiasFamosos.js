import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Famosos from '../componentes/Famosos';
import ListaFamosos from '../componentes/ListaFamosos';

const NoticiasFamosos = () => {
    //ID Famosos
    const [idFamosos, setIdFamosos] = useState("");

    const getIdFamososHandler = (id) => {
        setIdFamosos(id);
    };

    return (
        <>
            <header>
                <h1>Notícias sobre Famosos</h1>
            </header>

            <Link to="/home">Retorne Home</Link>
            <Famosos id={idFamosos} setIdFamosos={setIdFamosos} />
            <ListaFamosos getIdFamosos={getIdFamososHandler} />

        </>
    );
}

export default NoticiasFamosos;