import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListaPolitica from '../componentes/ListaPolitica';
import Politica from '../componentes/Politica';

const NoticiasPolitica = () => {
    //ID Politica
    const [idPolitica, setIdPolitica] = useState("");

    const getIdPoliticaHandler = (id) => {
        console.log("ID: ", id);
        setIdPolitica(id);
    };

    return (
        <>
            <header>
                <h1>Notícias sobre Política</h1>
            </header>

            <Politica id={idPolitica} setIdPolitica={setIdPolitica} />
            <ListaPolitica getIdPolitica={getIdPoliticaHandler} />
            <Link to="/">Retorne Home</Link>
        </>
    );
}

export default NoticiasPolitica;