import React from "react";
import Email from "./foto/email-dark.png";
import Linkedin from "./foto/linkedin-dark.png";
import Github from "./foto/GitHub-Mark-120px-plus.png";


export default function Footer() {
    return (
        <div className="footer">
            <a href="mailto:cavallericludia89@hgmail.com">
                <img src={Email} width="30" class="rounded" alt="..."/>
            </a>
            <a href="https://www.linkedin.com/in/claudiacavalleri/" target="_blank">
                <img src={Linkedin} width="30" class="rounded" alt="..."/>
            </a>
            <a href="https://github.com/ClaudiaCavalleri" target="_blank">
                <img src={Github} width="25" class="rounded" alt="..."/>
            </a>
        </div>
    )
}