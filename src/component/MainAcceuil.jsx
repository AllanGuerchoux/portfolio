import React from 'react';
import Présentation from '../component/Présentation';
import CardProjets from '../component/componentProjets/CardProjets';
import APropos from './APropos';
import MesCompétences from './MesCompétences';
const MainAcceuil = () => {
    return (
        <main>
            <Présentation />
            <APropos />
            <MesCompétences />
            <CardProjets />
        </main>
    );
};

export default MainAcceuil;