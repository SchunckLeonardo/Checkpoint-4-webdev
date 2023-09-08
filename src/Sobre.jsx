import './assets/sobre.css'
import tigreImagem from './assets/tigre.jpg'

function Sobre() {
    return (
        <>
            <div className="mainContainerSobre">
                <div className="boxSobre">
                    <img src={tigreImagem} alt="Um tigre" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam error aspernatur commodi, praesentium ex odio? Magnam aliquid rem vero eveniet!</p>
                </div>
            </div>
        </>
    )
}

export default Sobre