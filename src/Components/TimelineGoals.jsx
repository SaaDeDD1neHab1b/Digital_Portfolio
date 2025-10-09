import { useState } from "react";
import "../Components/CSS/styles.css"


export default function TimelineGoals(props) {
    const [selectedOption, setSelectedOption] = useState(0);

    const productosGaming = [
        {
            "ID": 0,
            "Title-btn": "Proyecto A",
            "Heading": "Desarrollo de Aplicación Móvil",
            "Description": "Completé el desarrollo de una aplicación móvil que permite a los usuarios gestionar sus tareas diarias de manera eficiente."
        },
        {
            "ID": 1,
            "Title-btn": "Proyecto B",
            "Heading": "Implementación de API",
            "Description": "Diseñé e implementé una API RESTful que facilita la interacción entre el frontend y el backend de la aplicación."
        },
        {
            "ID": 2,
            "Title-btn": "Proyecto C",
            "Heading": "Mejora de Rendimiento",
            "Description": "Optimicé el rendimiento de la aplicación, reduciendo el tiempo de carga en un 40% mediante la implementación de técnicas de caching."
        },
        {
            "ID": 3,
            "Title-btn": "Proyecto D",
            "Heading": "Migración a la Nube",
            "Description": "Lideré la migración de la infraestructura del proyecto a la nube, mejorando la escalabilidad y la disponibilidad del servicio."
        },
        {
            "ID": 4,
            "Title-btn": "Proyecto E",
            "Heading": "Integración de CI/CD",
            "Description": "Implementé un pipeline de integración y entrega continua que automatiza las pruebas y despliegues, mejorando la eficiencia del equipo."
        },
        {
            "ID": 5,
            "Title-btn": "Proyecto F",
            "Heading": "Desarrollo de Funcionalidad de Chat",
            "Description": "Implementé una funcionalidad de chat en tiempo real utilizando WebSockets, mejorando la comunicación entre los usuarios."
        },
        {
            "ID": 6,
            "Title-btn": "Proyecto G",
            "Heading": "Rediseño de Interfaz de Usuario",
            "Description": "Realicé un rediseño completo de la interfaz de usuario, mejorando la experiencia del usuario y la accesibilidad."
        },
        {
            "ID": 7,
            "Title-btn": "Proyecto H",
            "Heading": "Automatización de Pruebas",
            "Description": "Desarrollé un conjunto de pruebas automatizadas que cubren el 90% del código, asegurando la calidad del software."
        },
        {
            "ID": 8,
            "Title-btn": "Proyecto I",
            "Heading": "Documentación del Proyecto",
            "Description": "Creé una documentación exhaustiva del proyecto, facilitando la comprensión y el mantenimiento por parte de futuros desarrolladores."
        },
        {
            "ID": 9,
            "Title-btn": "Proyecto J",
            "Heading": "Implementación de Seguridad",
            "Description": "Integré medidas de seguridad en la aplicación, como la autenticación de dos factores y la encriptación de datos sensibles."
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
            <img className="imgAbs" src={require("../img/montaña.jpg")} alt="no se muestra" />
        </div>
    );
}
