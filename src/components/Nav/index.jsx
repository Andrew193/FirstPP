import Style from "./style.module.css"
import Img1 from "./img/menuCLOSE.png"
import Img2 from "./img/1.png"
function Nav(props) {
    const { setHidden } = props;
    return (
        <div className={Style.MenuContainer}>
            <div className={Style.Title}>
                <span>MENU</span>
                <img src={Img1} onClick={()=>setHidden(false)}></img>
            </div>
            <div className={Style.Question}>
                <input placeholder={"O QUE ESTÁ PROCURANDO?"}></input>
                <img src={Img2}></img>
            </div>
            <div className={Style.Item}>
                <span>SOBRE</span>
            </div>
            <div className={Style.Item}>
                <span>COLEÇÕES</span>
            </div>
            <div className={Style.Item + " " + Style.Open}>
                <span>CATEGORIA</span>
            </div>
            <div className={Style.SubItem}>
                <span>CATEGORIA</span>
            </div>
            <div className={Style.SubItem}>
                <span>CATEGORIA</span>
            </div>
            <div className={Style.SubItem}>
                <span>CATEGORIA</span>
            </div>
            <div className={Style.SubItem}>
                <span>CATEGORIA</span>
            </div>
            <div className={Style.Item}>
                <span>LOOKS</span>
            </div>
            <div className={Style.Item}>
                <span>CONTATO</span>
            </div>
            <div className={Style.Item}>
                <span>CONTATO</span>
            </div>
            <div className={Style.Item}>
                <span>CONTATO</span>
            </div>
            <div className={Style.Item}>
                <span>CONTATO</span>
            </div>
            <div className={Style.Item}>
                <span>CONTATO</span>
            </div>
        </div>
    )
}


export default Nav;