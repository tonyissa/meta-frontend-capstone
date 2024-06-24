import sampleMenu from "../db";


export default function Menu() {
    return (
        <section className="menu-container text-2">
            <h3 className="section-title primary-1">Sample menu:</h3>
            <div className="menu">
                {sampleMenu.map(item => {
                    return (
                        <div className="item-container">
                            <img src={item.img} alt="" />
                            <div>{item.title}</div>
                            <p>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}