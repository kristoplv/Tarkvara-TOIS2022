/*import * as jsPDF from 'jspdf';
import 'jspdf-autotable';*/

window.onload = function(){
    document.querySelector('#downloadPdf').addEventListener('click', generatePdf);
}

function generatePdf() {
    let doc = new jsPDF.jsPDF();
    let pdfName = "oppekava.pdf"; // saab asendada nt. ainekoodiga
    doc.autoTable({
        theme: 'plain',
        styles: { lineColor: [0, 0, 0], lineWidth: 0.1 },
        html: '#table'
    });
    doc.save(pdfName);
}

function sendEmail() {
    Email.send({
        Host: 'smtp.gmail.com',
        Username: '',
        Password: '',
        To: '',
        From: '',
        Subject: 'TÕIS teade',
        Body: 'Uus õppekava ootab kinnitamist.'
    });
}