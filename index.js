document.addEventListener('DOMContentLoaded', () => {
    // Remove the <main> element with ID 'main' if it exists
    const main = document.getElementById("main");
    if (main) {
        main.remove();
    }

    // Create and configure the newHeader element
    window.newHeader = document.createElement("h1");  // Define it on the window to ensure global scope
    newHeader.id = "victory";
    newHeader.textContent = "Sadeek is the champion";  // Replace YOUR-NAME with your actual name
    document.body.appendChild(newHeader);

    // Other DOM manipulations can continue below
    const element = document.createElement("div");
    document.body.append(element);

    const ul = document.createElement("ul");
    for (let i = 0; i < 3; i++) {
        const li = document.createElement("li");
        li.textContent = `Item ${i + 1}`;
        ul.append(li);
    }
    element.append(ul);
});