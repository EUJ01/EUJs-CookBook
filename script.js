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

function display(items, count) {
    var box = document.getElementById("box");
    box.innerHTML = "";

    if (count == 1) {
        for (let i = 0; i < 5; i++) {
            var card = document.createElement("div");

            card.innerHTML =
                `<div class="card my-3 mx-auto" style="width: 25rem;">
                    <img src="${items[i].strMealThumb}" class="card-img-top" alt="Image">
                    <div class="card-body">
                        <h5 class="card-title">${items[i].strMeal}</h5>
                        <hr>
                        <b><p>ID: ${items[i].idMeal} <br> Cuisine: ${items[i].strArea}</p></b>

                        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Cooking Instructions</button>
                        
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">${items[i].strMeal}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    ${items[i].strInstructions}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>`

            card.classList.add("innerBox");
            box.appendChild(card);
        }

    }
    else {
        // above code copied and pasted with for loop extended
        for (let i = 0; i < items.length; i++) {
            var card = document.createElement("div");

            card.innerHTML =
                `<div class="card my-3 mx-auto" style="width: 25rem;">
                    <img src="${items[i].strMealThumb}" class="card-img-top" alt="Image">
                    <div class="card-body">
                        <h5 class="card-title">${items[i].strMeal}</h5>
                        <hr>
                        <b><p>ID: ${items[i].idMeal} <br> Cuisine: ${items[i].strArea}</p></b>

                        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Cooking Instructions</button>
                        
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">${items[i].strMeal}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    ${items[i].strInstructions}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>`

            card.classList.add("innerBox");
            box.appendChild(card);
        }
    }

    const myModal = document.getElementById('myModal')
    const myInput = document.getElementById('myInput')

    myModal.addEventListener('shown.bs.modal', () => {
        myInput.focus()
    })
}
