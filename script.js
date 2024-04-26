function getFew() {
    var food = document.getElementById("food").value;

    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;
    fetch(url).
        then(res => res.json()).
        then(data => console.log(data.meals));
        // then(data => display(data.meals, 1))
}

function getAll() {
    var food = document.getElementById("food").value;

    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;
    fetch(url).
        then(res => res.json()).
        then(data => console.log(data.meals));
        // then(data => display(data.meals, 2))
}