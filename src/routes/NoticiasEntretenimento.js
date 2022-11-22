import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Entretenimento from '../componentes/Entretenimento';
import ListaEntretenimento from '../componentes/ListaEntretenimento';

const NoticiasEntretenimento = () => {
    //ID Entretenimento
    const [idEntretenimento, setIdEntretenimento] = useState("");

    const getIdEntretenimentoHandler = (id) => {
        console.log("ID: ", id);
        setIdEntretenimento(id);
    };

    return (
        <>
            <header>
                <h1>Notícias sobre Entretenimento</h1>
            </header>

            <Link to="/home">Retorne Home</Link>
            <Entretenimento id={idEntretenimento} setIdEntretenimento={setIdEntretenimento} />
            <ListaEntretenimento getIdEntretenimento={getIdEntretenimentoHandler} />

        </>
    );
}

export default NoticiasEntretenimento;