import Button from "./Button";

function Navbar(props) {
    return (
        <nav className="">
            <Button url="#miao" title="Home" />
            <Button url="#miao" title="About" />
            <Button url="#miao" title="Projects" />
            <Button url="#miao" title="Services" />
            <Button url="#miao" title="Contact" />
        </nav>
    );
}

export default Navbar;
