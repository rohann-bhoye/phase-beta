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

    // Add meta tags dynamically
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
    favicon.href = "image/favicon.ico"; // ✅ Fixed: Use "href" instead of "src"
    favicon.type = "image/x-icon"; // ✅ Fixed extra spaces
    document.head.appendChild(favicon);
}

// Run functions after the DOM has loaded
document.addEventListener("DOMContentLoaded", () => {
    addMetaTags();
});
document.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Disable right-click menu
});

document.addEventListener("keydown", function(event) {
    // Disable Ctrl+U, Ctrl+Shift+I, F12
    if (
        event.ctrlKey && (event.key === "u" || event.key === "U") || // Ctrl + U
        event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "i") || // Ctrl + Shift + I
        event.key === "F12" // F12
    ) {
        event.preventDefault();
    }
});
