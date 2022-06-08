class SaveFile{
    // Paneme andmed vormi väljadest muutujatesse
    constructor(){
        console.log("Töötab");
        this.nimiEK = document.querySelector('#nimiEK');
        this.nimiIK = document.querySelector('#nimiIK');
        this.nimiVK = document.querySelector('#nimiVK');
        this.oppeViis1 = document.querySelector('#r1');
        this.oppeViis2 = document.querySelector('#r2');
        this.oppeViis3 = document.querySelector('#r3');
        this.oppeViisid = "";
        this.lisa = document.querySelector('#lisa');
        this.eap = document.querySelector('#EAP');
        this.oppeVorm = document.querySelector('#nimiEK');
        this.keeled = document.querySelector('#lang');
        this.sihtGrupp = document.querySelector('#target');

        this.downloadButton = document.querySelector('#downloadTxt');

        this.formData();
    }
    // Andmete komplekteerimine formaati
    formData(){
        console.log("Töötab endiselt");
        if(this.oppeViis1.checked){
            this.oppeViisid += "E-õpe \r\n";
        }
        if(this.oppeViis2.checked){
            this.oppeViisid += "Praktika \r\n";
        }
        if(this.oppeViis3.checked){
            this.oppeViisid += "Iseseisev õpe \r\n";
        }
        console.log(this.oppeViisid);
        let data = 
            '\r Õppekava nimetus eesti keeles: ' + nimiEK.value + ' \r\n ' + 
            'Õppekava nimetus inglise keeles: ' + nimiIK.value + ' \r\n ' +
            'Õppekava nimetus vene keeles: ' + nimiVK.value + ' \r\n ' +
            'Õppeviisid: ' + this.oppeViisid + ' \r\n ' +
            'Muud lisad: ' + this.lisa.value + ' \r\n ' +
            'EAP maht: ' + this.eap.value + ' \r\n ' +
            'Õppevorm: ' + this.oppeVorm.value + ' \r\n ' + 
            'Õppetöö keeled: ' + this.keeled.value + ' \r\n ' +
            'Sihtgrupp: ' + this.sihtGrupp.value + ' \r\n ';

        this.formBlob(data);
    }
    formBlob(data){
        console.log("Töötab jätkuvalt");
        // Teksti konverteerimine Blob andmetüüpi (kõrgema astme andmekomplekt, API, võimaldab allalaadimist)
        let textToBLOB = new Blob([data], { type: 'text/plain; charset=utf-8"' });
        let sFileName = 'formData.txt';	   // Salvestatav fail

        this.generateLink(sFileName, textToBLOB);
    }
    // Lingi genereerimine dokumendi allalaadimiseks
    generateLink(sFileName, textToBLOB){
        console.log("Töötab töötab");
        let newLink = document.createElement("a");
        newLink.download = sFileName;
        newLink.setAttribute('id', 'downloadDocument');

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }
        console.log(newLink);
        this.downloadButton.addEventListener('click', ()=>{
            newLink.click();
        });
    }
}

let form = new SaveFile();