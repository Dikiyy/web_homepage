document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
});
// Only interest - ignore the code, for the project there is no sense
document.getElementById("vote-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const selectedOption = document.querySelector('input[name="category"]:checked');
    if (selectedOption) {
        const category = selectedOption.value;

        const mockResults = {
            Sports: 10,
            Technology: 15,
            Health: 5,
            Politics: 20,
            Entertainment: 8,
            Science: 12,
        };
        mockResults[category] += 1;

        // Show results
        const resultsList = document.getElementById("results-list");
        resultsList.innerHTML = "";
        for (const [key, value] of Object.entries(mockResults)) {
            const li = document.createElement("li");
            li.textContent = `${key}: ${value} votes`;
            resultsList.appendChild(li);
        }
        document.getElementById("vote-results").classList.remove("hidden");
    } else {
        alert("Please select a category before voting.");
    }
});