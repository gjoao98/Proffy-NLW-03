import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img 
                src="https://yt3.ggpht.com/-yXfuCwzURA0/AAAAAAAAAAI/AAAAAAAAAAA/saWidCjVyW4/s108-c-k-c0x00ffffff-no-rj-mo/photo.jpg"
                alt="Thais"/>
                <div>
                    <strong>Gabriel</strong>
                    <span>Designer 3D</span>
                </div>
            </header>

                <p>
                    Gabriel profissional de desenvolvimento de Games. 
                    <br /><br />
        	        Especialista em Design 3D, Design de interfaces e outras coisas. 
                </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img 
                        src={whatsappIcon} 
                        alt="Whatsapp"/>
                        Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;