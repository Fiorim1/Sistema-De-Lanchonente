// Importando Estilo
import "../styles/Foods.css"

// Imagens
import Hamb1 from "../assets/hamb-1.png"
import cartShop from "../assets/cartShop.png"

function Foods() {
    return (
        <div className="foodContainer">
            <h3>Conheça Nosso Cardápio</h3>

            {/* ---- COLUNA 1 ---- */}
            <div className="foodsTableOne">
                <div className="hamb1">
                    <img src={Hamb1} alt="" className="imageFood" />
                    <div className="textFoodCard">
                        <h4 className="nameFood">Hambúrguer Simples</h4>
                        <p className="descFood">Delicioso hambúrguer com alface, tomate e molho especial.</p>
                        <span className="valueFood">R$ 15,00</span>
                        <button><img src={cartShop} alt="Ícone Carrinho de Compra"/></button>
                    </div>
                </div>

                <div className="hamb2">
                    <img src={Hamb1} alt="" className="imageFood" />
                    <div className="textFoodCard">
                        <h4 className="nameFood">Hambúrguer Simples</h4>
                        <p className="descFood">Delicioso hambúrguer com alface, tomate e molho especial.</p>
                        <span className="valueFood">R$ 15,00</span>
                        <button><img src={cartShop} alt="Ícone Carrinho de Compra"/></button>
                    </div>
                </div>

                <div className="hamb3">
                    <img src={Hamb1} alt="" className="imageFood" />
                    <div className="textFoodCard">
                        <h4 className="nameFood">Hambúrguer Simples</h4>
                        <p className="descFood">Delicioso hambúrguer com alface, tomate e molho especial.</p>
                        <span className="valueFood">R$ 15,00</span>
                        <button><img src={cartShop} alt="Ícone Carrinho de Compra"/></button>
                    </div>
                </div>

                <div className="hamb4">
                    <img src={Hamb1} alt="" className="imageFood" />
                    <div className="textFoodCard">
                        <h4 className="nameFood">Hambúrguer Simples</h4>
                        <p className="descFood">Delicioso hambúrguer com alface, tomate e molho especial.</p>
                        <span className="valueFood">R$ 15,00</span>
                        <button><img src={cartShop} alt="Ícone Carrinho de Compra"/></button>
                    </div>
                </div>
            </div>

            {/* ---- COLUNA 2 ---- */}
            <div className="foodsTableOne">
                <div className="hamb1">
                    <img src={Hamb1} alt="" className="imageFood" />
                    <div className="textFoodCard">
                        <h4 className="nameFood">Hambúrguer Simples</h4>
                        <p className="descFood">Delicioso hambúrguer com alface, tomate e molho especial.</p>
                        <span className="valueFood">R$ 15,00</span>
                        <button><img src={cartShop} alt="Ícone Carrinho de Compra"/></button>
                    </div>
                </div>

                <div className="hamb2">
                    <img src={Hamb1} alt="" className="imageFood" />
                    <div className="textFoodCard">
                        <h4 className="nameFood">Hambúrguer Simples</h4>
                        <p className="descFood">Delicioso hambúrguer com alface, tomate e molho especial.</p>
                        <span className="valueFood">R$ 15,00</span>
                        <button><img src={cartShop} alt="Ícone Carrinho de Compra"/></button>
                    </div>
                </div>

                <div className="hamb3">
                    <img src={Hamb1} alt="" className="imageFood" />
                    <div className="textFoodCard">
                        <h4 className="nameFood">Hambúrguer Simples</h4>
                        <p className="descFood">Delicioso hambúrguer com alface, tomate e molho especial.</p>
                        <span className="valueFood">R$ 15,00</span>
                        <button><img src={cartShop} alt="Ícone Carrinho de Compra"/></button>
                    </div>
                </div>

                <div className="hamb4">
                    <img src={Hamb1} alt="" className="imageFood" />
                    <div className="textFoodCard">
                        <h4 className="nameFood">Hambúrguer Simples</h4>
                        <p className="descFood">Delicioso hambúrguer com alface, tomate e molho especial.</p>
                        <span className="valueFood">R$ 15,00</span>
                        <button><img src={cartShop} alt="Ícone Carrinho de Compra"/></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Foods
