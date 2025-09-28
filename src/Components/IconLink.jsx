import "./CSS/styles.css"
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IconContext } from "react-icons";



export default function IconLink(props) {
    var Component = RxCross2;

    const iconColor = props.color === "" ? "red" : props.color;
    const iconSize = props.size === "" ? "1.5em" : props.size;

    console.log(Component)

    if (props.name !== " ") {
        switch (props.name) {
            case "BsLinkedin":
                Component = BsLinkedin;
                break;
            case "FaInstagram":
                Component = FaInstagram;
                break;;
            case "FaGithub":
                Component = FaGithub;
                break;
            case "IoIosMail":
                Component = IoIosMail;
                break;
            case "RxCross2":
                Component = RxCross2;
                break;
        }
    }

    return (
        <a href={props.url}>
            <IconContext.Provider value={{ color: iconColor, size: iconSize }}>
                <div >
                    <Component />
                </div>
            </IconContext.Provider>
        </a>

    );
}   