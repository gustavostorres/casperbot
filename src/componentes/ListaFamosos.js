import React, { useEffect, useState } from "react";
import FamososServices from "../services/FamososServices";

const ListaFamosos = ({ getIdFamosos }) => {
    const [famosos, setFamosos] = useState([]);

    useEffect(() => {
        getFamosos();
    }, []);

    const getFamosos = async () => {
        const data = await FamososServices.getAllFamosos();
        console.log(data.docs);
        setFamosos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteHandler = async (id) => {
        await FamososServices.deleteFamosos(id);
        getFamosos();
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
                {famosos.map((doc, index) => {
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