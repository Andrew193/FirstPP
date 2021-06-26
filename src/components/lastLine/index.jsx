import Style from "./style.module.css"


function LastLine() {
    return (
        <div className={Style.Container}>
            <span className={Style.Arrow}>NEWSLETTER</span>
            <span className={Style.LikeInput} style={{ paddingRight: "19px", marginRight: "6px" }}>NOME</span>
            <span className={Style.LikeInput} style={{ marginRight: "14px", paddingLeft: "8px" }} >ENDEREÇO DE EMAIL</span>
            <span>CADASTRAR</span>
        </div>
    )
}

export default LastLine;