var searchBar = document.querySelector("#searchInput");
var searchButton = document.querySelector("#searchButton");

searchButton.addEventListener("click", function () {
    window.location.replace("https://localhost:7134/Vorm_1/Index?search=" + searchBar.value);
});
searchBar.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        window.location.replace("https://localhost:7134/Vorm_1/Index?search=" + searchBar.value);
    }
});