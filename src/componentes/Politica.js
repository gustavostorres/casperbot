import React, { useEffect, useState } from 'react';
import PoliticaServices from '../services/PoliticaServices';

const Politica = ({ id, setIdPolitica }) => {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [buttonTitle, setButtonTitle] = useState("");
    const [buttonUrl, setButtonUrl] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title === "" || subtitle === "" || buttonTitle === "" || buttonUrl === "" || imageUrl === "") {
            alert("Preencha todos os campos!");
            return;
        }

        const newEntr = {
            title,
            subtitle,
            buttonTitle,
            buttonUrl,
            imageUrl
        }

        try {
            if (id !== undefined && id !== "") {
                await PoliticaServices.updatePolitica(id, newEntr);
                setIdPolitica("");
                alert("Atualizado com sucesso");
            } else {
                await PoliticaServices.addPolitica(newEntr);
                alert("Adicionado com sucesso");
            }
        } catch (err) {
            alert(`Erro ${err.message}`)
        }

        setTitle("");
        setSubtitle("");
        setButtonTitle("");
        setButtonUrl("");
        setImageUrl("");
    }

    const editHandler = async () => {
        try {
            const docSnap = await PoliticaServices.getPolitica(id);
            console.log("the record is :", docSnap.data());
            setTitle(docSnap.data().title);
            setSubtitle(docSnap.data().subtitle);
            setButtonTitle(docSnap.data().buttonTitle);
            setButtonUrl(docSnap.data().buttonUrl);
            setImageUrl(docSnap.data().imageUrl);
        } catch (err) {
            alert(`Erro ${err.message}`)
        }
    };

    useEffect(() => {
        console.log("ID: ", id);
        if (id !== undefined && id !== "") {
            editHandler();
        }
    }, [id]);

    return (
        <div>
            <input placeholder='Title: ' value={title} onChange={(event => {
                setTitle(event.target.value);
            })} /><br />
            <input placeholder='Subtitle: ' value={subtitle} onChange={(event => {
                setSubtitle(event.target.value);
            })} /><br />
            <input placeholder='buttonTittle: ' value={buttonTitle} onChange={(event => {
                setButtonTitle(event.target.value);
            })} /><br />
            <input placeholder='buttonUrl: ' value={buttonUrl} onChange={(event => {
                setButtonUrl(event.target.value);
            })} /><br />
            <input placeholder='imageUrl: ' value={imageUrl} onChange={(event => {
                setImageUrl(event.target.value);
            })} /><br />

            <div>
                <button onClick={handleSubmit}>
                    Adicionar / Atualizar
                </button>
            </div>
        </div>
    );
}

export default Politica;