import Style from "./style.module.css"
import Img1 from "./img/iconFACE.png"
import Img2 from "./img/iconTWITTER.png"
import Img3 from "./img/iconINSTA.png"
function Footer() {
    return(
        <footer className={Style.Container}>
            <ul>
                <li>SOBRE</li>
                <li>CONTATO</li>
                <li>TERMOS & <span>CONDIÇÕES</span></li>
                <li>POLÍTICA DE <span>PRIVACIDADE</span></li>
            </ul>
            <span>
                <img src={Img1}></img>
                <img src={Img2}></img>
                <img src={Img3}></img>
            </span>
        </footer>
    )
}


export default Footer;