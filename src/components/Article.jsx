


export default function Article({ sectionTitle, imageSrc, imageAlt, heading, text, heading_second,text_second, reverse = false }) {
    return (
    <section className="article-section">
            <h1 className="article-title">{sectionTitle}</h1>
        <div className={`article_container container ${reverse ? 'reverse' : ''}`}>
            <div className="main_container_article">
                <div className="container_text_article">
                    <h1 className="article-title_container">{heading}</h1>
                    <p className="article-description">{text}</p>
                </div>
                <div className="container_text_article">
                    <h1 className="article-title_container">{heading_second}</h1>
                    <p className="article-description">{text_second}</p>
                </div>
           </div>
        
            <div className="article-container_image">
                        <img className="article-image" src={imageSrc} alt={imageAlt} />
            </div>

        </div>
    </section>
    );
}