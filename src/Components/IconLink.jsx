import "./CSS/styles.css"
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IconContext } from "react-icons";
import { useState } from "react";
import { LuProportions } from "react-icons/lu";


export default function IconLink(props) {
    var Component = RxCross2;
    const icons = [BsLinkedin, FaInstagram, FaGithub, IoIosMail, RxCross2]

    const iconColor = props.color === "" ? "red" : props.color;
    const iconSize = props.size === "" ? "1.5em" : props.size;

    console.log(Component)

    // No me funciona la indexOf (porque no lo encuentra porque compara un string y on objeto)
    if (props.name !== " ") {
        Component = icons.at(icons.indexOf(props.name))
    }

    console.log(props.name)
    console.log(icons.indexOf(props.name))
    console.log(Component)

    return (
        <a href={props.url}>
            <IconContext.Provider value={{ color: iconColor, size: iconSize }}>
                <div >
                    <Component />
                </div>
            </IconContext.Provider>;
        </a>

    );
}   