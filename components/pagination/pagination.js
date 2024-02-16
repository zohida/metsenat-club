const cardsPerPage = 10; // Number of cards per page
const totalCards = 100; // Total number of cards
const totalPages = Math.ceil(totalCards / cardsPerPage);

const pagination = document.getElementById('pagination');

function generatePagination(currentPage) {
    let paginationHTML = '';

    paginationHTML += `<li><a href="#" id="prev"><img src="./../../images/pag-icon-left.svg" alt=""></a></li>`;

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            paginationHTML += `<li><a href="#" class="page-link${i === currentPage ? ' active' : ''}" data-page="${i}">${i}</a></li>`;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHTML += `<li><span>...</span></li>`;
        }
    }

    paginationHTML += `<li><a href="#" id="next"><img src="./../../images/pag-icon-right.svg" alt=""></a></li>`;

    pagination.innerHTML = paginationHTML;

    // Add event listener for "Prev" button
    document.getElementById('prev').addEventListener('click', function(event) {
        event.preventDefault();
        handlePaginationClick('prev', currentPage);
    });

    // Add event listeners for numbered pages
    const pageLinks = document.querySelectorAll('.page-link');
    pageLinks.forEach(pageLink => {
        pageLink.addEventListener('click', function(event) {
            event.preventDefault();
            const pageNumber = parseInt(event.target.getAttribute('data-page'));
            handlePaginationClick(pageNumber, currentPage);
        });
    });

    // Add event listener for "Next" button
    document.getElementById('next').addEventListener('click', function(event) {
        event.preventDefault();
        handlePaginationClick('next', currentPage);
    });
}

function handlePaginationClick(targetPage, currentPage) {
    let newPage;
    if (targetPage === 'prev') {
        newPage = currentPage > 1 ? currentPage - 1 : 1;
    } else if (targetPage === 'next') {
        newPage = currentPage < totalPages ? currentPage + 1 : totalPages;
    } else {
        newPage = targetPage;
    }

    generatePagination(newPage);
    showPage(newPage);
}

function showPage(page) {
    const cards = document.querySelectorAll('.table-card');
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    cards.forEach((card, index) => {
        if (index >= startIndex && index < endIndex) {
            card.style.display = ''; // Reset display property to default
        } else {
            card.style.display = 'none';
        }
    });
}


// Initial page load
generatePagination(1);
showPage(1);
