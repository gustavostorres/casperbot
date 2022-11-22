import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Esportes from '../componentes/Esportes';
import ListaEsportes from '../componentes/ListaEsportes';

const NoticiasEsportes = () => {
    //ID Esportes
    const [idEsportes, setIdEsportes] = useState("");

    const getIdEsportesHandler = (id) => {
        console.log("ID: ", id);
        setIdEsportes(id);
    };

    return (
        <>
            <header>
                <h1>Notícias sobre Esportes</h1>
            </header>

            <Esportes id={idEsportes} setIdEsportes={setIdEsportes} />
            <ListaEsportes getIdEsportes={getIdEsportesHandler} />
            <Link to="/">Retorne Home</Link>
        </>
    );
}

export default NoticiasEsportes;