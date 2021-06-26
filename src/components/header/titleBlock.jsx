import Style from "./style.module.css"

function TitleBlock() {
    return(
        <div className={Style.TitleBlock}>
        <h2 className={Style.TitleBlockTitle}><span>C&F</span><span>CLOTHING</span></h2>
        <p className={Style.TitleBlockParagraph}>Sports & Lifestyle</p>
        <button className={Style.TitleBlockButton}>CONFIRA</button>
    </div>
    )
}
export default TitleBlock;