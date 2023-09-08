import './assets/produtos.css'
import cachorroImagem from './assets/cachorro.jpg'
import elefanteImagem from './assets/elefante.jpg'
import focaImagem from './assets/foca.jpg'
import macacoImagem from './assets/macaco.jpg'

function Produtos() {
    return (
        <>
            <div className="mainContainer">
                <div className="animais">
                    <div className="animal">
                        <img src={cachorroImagem} alt="Um cachorro" />
                        <h1>Cachorro</h1>
                        <p>R$ 368,99</p>
                    </div>
                    <div className="animal">
                        <img src={elefanteImagem} alt="Um elefante" />
                        <h1>Elefante</h1>
                        <p>R$ 5800,00</p>
                    </div>
                    <div className="animal">
                        <img src={focaImagem} alt="Uma foca" />
                        <h1>Foca</h1>
                        <p>R$ 1325,00</p>
                    </div>
                    <div className="animal">
                        <img src={macacoImagem} alt="Um macaco" />
                        <h1>Macaco</h1>
                        <p>R$ 189,99</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Produtos