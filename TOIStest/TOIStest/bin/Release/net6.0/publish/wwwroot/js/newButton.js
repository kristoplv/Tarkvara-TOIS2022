var newButton = document.querySelector("#newForm");
var newCreator = document.getElementById("creator");
function generateHash() {
    var length = 35;
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
newButton.addEventListener("click", function () {
    console.log(generateHash());
    window.open("https://localhost:7134/Vorm_1/Create?whoFills=" + newCreator.value + "&id=" + generateHash());
});
