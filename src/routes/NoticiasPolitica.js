import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListaPolitica from '../componentes/ListaPolitica';
import Politica from '../componentes/Politica';

const NoticiasPolitica = () => {
    //ID Politica
    const [idPolitica, setIdPolitica] = useState("");

    const getIdPoliticaHandler = (id) => {
        setIdPolitica(id);
    };

    return (
        <>
            <header>
                <h1>Notícias sobre Política</h1>
            </header>

            <Link to="/home">Retorne Home</Link>
            <Politica id={idPolitica} setIdPolitica={setIdPolitica} />
            <ListaPolitica getIdPolitica={getIdPoliticaHandler} />

        </>
    );
}

export default NoticiasPolitica;