import React, { useEffect, useState } from "react";
import PoliticaServices from "../services/PoliticaServices";

const ListaPolitica = ({ getIdPolitica }) => {
    const [politica, setPolitica] = useState([]);

    useEffect(() => {
        getPolitica();
    }, []);

    const getPolitica = async () => {
        const data = await PoliticaServices.getAllPolitica();
        console.log(data.docs);
        setPolitica(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteHandler = async (id) => {
        await PoliticaServices.deletePolitica(id);
        getPolitica();
        window.location.reload(false);
    };

    return (
        <>
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
                            <td>{index + 1}</td>
                            <td>{doc.title}</td>
                            <td>{doc.subtitle}</td>
                            <td>{doc.buttonTitle}</td>
                            <td>{doc.buttonUrl}</td>
                            <td>{doc.imageUrl}</td>
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