import bg1 from "../../assets/content/s1.png"
import bg2 from "../../assets/content/s2.png"
import bg3 from "../../assets/content/s3.png"
import bg4 from "../../assets/content/s4.png"
import "../../style/carrusel.scss"

export function Section1(){
    const carruselItems = [
        {
            id: 1,
            title: "12 Days of OpenAI",
            contentText: "Continuing Friday at 10am PT.",
            buttonText: "Learn more",
            bg: {
                backgroundImage: `url(${bg1})` 
            },
            className: "slideCard"
        },
        {
            id: 2,
            title: "Sora",
            contentText: "Bring your imagination to life from text, image, or video.",
            buttonText: "Learn more",
            bg: {
                backgroundImage: `url(${bg2})` 
            },
            className: "slideCard light"
        },
        {
            id: 3,
            title: "OpenAI o1",
            contentText: "A new series of AI models designed to spend more time thinking before they respond.",
            buttonText: "Learn more",
            bg: {
                backgroundImage: `url(${bg3})` 
            },
            className: "slideCard light"
        }
        ,
        {
            id: 4,
            title: "ChatGPT on your desktop",
            contentText: "Chat about email, screenshots, files, and anything on your screen.",
            buttonText: "Learn more",
            bg: {
                backgroundImage: `url(${bg4})` 
            },
            className: "slideCard light"
        }
    ]
    return(
        <section className="carrousel">
            {
                carruselItems.map((item) =>{
                    return(
                        <div 
                            className={item.className} 
                            key={item.id} 
                            style={item.bg}
                                
                        >
                            <h2>{item.title}</h2>
                            <p>{item.contentText}</p>
                            <button>{item.buttonText}</button>
                        </div>
                    )
                })
            }
        </section>
    )
}