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

// when edit or delete buttons are clicked, handle them with delegation
cards_container.addEventListener("click", (e) => {
    let clickedElt = e.target; 

    if(clickedElt.getAttribute("btn_type") === "delete"){
        clickedElt.parentElement.parentElement.remove();
    }
})

function createCard({destinationName, locationName, photoUrl, descript}) {
    
    const card =  document.createElement("div");
    card.classList.add("card")
    card.setAttribute("style", "width: 18rem;")
    card.innerHTML =  `
        <img src=${photoUrl} class="card-img-top" alt=${destinationName} at ${locationName}>
        <div class="card-body">
            <h5 class="card-title">${destinationName}</h5>
            <p class="card-text">${locationName}</p>
            ${descript && `<p class="card-text">${descript}</p>`}
            <button type="button" btn_type="edit" class="btn btn-info">Edit</button>
            <button type="button" btn_type="delete" class="btn btn-danger">Delete</button>
        </div>
        `
    return card;
}