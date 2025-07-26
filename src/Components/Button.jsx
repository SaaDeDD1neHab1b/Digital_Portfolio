function Button(props) {
    return (
        <a className="border-2 border-blue-800 bg-black py-2 px-5 rounded-xl shadow-xl
         shadow-blue-500/50 text-shadow-lg/30 mx-2 my-5" href={props.url}>{props.title}</a>
    );
}

export default Button;
