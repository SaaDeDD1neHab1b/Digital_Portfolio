import "../Components/CSS/styles.css"


export default function TimelineGoals(props) {

    const productosGaming = [
        { nombre: "Mouse Gaming Razer DeathAdder", precio: 49.99 },
        { nombre: "Teclado Mecánico Corsair K95", precio: 199.99 },
        { nombre: "Auriculares HyperX Cloud II", precio: 89.99 },
        { nombre: "Monitor Gaming ASUS ROG Swift", precio: 599.99 },
        { nombre: "Tarjeta Gráfica NVIDIA GeForce RTX 3080", precio: 699.99 }
    ];

    return (
        <div className="realtiveEx">
            <div className="divAbs">
                <div className="divOver">
                    {/* CONTINUE DEVOLPING THE BUTTONS AND DIPLAY INFORMATION*/}
                    {productosGaming.map((item) => {
                        return (
                            <a className="active-btn" href="#test">{item.nombre}</a>

                        )
                    })}
                </div>

            </div>
            <img className="imgAbs" src={require("../img/montaña.jpg")} alt="no se muestra" />
        </div>
    );
}
