
import phones from "../assets/images/illustration-phones.svg";
// import circles from "../assets/images/bg-pattern-circles.svg";



export default function Middlesection() {
    return (
    
<section className="middle-section">

        <div className="wraper_container_middlesection">
  
                <div className="article-container_image">
                            <img className=" middle-image"
                            src={phones} 
                            alt="Phones illustration"/>
                </div>

                <div className="article_section_middle container">     
                        <h1 className="middle_article-title">
                            State of the Art Infrastructure
                        </h1>

                            <p className="description">
                                With reliability and speed in mind, worldwide data centers provide
                                the backbone for ultra-fast connectivity. This ensures your site
                                will load instantly, no matter where your readers are, keeping
                                your site competitive.
                                </p>
                </div>
                
        </div>
                {/* <img className="circle-pattern" 
                src={circles}
                alt="Circle patterns"
                /> */}
    </section>
    );
}