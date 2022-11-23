import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Esportes from '../componentes/Esportes';
import ListaEsportes from '../componentes/ListaEsportes';

const NoticiasEsportes = () => {
    //ID Esportes
    const [idEsportes, setIdEsportes] = useState("");

    const getIdEsportesHandler = (id) => {
        setIdEsportes(id);
    };

    return (
        <>
            <header>
                <h1>Notícias sobre Esportes</h1>
            </header>

            <Link to="/home">Retorne Home</Link>
            <Esportes id={idEsportes} setIdEsportes={setIdEsportes} />
            <ListaEsportes getIdEsportes={getIdEsportesHandler} />

        </>
    );
}

export default NoticiasEsportes;