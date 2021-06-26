import Style from "./style.module.css"
import Img1 from "./img/1.jpg"
import Img2 from "./img/2.jpg"
import Img3 from "./img/3.jpg"
import Img4 from "./img/4.jpg"
function Gal4() {
    return (<div className={Style.Container}>
        <p className={Style.GalTitleSpec}><span>QUEM USA</span></p>
        <div className={Style.Gal}>
            <img src={Img1}></img>
            <span className={Style.Active}><img src={Img2}></img> <span>David Guetta</span> </span>
            <img src={Img3}></img>
            <img src={Img4}></img>
        </div>
    </div>)
}

export default Gal4;