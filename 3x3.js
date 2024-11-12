
function keveres() {
    const gridItems = document.querySelectorAll('.grid-item');
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


    numbers.sort(() => Math.random() - 0.5);


    gridItems.forEach((item, index) => {
        item.textContent = numbers[index];
    });
}
