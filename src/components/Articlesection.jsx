import React from "react";
import Article from "./Article.jsx";
import image from "../assets/images/illustration-editor-desktop.svg"

export default function Articlesection() {
    return (
        <Article
            sectionTitle="Designed for the future"
            imageSrc={image}
            imageAlt="Section Image"
            heading="Introducing an extensible editor"
            text="Blogr features an exceedingly intuitive
             interface which lets you focus on one thing: 
             creating content. The editor supports management
              of multiple blogs and allows easy manipulation
               of embeds such as images, videos, and Markdown. 
               Extensibility with plugins and themes provide
                easy ways to add functionality or change the 
                looks of a blog. "
             heading_second="Robust content management"
            text_second="Flexible content management 
            enables users to easily move through posts.
             Increase the usability of your blog by 
             adding customized categories, sections,
              format, or flow. With this functionality, 
            you’re in full control. "   
        />
    );
}