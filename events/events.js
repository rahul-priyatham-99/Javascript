// by default events will have false enabling the events to bubble to their immediate ancestor element
// If we want to stop bubbling and start capturing then we should set false..
document.querySelector("#grandparent")
    .addEventListener("click", () => {
        console.log("Grandparent clicked !!")
    }, true)

document.querySelector("#parent")
    .addEventListener("click", (e) => {
        e.stopPropagation()
        console.log("Parent clicked !!")
    }, true)

document.querySelector("#child")
    .addEventListener("click", (e) => {
        e.stopPropagation(); // This is used to stop the event propogation(bubbling or capturing)
        console.log("child clicked !!")
    }, true)