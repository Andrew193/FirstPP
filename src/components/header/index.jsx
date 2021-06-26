import AllComponents from "../../helpers/common/allComponents"
import Style from "./style.module.css"


function Header() {
    return (<>
        <AllComponents.HeaderBanner />
        <div className={Style.Container}>
            <AllComponents.TitleBlock />
            <AllComponents.CurrentImg />
        </div>
    </>)
}


export default Header;