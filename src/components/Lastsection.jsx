import React from "react";
import Article from "./Article.jsx";
import image from "../assets/images/illustration-laptop-mobile.svg"


export default function Lastsection() {
    return (
        <Article
            sectionTitle=""
            imageSrc={image}
            imageAlt="Laptop image"
              reverse={true}
            heading="Free, open, simple"
            text="Blogr is a free and open source application backed by a
             large community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
            and works seamlessly with Google Analytics. The architecture is clean and
             is relatively easy to learn.  "
             heading_second="Powerful tooling"
            text_second="Batteries included. We built a simple and straightforward CLI 
            tool that makes 
            customization and deployment a breeze,
             but capable of producing even the
             most complicated sites.  "   
           
        />
    );
}