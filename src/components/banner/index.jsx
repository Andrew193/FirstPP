import Style from "./style.module.css"

function HeaderBanner() {
    return (
        <div className={Style.HeaderBanner}>
                <span>FRETE GRÁTIS</span> PARA COMPRAS ACIMA DE <span>R$300,00</span>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
        </div>
    )
}

export default HeaderBanner;