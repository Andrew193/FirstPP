import Style from "./style.module.css"
import Logo from "./img/icon.png"
import Img1 from "./img/1.jpg"
import Img2 from "./img/2.jpg"
import Img3 from "./img/3.jpg"
import Img4 from "./img/4.jpg"
import Img5 from "./img/5.jpg"
import Img6 from "./img/6.jpg"
function SecondGal() {
    return (<div className={Style.Container}>
        <p className={Style.LogoLine}><img src={Logo} alt={"Logo"}></img></p>
        <div>
            <span className={Style.ImgContainer}>
                <img src={Img1}></img><span className={Style.ImgTitle + " " + Style.I1}>JA
                    <span style={{ paddingLeft: "5px" }}>QUET</span>
                    <span style={{ paddingLeft: "11px" }}>AS</span>
                </span>
            </span>
            <span className={Style.ImgContainer}>
                <img src={Img2} style={{ marginRight: "-4px" }}></img><span className={Style.ImgTitle + " " + Style.I2}>SHORTS</span>
            </span>
            <div className={Style.Cont} >
                <span className={Style.ImgContainer}>
                    <img src={Img3}></img><span className={Style.ImgTitle + " " + Style.I3}>CORTA-VEN
                        <span style={{ paddingLeft: "7px" }}>TO</span>
                    </span>
                </span>
                <span className={Style.ImgContainer} style={{ marginLeft: "29px" }}>
                    <img src={Img4} ></img><span className={Style.ImgTitle + " " + Style.I4}>CAMI SAS</span>
                </span>
            </div>
            <div className={Style.Cont}>
                <span className={Style.ImgContainer}>
                    <img src={Img5}></img><span className={Style.ImgTitle + " " + Style.I5}>CALÇAS</span>
                </span>
                <span className={Style.ImgContainer} style={{ marginLeft: "27px" }}>
                    <img src={Img6}></img><span className={Style.ImgTitle + " " + Style.I6}>CAMI
                        <span style={{ marginLeft: "4px", letterSpacing: "5.7px" }}>SET</span>
                        <span style={{ marginLeft: "4px" }}>AS</span></span>
                </span>
            </div>
        </div>
    </div>)
}

export default SecondGal;