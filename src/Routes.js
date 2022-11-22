import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Admin from "./routes/Admin";
import NoticiasEntretenimento from "./routes/NoticiasEntretenimento"
import NoticiasEsportes from "./routes/NoticiasEsportes"
import NoticiasFamosos from "./routes/NoticiasFamosos"
import NoticiasPolitica from "./routes/NoticiasPolitica"
import ProtectedRoutes from "./PortectedRoutes";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element ={<Admin />} path='/' exact/>
                <Route element={<ProtectedRoutes />} >
                    <Route element={<Home />} path="/home" />
                    <Route element={<NoticiasEntretenimento />} path="/entretenimento" />
                    <Route element={<NoticiasEsportes />} path="/esportes" />
                    <Route element={<NoticiasFamosos />} path="/famosos" />
                    <Route element={<NoticiasPolitica />} path="/politica" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;