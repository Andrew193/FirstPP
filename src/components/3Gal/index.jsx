import Style from "./style.module.css"
import s from "../firstGal/style.module.css"
import Img1 from "./img/1.jpg"
import Img2 from "./img/2.jpg"
import Img3 from "./img/3.jpg"
import Img4 from "./img/4.jpg"
import Img5 from "./img/5.jpg"
function Gal3() {
    return (
        <div className={Style.Container}>
            <p className={s.GalTitle}>
                <span style={{ paddingLeft: "3px" }}>GALERIA</span> DO
                <span style={{ paddingLeft: "13px" }}>INSTAGRAM</span>
            </p>
            <div className={Style.Gal}>
                <img src={Img1}></img>
                <img src={Img2}></img>
                <span>
                    <img src={Img3}></img>
                    <div className={Style.Active}>
                        <svg width="34px" height="29px">
                            <image x="0px" y="0px" width="34px" height="29px" href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAdCAQAAABlYnYxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflBhkPLgQvOkcsAAABwElEQVQ4y6XUO2sUYRSH8WdmZ/GCgixiIaQRTSNBDGLES5GEpFBDQCGKYGMlgpUoNn4AP4ZlvHQrNooIskIIqJiIJkguClHY6GLhLl7msdhssiazY7LzP+U57w9O8Z5AAMjRwWn62cs2cnzhKfeY5Acr2cIxznCUHcRUmOARTygTAyBi3mGfW/GXjVSd8ZoFAxFDd3vbOWvL/ZrfvW+3kQhi5HUXTUrR/YZG9jvu74T+rMPmBTd5wa+2yqQnvOx8y/6UPQZ4wAnTsti0RFLu2BkxSAdpKZCeHgZCetlMluyiN2QPUSZkO50hWwkzIRGFkBgzIRCHLPAnE1FlNqRENRNS5kXIQyqZkPcUQ8YoUmub+MkoY4j7fG17ib3rTpd+8Yif2yJeediggeANv22YmHfIXOMU1OuWlQ0Rnzxnvv52BQm8uW4mdsazDaIZwcCrKZelmZj2VH2RtQjiFcv/JaYcMGx+tRoJvORCKvHWvn+JtQjixZZM7BuPryaSETzvx0TipUeW7v86EBxxbg0x7qEkojWCQ34wbiJKdicTaQiedHqZeObB1pNpCPb5ztjYx3alzaUjOGjJB3a1WqRefwHhzP+iU829OAAAAABJRU5ErkJggg==" />
                        </svg>
                        <span>1.323 likes</span>
                    </div>
                </span>
                <img src={Img4}></img>
                <img src={Img5}></img>
            </div>
        </div>
    )
}

export default Gal3;