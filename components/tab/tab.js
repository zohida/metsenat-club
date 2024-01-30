document.addEventListener('DOMContentLoaded', function () {
    // Get all tab links
    const tabLinks = document.querySelectorAll('.tab-link');

    // Highlight the active tab based on the current page
    const pathName = window.location.pathname;
    const pageName = pathName.split("/").pop();

    tabLinks.forEach(link => {
        const linkPageName = link.getAttribute('href').split("/").pop();
        if (linkPageName === pageName) {
            link.classList.add('active'); // Add 'active' class to tab-link
            link.parentElement.classList.add('active'); // Add 'active' class to tab-item
        }
    });

    // Add click event listener to each tab link
    tabLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default behavior of the link

            // Remove the "active" class from all tab links and tab items
            tabLinks.forEach(tabLink => tabLink.classList.remove('active'));
            document.querySelectorAll('.tab-item').forEach(tabItem => tabItem.classList.remove('active'));

            // Add the "active" class to the clicked tab link and tab item
            this.classList.add('active');
            this.parentElement.classList.add('active');

            // Get the href attribute of the clicked link
            const pagePath = this.getAttribute('href');

            // Update the window location to navigate to the clicked page
            window.location.href = pagePath;
        });
    });
});
