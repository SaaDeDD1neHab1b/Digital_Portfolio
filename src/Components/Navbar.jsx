import Button from "./Button";
import "./CSS/styles.css"


export default function Navbar(props) {
    return (
        <nav>
            <Button css="active" url="/Digital_Portfolio" title="Home"/>
            <ul>
                <li><Button url="About" title="About" /></li>
                <li><Button url="Projects" title="Projects" /></li>
                <li><Button url="Services" title="Services" /></li>
                <li><Button url="Contact" title="Contact" /></li>
            </ul>
        </nav>
    );
}