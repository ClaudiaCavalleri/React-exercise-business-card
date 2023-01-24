import React from "react";
import fotoProfile from "./foto/fototessera-card.png";

const eMail = "cavallericlaudia89@hmail.com";
const LinkedinURL = "https://www.linkedin.com/in/claudiacavalleri/";

export default function Info() {
    return (
        <div className="info">
            <img src = {fotoProfile} className="fotoProfile" alt="Profile foto" />
            <section>
                <h1 className="Name">Claudia Cavalleri</h1>
                <h3 className="Description">Front End Developer Jr.</h3>
                <a href="https://claudiacavalleri.github.io" target="_blank">Portfolio and personal website</a>
                <div className="buttons">
                    <a href="mailto:cavallericlaudia89@hmail.com" target="_blank">
                        <button className="button1">E-mail</button>
                    </a>
                    <a href="https://www.linkedin.com/in/claudiacavalleri/" target="_blank">
                        <button className="button2">Linkedin</button>
                    </a>
                </div>
            </section>
        </div>
    )
}