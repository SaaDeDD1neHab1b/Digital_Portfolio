import "./CSS/styles.css"
import IconLink from "./IconLink";


export default function Footer(props) {
    return (
        <footer>
            <IconLink url="https://www.linkedin.com" color="blue" 
            name="FaInstagram" size="2em"/>
            <IconLink url="https://www.linkedin.com" color="purple" 
            name="FaInstagram" size="2em"/>
            <IconLink url="https://www.linkedin.com" color="white" 
            name="FaInstagram" size="2em"/>
            <IconLink url="https://www.linkedin.com" color="red" 
            name="FaInstagram" size="2em"/>
        </footer>
    );
}