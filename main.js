let dropDown = document.getElementsByClassName("File");
let index;

// index through the file dropdown menu use a for loop or for of loop and an on click event listener to expand each category

for (index = 0; index < dropDown.length; index++) {
    dropDown[index].addEventListener("click", function() {
        this.parentElement.querySelector(".SubFile").classList.toggle("active");
        this.classList.toggle("File-down");
    });
}