import React, { useEffect, useState } from "react";
import FamososServices from "../services/FamososServices";

const ListaFamosos = ({ getIdFamosos }) => {
    const [famosos, setFamosos] = useState([]);

    useEffect(() => {
        getFamosos();
    }, []);

    const getFamosos = async () => {
        const data = await FamososServices.getAllFamosos();
        setFamosos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteHandler = async (id) => {
        await FamososServices.deleteFamosos(id);
        getFamosos();
    };

    return (
        <>
            <div>
                <button onClick={getFamosos}>
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
                {famosos.map((doc, index) => {
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
                                    onClick={(e) => getIdFamosos(doc.id)}
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

export default ListaFamosos;