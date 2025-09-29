import "./CSS/styles.css"
import IconLink from "./IconLink";


export default function Footer(props) {
    return (
        <footer>
            <IconLink url="https://www.linkedin.com" color="#193cb8" 
            name="BsLinkedin" size="2em"/>
            <IconLink url="https://www.instagram.com" color="purple" 
            name="FaInstagram" size="2em"/>
            <IconLink url="https://www.github.com" color="black" 
            name="FaGithub" size="2em"/>
            <IconLink url="https://mail.google.com" color="red" 
            name="IoIosMail" size="2em"/>
            <h1>© 2025 - 2025 www.saadeddineHabib.com - All Rights Reserved.</h1>
            <br />
        </footer>
    );
}