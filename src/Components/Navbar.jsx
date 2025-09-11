import Button from "./Button";
import "./CSS/styles.css"


export default function Navbar(props) {
    return (
        <nav>
            <Button css="active" url="/Digital_Portfolio" title="Home"/>
            <ul>
                <Button url="About" title="About" />
                <Button url="Projects" title="Projects" />
                <Button url="Services" title="Services" />
                <Button url="Contact" title="Contact" />
            </ul>
        </nav>
    );
}