import Style from "./style.module.css"
import IconMenu from "./img/iconMENU.png"
import ItemCarr from "./img/ic.png"
import AllComponents from "../../helpers/common/allComponents"
import { useState } from "react"
function NavLine() {
    const [flag, setFlag] = useState(false)
    const [flag1, setFlag1] = useState(false)
    return (
        <nav className={Style.NavLine}>
            <img alt={"Icon menu"} src={IconMenu} onClick={() => setFlag1(!flag1)}></img>
            <h2><span>CLOTH</span> & <span>FASHION</span></h2>
            <span className={Style.Items}>LOGIN
                <img src={ItemCarr} className={Style.Cor} alt={"Items"} onClick={() => setFlag(!flag)}></img>
                <span className={Style.Count}>88</span>
            </span>
            {flag && <AllComponents.Bag setHidden={setFlag} />}
            {(flag || flag1) && <AllComponents.Modal />}
            {flag1 && <AllComponents.Nav setHidden={setFlag1} />}
        </nav>
    )
}

export default NavLine;