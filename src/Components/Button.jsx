import "./CSS/styles.css"


export default function Button(props) {
    return (
        <a className="link-btn"  href={props.url}>{props.title}</a>
    );
}
