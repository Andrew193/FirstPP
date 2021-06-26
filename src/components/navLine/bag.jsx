import Style from "./style.module.css"
import Img1 from "./img/1.png"
function Bag(props) {
    const { setHidden } = props;
    return (
        <div className={Style.Bag}>
            <div>
                <div className={Style.nameLine}>MEU <span>CARRINHO</span></div>
                <div className={Style.Item}>
                    <img src={Img1}></img>
                    <div>
                        <h3 className={Style.ItemTitle}><span>Nome do Produto</span><span>X</span></h3>
                        <span className={Style.ItemColor}></span>
                        <p className={Style.CountPrice}>
                            <span className={Style.ItemCount}>88</span>
                            <span className={Style.Price}>R$88,88</span>
                        </p>
                    </div>
                </div>
                <div className={Style.Item}>
                    <img src={Img1}></img>
                    <div>
                        <h3 className={Style.ItemTitle}><span>Nome do Produto</span><span>X</span></h3>
                        <span className={Style.ItemColor}></span>
                        <p className={Style.CountPrice}>
                            <span className={Style.ItemCount}>88</span>
                            <span className={Style.Price}>R$88,88</span>
                        </p>
                    </div>
                </div>
                <div className={Style.TotalPrice}>
                    <span>TOTAL</span>
                    <span>R$88,88</span>
                </div>
                <div className={Style.ConfirmLine}>
                    <span>
                        CONTINUAR<br></br> COMPRANDO
                    </span>
                    <span onClick={()=>setHidden(false)}>
                        CHECKOUT
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Bag;