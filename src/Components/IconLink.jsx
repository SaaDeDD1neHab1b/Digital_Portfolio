import "./CSS/styles.css"
import { BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";


export default function IconLink(props) {
    return (
        <a href={props.url}>
            <IconContext.Provider value={{ color: "Blue", size:"1.5em"}}>
                <div >
                    <BsLinkedin />
                </div>
            </IconContext.Provider>;
        </a>

    );
}