// when form is submitted grab user's input and log it 
user_input_form.addEventListener("submit", (e) => {
    // e is the event object
    e.preventDefault();
    // that object holds more information about the event that we are handling
    const placeHolderUrl = "https://static.vecteezy.com/system/resources/previews/020/853/711/original/illustration-of-airplane-aircraft-airplane-drawing-vector.jpg"

    const destinationName = destination_name.value;
    const locationName = location_name.value;
    const photoUrl = photo_url.value || placeHolderUrl;
    const descript = description.value;

    // clear the form
    user_input_form.reset();

    const card = createCard({destinationName, locationName, photoUrl, descript});
    cards_container.appendChild(card);
});

function createCard({destinationName, locationName, photoUrl, descript}) {
    /*
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    */
    const card =  document.createElement("div");
    card.classList.add("card")
    card.setAttribute("style", "width: 18rem;")
    card.innerHTML =  `
        <img src=${photoUrl} class="card-img-top" alt=${destinationName} at ${locationName}>
        <div class="card-body">
            <h5 class="card-title">${destinationName}</h5>
            <p class="card-text">${locationName}</p>
            ${descript && '<p class="card-text">${descript}</p>'}
            <button type="button" class="btn btn-info">Edit</button>
            <button type="button" class="btn btn-danger">Delete</button>
        </div>
        `
    
    


    return card;
}