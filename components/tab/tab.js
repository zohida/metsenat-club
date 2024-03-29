document.addEventListener('DOMContentLoaded', function () {
    
    const tabItems = document.querySelectorAll('.tab-item');

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
            event.preventDefault(); 
            tabItems.forEach(tabItem => tabItem.classList.remove('active'));
            document.querySelectorAll('.tab-link').forEach(tabLink => tabLink.classList.remove('active'));
            link.classList.add('active');
            this.classList.add('active');
            const pagePath = link.getAttribute('href');
            window.location.href = pagePath;
        });
    });
});
