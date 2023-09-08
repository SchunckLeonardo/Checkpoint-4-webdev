import './assets/produtos.css'

function Produtos() {
    return (
        <>
            <div className="mainContainer">
                <div className="animais">
                    <div className="animal">
                        <img src="./assets/cachorro.jpg" alt="Um cachorro" />
                        <h1>Cachorro</h1>
                        <p>R$ 368,99</p>
                    </div>
                    <div className="animal">
                        <img src="./assets/elefante.jpg" alt="Um elefante" />
                        <h1>Elefante</h1>
                        <p>R$ 5800,00</p>
                    </div>
                    <div className="animal">
                        <img src="./assets/foca.jpg" alt="Uma foca" />
                        <h1>Foca</h1>
                        <p>R$ 1325,00</p>
                    </div>
                    <div className="animal">
                        <img src="./assets/macaco.jpg" alt="Um macaco" />
                        <h1>Macaco</h1>
                        <p>R$ 189,99</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Produtos