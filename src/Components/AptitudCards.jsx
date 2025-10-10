import "../Components/CSS/styles.css"

export default function AptitudCards(props) {

    const dataAptitudsBlock = [
        {
            heading: "Web development", languages: [
                { react: ["https://react.dev", "blue", "FaReact", "2em"] },
                { Bootstrap: ["https://getbootstrap.com", "purple", "FaBootstrap", "2em"] }
            ]
        },
        {
            heading: "Mobile development", languages: [
                { reactNative: ["https://reactnative.dev", "#00008B", "FaReact", "2em"] },
                { Bootstrap: ["https://getbootstrap.com", "purple", "FaBootstrap", "2em"] }
            ]
        }
    ]


    return (
        <div>
            <div>
                <h1>hola</h1>
                <table>
                    <tr>
                        <td>hola</td>
                        <td>hola</td>
                        <td>hola</td>
                    </tr>
                </table>
            </div>
        </div>

    );
}
