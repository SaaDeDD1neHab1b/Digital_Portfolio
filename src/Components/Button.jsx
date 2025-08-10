import "./CSS/styles.css"


export default function Button(props) {
    const path = window.location.pathname
    return (
        <a className={path === props.url ? "active-btn": "link-btn" } href={props.url}>{props.title}</a>
    );
}
