function addMetaTags() {
    // Meta tags array
    const metaTags = [
        { charset: "UTF-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "author", content: "BucketStudy - Created by Rohan Bhoye" },
        { name: "keywords", content: "online learning, task-based training, free courses, skill development, BucketStudy" },
        { name: "description", content: "BucketStudy is an online task-based training platform offering free learning opportunities for students to gain new skills and enhance their careers." },
        
        // Open Graph Meta Tags (for social media sharing)
        { property: "og:title", content: "BucketStudy - Learn & Grow with Task-Based Training" },
        { property: "og:description", content: "Join BucketStudy for free task-based learning and skill development opportunities." },
        { property: "og:image", content: "https://www.bucketstudy.com/image/background.jpg" },
        { property: "og:url", content: "https://www.bucketstudy.com" },
        { property: "og:type", content: "website" },

        // Twitter Meta Tags
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "BucketStudy - Learn & Grow with Task-Based Training" },
        { name: "twitter:description", content: "Join BucketStudy for free task-based learning and skill development opportunities." },
        { name: "twitter:image", content: "https://www.bucketstudy.com/image/background.jpg" }
    ];


    metaTags.forEach(tag => {
        const metaElement = document.createElement("meta");
        Object.keys(tag).forEach(key => {
            metaElement.setAttribute(key, tag[key]);
        });
        document.head.appendChild(metaElement);
    });

    // Add Favicon dynamically (local favicon)
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.src = "image/favicon.ico"; // Make sure "favicon.ico" exists in the "images/" folder
    favicon.type = "image/x-icon";
    document.head.appendChild(favicon);
}


// Run functions after the DOM has loaded
document.addEventListener("DOMContentLoaded", () => {
    addMetaTags();

});