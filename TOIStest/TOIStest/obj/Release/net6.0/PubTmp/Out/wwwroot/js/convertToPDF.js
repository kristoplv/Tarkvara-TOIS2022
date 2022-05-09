import { jsPDF } from "jspdf";


var formContent = document.querySelector("#formContent");
var doc = new jsPDF();
var btn = document.querySelector("#formToPDF");
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};
btn.addEventListener("click", function () {
    doc.fromHTML(formContent.html(), 15, 15, {
        'width': 170,
        'elementHandlers': specialElementHandlers
    });
    doc.save("õppekava_vorm.pdf");
});