import React, { useEffect, useState } from "react";
import PoliticaServices from "../services/PoliticaServices";

const ListaPolitica = ({ getIdPolitica }) => {
    const [politica, setPolitica] = useState([]);

    useEffect(() => {
        getPolitica();
    }, []);

    const getPolitica = async () => {
        const data = await PoliticaServices.getAllPolitica();
        setPolitica(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteHandler = async (id) => {
        await PoliticaServices.deletePolitica(id);
        getPolitica();
    };

    return (
        <>
            <div>
                <button onClick={getPolitica}>
                    Refresh notícias
                </button>
            </div>
            <table>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Subtitle</th>
                    <th>Button Title</th>
                    <th>Button Url</th>
                    <th>Image Url</th>
                    <th>Action</th>
                </tr>
                {politica.map((doc, index) => {
                    return (
                        <tr key={doc.id}>
                            <td className='break'>{index + 1}</td>
                            <td className='break'>{doc.title}</td>
                            <td className='break'>{doc.subtitle}</td>
                            <td className='break'>{doc.buttonTitle}</td>
                            <td className='break'>{doc.buttonUrl}</td>
                            <td className='break'>{doc.imageUrl}</td>
                            <td>
                                <button
                                    variant="secondary"
                                    className="editar"
                                    onClick={(e) => getIdPolitica(doc.id)}
                                >
                                    Editar
                                </button>
                                <button
                                    variant="danger"
                                    className="apagar"
                                    onClick={(e) => deleteHandler(doc.id)}
                                >
                                    Apagar
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </>
    );
};

export default ListaPolitica;