document.addEventListener('DOMContentLoaded', function() {
    // Show loader
    const loaderOverlay = document.getElementById('loaderOverlay');
    
    // Hide loader when page is fully loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            loaderOverlay.style.opacity = '0';
            setTimeout(function() {
                loaderOverlay.style.display = 'none';
            }, 500);
        }, 1000); // Show loader for at least 1 second
    });
});