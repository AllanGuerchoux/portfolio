import React from 'react';

const MesCompétences = () => {
    return (
        <section className='compétence' >
            <h2>Mes Compétences</h2>
            <div className='mesCompétences'>
            <div className=' compétenceSpace compétenceAlign' >
                <div className='icon'>
                <i class="fa-brands fa-html5 iconSize "></i>
                </div>
                <div className='descriptionCompétence'>
                <p>JavaScript : Promises, Async/Await, gestion d'évenements</p>
                <p>React : Hooks </p>
                <p>HTML5, CSS3, Sass : Flexbox,  animations CSS</p>
                </div>
            </div>
            <div className='compétenceSpace compétenceAlign'  >
                <div className='icon'>
                    <i class="fa fa-database iconSize" aria-hidden="true"></i>
                </div>
                <div className='descriptionCompétence'>
                    <p>Node.js, Express.js : gestion des middlewares, gestion du routing, intégration des base de données</p>
                    <p>Bases de données : MySQL, MongoDB</p>
                    <p>Sécurité des API REST : auth.js, JWT, gestion des erreurs</p>
                </div>
            </div>
            <div className='compétenceSpace compétenceAlign' >
                <div className='icon'>
                    <i class="fa fa-wrench iconSize " aria-hidden="true"></i>
                </div>
            <div className='descriptionCompétence'>
                    <p>Versioning : Git, GitHub</p>
                    <p>Test d'API : Postman</p>
                    <p>Environnements de développement : Visual Studio Code</p>
                </div>
            </div>
            </div>
        </section>
    );
};

export default MesCompétences;