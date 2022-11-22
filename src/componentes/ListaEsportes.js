import React, { useEffect, useState } from "react";
import EsportesServices from "../services/EsportesServices";

const ListaEsportes = ({ getIdEsportes }) => {
    const [esportes, setEsportes] = useState([]);

    useEffect(() => {
        getEsportes();
    }, []);

    const getEsportes = async () => {
        const data = await EsportesServices.getAllEsportes();
        console.log(data.docs);
        setEsportes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteHandler = async (id) => {
        await EsportesServices.deleteEsportes(id);
        getEsportes();
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
                {esportes.map((doc, index) => {
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
                                    onClick={(e) => getIdEsportes(doc.id)}
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

export default ListaEsportes;