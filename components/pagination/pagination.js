const paginationIcon = document.getElementById("paginationIcon");
const selectList = document.getElementById("selectList");
const selectNum = document.getElementById("selectNum");
const selectItem = document.querySelectorAll('.select-item');


paginationIcon.addEventListener("click", () => {
    selectList.classList.toggle("hidden");
})

selectItem.forEach((item) => {
   item.addEventListener("click", () => {
    let text = item.innerText;
    selectNum.innerText = text;
  
    selectList.classList.toggle("hidden");
   })
})

 // Get pagination list element
 const paginationList = document.getElementById('paginationList');
 // Get pagination item elements
 const paginationItems = document.querySelectorAll('.pagination-item');

 // Function to show items based on page number
 function showItems(pageNumber, itemsPerPage) {
     // Calculate start and end index of items to be shown
     const startIndex = (pageNumber - 1) * itemsPerPage;
     const endIndex = pageNumber * itemsPerPage;

     // Hide all items initially
     paginationItems.forEach(item => {
         item.style.display = 'none';
     });

     // Show items within the range
     for (let i = startIndex; i < endIndex; i++) {
         if (paginationItems[i]) {
             paginationItems[i].style.display = 'block';
         }
     }
 }

 // Show the initial items
 showItems(1, 10);

 // Add click event listener to pagination items
 paginationItems.forEach((item, index) => {
     item.addEventListener('click', () => {
         // Update pagination to show the clicked page
         showItems(index + 1, 10);
     });
 });