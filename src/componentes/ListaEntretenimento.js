import React, { useEffect, useState } from "react";
import EntretenimentoServices from "../services/EntretenimentoServices";

const ListaEntretenimento = ({ getIdEntretenimento }) => {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        getNoticias();
    }, []);

    const getNoticias = async () => {
        const data = await EntretenimentoServices.getAllEntretenimento();
        console.log(data.docs);
        setNoticias(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteHandler = async (id) => {
        await EntretenimentoServices.deleteEntretenimento(id);
        getNoticias();
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
                {noticias.map((doc, index) => {
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
                                    onClick={(e) => getIdEntretenimento(doc.id)}
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

export default ListaEntretenimento;