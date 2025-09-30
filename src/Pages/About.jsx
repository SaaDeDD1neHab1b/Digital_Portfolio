import "../Components/CSS/styles.css"

export default function About(props) {
    return (
        <main>
            <h1>Your great and best option to build websites! </h1>
            <h2>Saadeddine Habib | software devoloper</h2>
            <br />
            
            <h3>Biografy</h3>
            <p>
                Born on October 19, 2005, Saadeddine Habib has forged a remarkable path in the field of technology. He began his academic training with a Vocational Training Degree in Microcomputer Systems and Networks, where he gained a solid foundation in the functioning of computer systems and communication networks. Subsequently, he continued his education with a Higher Vocational Training Degree in Multiplatform Application Development (DAM), specializing in the creation of versatile and efficient software.
                <br />
                <br />
                With a particular focus on web application development, Saadeddine Habib has become an expert in using frameworks like Express and React. His design skills are equally noteworthy, as he is fluent in design libraries such as Bootstrap and Tailwind CSS, allowing him to create attractive and functional interfaces.
                <br />
                <br />
                Despite his impressive background, Saadeddine Habib maintains a sense of humor that sets him apart. After all, what developer hasn’t spent hours trying to find a bug in the code only to realize they forgot to close a parenthesis? Programming is an art, but sometimes it feels more like a game of hide and seek!
            </p>
            <br />
            <br />
            <div className="realtiveEx">
                {/*Hay que implementar el timeline goals */ }
                <div className="divAbs"></div>
                <img className="imgAbs" src={require("../img/montaña.jpg")} alt="no se muestra" />
            </div>
        </main>
    );
}
