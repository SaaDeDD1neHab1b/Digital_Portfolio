import { useState } from "react";
import "../Components/CSS/styles.css"


export default function TimelineGoals(props) {
    const [selectedOption, setSelectedOption] = useState(0);

    const productosGaming = [
        {
            "ID": 0,
            "Title-btn": "Proyecto A",
            "Heading": "Desarrollo de Aplicación Móvil",
            "Description": "Completé el desarrollo de una aplicación móvil que permite a los usuarios gestionar sus tareas diarias de manera eficiente.",
            "Img": require("../img/p-1.jpg")
        },
        {
            "ID": 1,
            "Title-btn": "Proyecto B",
            "Heading": "Implementación de API",
            "Description": "Diseñé e implementé una API RESTful que facilita la interacción entre el frontend y el backend de la aplicación.",
            "Img": require("../img/p-2.jpg")

        },
        {
            "ID": 2,
            "Title-btn": "Proyecto C",
            "Heading": "Mejora de Rendimiento",
            "Description": "Optimicé el rendimiento de la aplicación, reduciendo el tiempo de carga en un 40% mediante la implementación de técnicas de caching.",
            "Img": require("../img/p-3.jpg")
        },
        {
            "ID": 3,
            "Title-btn": "Proyecto D",
            "Heading": "Migración a la Nube",
            "Description": "Lideré la migración de la infraestructura del proyecto a la nube, mejorando la escalabilidad y la disponibilidad del servicio.",
            "Img": require("../img/p-4.jpg")
        },
        {
            "ID": 4,
            "Title-btn": "Proyecto E",
            "Heading": "Integración de CI/CD",
            "Description": "Implementé un pipeline de integración y entrega continua que automatiza las pruebas y despliegues, mejorando la eficiencia del equipo.",
            "Img": require("../img/p-5.jpg")
        },
        {
            "ID": 5,
            "Title-btn": "Proyecto F",
            "Heading": "Desarrollo de Funcionalidad de Chat",
            "Description": "Implementé una funcionalidad de chat en tiempo real utilizando WebSockets, mejorando la comunicación entre los usuarios.",
            "Img": require("../img/p-6.jpg")
        },
        {
            "ID": 6,
            "Title-btn": "Proyecto G",
            "Heading": "Rediseño de Interfaz de Usuario",
            "Description": "Realicé un rediseño completo de la interfaz de usuario, mejorando la experiencia del usuario y la accesibilidad.",
            "Img": require("../img/p-7.jpg")
        },
        {
            "ID": 7,
            "Title-btn": "Proyecto H",
            "Heading": "Automatización de Pruebas",
            "Description": "Desarrollé un conjunto de pruebas automatizadas que cubren el 90% del código, asegurando la calidad del software.",
            "Img": require("../img/p-8.jpg")
        },
        {
            "ID": 8,
            "Title-btn": "Proyecto I",
            "Heading": "Documentación del Proyecto",
            "Description": "Creé una documentación exhaustiva del proyecto, facilitando la comprensión y el mantenimiento por parte de futuros desarrolladores.",
            "Img": require("../img/p-9.jpg")
        },
        {
            "ID": 9,
            "Title-btn": "Proyecto J",
            "Heading": "Implementación de Seguridad",
            "Description": "Integré medidas de seguridad en la aplicación, como la autenticación de dos factores y la encriptación de datos sensibles.",
            "Img": require("../img/p-10.jpg")
        }
    ]

    return (
        <div className="realtiveEx">
            <div className="divAbs">
                <div className="divOver">
                    {productosGaming.map((item) => {
                        return (
                            <button
                                key={item.ID}
                                onClick={() => setSelectedOption(item.ID)}
                                className="btnsTimeGoals"
                            >
                                {item["Title-btn"]}
                            </button>
                        )
                    })}
                </div>
                <div className="divContent">
                    <h1>{productosGaming[selectedOption].Heading}</h1>
                    <p>{productosGaming[selectedOption].Description}</p>

                </div>



            </div>
            <img className="imgAbs" src={productosGaming[selectedOption].Img} alt="no se muestra" />
        </div>
    );
}
