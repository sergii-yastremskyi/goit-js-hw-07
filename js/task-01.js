const categories = document.querySelectorAll(".item");
console.log(`В списке ${categories.length} категории`);

const headers = document.querySelectorAll("ul h2");
headers.forEach(header => {
    console.log(header.textContent)
    console.log(header.parentElement.querySelectorAll("li").length)
})

const subcategories = document.querySelector
// categories.forEach(cat => console.log(cat.textContent));

// const subcategoryCount = document.querySelector("#categories h2");
// console.log(`Количество элементов в категории: ${subcategoryCount.textContent}`);