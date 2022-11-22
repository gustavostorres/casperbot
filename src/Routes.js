import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./routes/Home";
import NoticiasEntretenimento from "./routes/NoticiasEntretenimento"
import NoticiasEsportes from "./routes/NoticiasEsportes"
import NoticiasFamosos from "./routes/NoticiasFamosos"
import NoticiasPolitica from "./routes/NoticiasPolitica"

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<NoticiasEntretenimento />} path="/entretenimento" />
                <Route element={<NoticiasEsportes />} path="/esportes" />
                <Route element={<NoticiasFamosos />} path="/famosos" />
                <Route element={<NoticiasPolitica />} path="/politica" />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;