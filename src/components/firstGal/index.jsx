import Style from "./style.module.css"
import Arr1 from "./img/iconSETA_.png"
import Arr2 from "./img/iconSETA_2.png"
import InnerIm1 from "./img/1.jpg"
import InnerIm2 from "./img/2.jpg"
import InnerIm3 from "./img/3.jpg"
import InnerIm4 from "./img/4.jpg"
import InnerIm5 from "./img/5.jpg"
import InnerIm6 from "./img/6.jpg"
function FirstGal() {
    return (<>
        <p className={Style.GalTitle}><span>PRODUTOS</span> EM DESTAQUE</p>
        <div className={Style.Gal}>
            <img src={Arr1} alt={"Left"} className={Style.ArrowLeft}></img>
            <div><img src={InnerIm1} alt={"1"}></img><span className={Style.Price}>R$88,88</span></div>
            <div><img src={InnerIm2} alt={"2"}></img><span className={Style.Price}>R$88,88</span></div>
            <div><img src={InnerIm3} alt={"3"}></img><span className={Style.Price}>R$88,88</span><span className={Style.Active}>COMPRAR</span></div>
            <div><img src={InnerIm4} alt={"4"}></img><span className={Style.Price}>R$88,88</span></div>
            <div><img src={InnerIm5} alt={"5"}></img><span className={Style.Price}>R$88,88</span></div>
            <div><img src={InnerIm6} alt={"6"}></img><span className={Style.Price}>R$88,88</span></div>
            <img src={Arr2} alt={"Right"} className={Style.ArrowRight}></img>
        </div>
    </>)
}

export default FirstGal;