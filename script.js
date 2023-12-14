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

    console.log(destinationName, locationName, photoUrl, descript)
});