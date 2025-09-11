import { Link } from "react-router-dom";
import "./CSS/styles.css"
import { useMatch, useResolvedPath } from "react-router-dom";

export default function Button(props) {
    const resolvedPath = useResolvedPath(props.url)
    const isActiveUrl = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActiveUrl ? "active-btn" : "link-btn"}>
            <Link  to={props.url}>{props.title}</Link>
        </li>
    );
}
