document.addEventListener('DOMContentLoaded', function () {
    // Get all tab items
    const tabItems = document.querySelectorAll('.tab-item');

    // Highlight the active tab based on the current page
    const pathName = window.location.pathname;
    const pageName = pathName.split("/").pop();

    tabItems.forEach(item => {
        const link = item.querySelector('.tab-link');
        const linkPageName = link.getAttribute('href').split("/").pop();
        if (linkPageName === pageName) {
            link.classList.add('active'); // Add 'active' class to tab-link
            item.classList.add('active'); // Add 'active' class to tab-item
        }
    });

    // Add click event listener to each tab item
    tabItems.forEach(item => {
        item.addEventListener('click', function (event) {
            const link = this.querySelector('.tab-link');
            event.preventDefault(); // Prevent the default behavior of the link

            // Remove the "active" class from all tab links and tab items
            tabItems.forEach(tabItem => tabItem.classList.remove('active'));
            document.querySelectorAll('.tab-link').forEach(tabLink => tabLink.classList.remove('active'));

            // Add the "active" class to the clicked tab link and tab item
            link.classList.add('active');
            this.classList.add('active');

            // Get the href attribute of the clicked link
            const pagePath = link.getAttribute('href');

            // Update the window location to navigate to the clicked page
            window.location.href = pagePath;
        });
    });
});
