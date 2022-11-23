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
                    <th >Title</th>
                    <th>Subtitle</th>
                    <th>Button Title</th>
                    <th>Button Url</th>
                    <th>Image Url</th>
                    <th>Action</th>
                </tr>
                {noticias.map((doc, index) => {
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