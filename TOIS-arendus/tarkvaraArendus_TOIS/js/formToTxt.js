window.onload = function(){
    document.querySelector('#downloadTxt').addEventListener('click', downloadFormTxt);
}

function downloadFormTxt(){
    let form = new SaveFile();
}

class SaveFile{
    // Paneme andmed vormi väljadest muutujatesse
    constructor(){
        console.log("Töötab");
        this.nimiEK = document.querySelector('#nimetus-ek');
        this.nimiIK = document.querySelector('#nimetus-ik');
        this.nimiVK = document.querySelector('#nimetus-vk');
        this.oppeViis1 = document.querySelector('#kontaktope');
        this.oppeViis2 = document.querySelector('#praktika');
        this.oppeViis3 = document.querySelector('#iseseisev-ope');
        this.oppeViisid = "";
        this.keel1 = document.querySelector('#eesti');
        this.keel2 = document.querySelector('#inglise');
        this.keeled = "";
        this.koolituseLiik = document.querySelector('#koolituse-liik');
        this.liik = "";
        this.mahtTundidesKontakt = document.querySelector('#kontaktope-h');
        this.mahtTundidesPraktika = document.querySelector('#praktika-h');
        this.mahtTundidesIseseisev = document.querySelector('#iseseisev-ope-h');
        this.eap = document.querySelector('#eap-result');

        this.kontrolliVorm = document.querySelector('#kontrollivorm');
        this.kontrollvorm = "";
        this.hindamisKriteeriumidEK = document.querySelector('#hindamiskriteeriumid-ek');
        this.hindamisKriteeriumidIK = document.querySelector('#hindamiskriteeriumid-ik');
        this.hindamisKriteeriumidVK = document.querySelector('#hindamiskriteeriumid-vk');
        this.eesmargidEK = document.querySelector('#eesmargid-ek');
        this.eesmargidIK = document.querySelector('#eesmargid-ik');
        this.eesmargidVK = document.querySelector('#eesmargid-vk');
        this.opivaljundidEK = document.querySelector('#opivaljundid-ek');
        this.opivaljundidIK = document.querySelector('#opivaljundid-ik');
        this.opivaljundidVK = document.querySelector('#opivaljundid-vk');
        this.sisuEK = document.querySelector('#sisu-ek');
        this.sisuIK = document.querySelector('#sisu-ik');
        this.sisuVK = document.querySelector('#sisu-vk');
        this.eeldusedEK = document.querySelector('#eeldused-ek');
        this.eeldusedIK = document.querySelector('#eeldused-ik');
        this.eeldusedVK = document.querySelector('#eeldused-vk');
        this.tingimusedEK = document.querySelector('#tingimused-ek');
        this.tingimusedIK = document.querySelector('#tingimused-ik');
        this.tingimusedVK = document.querySelector('#tingimused-vk');

        this.sihtGrupp = document.querySelector('#sihtgrupp');
        this.opiKeskkond = document.querySelector('#opikeskkond');
        this.koolitajaKompetentsus = document.querySelector('#koolitaja-kompetentsus');
        this.kuvatavKoolitaja = document.querySelector('#veebis-kuvatav-koolitaja');

        this.oppeValdkond = document.querySelector('#oppevaldkond');
        this.oppeSuund = document.querySelector('#oppesuund');
        this.oppeRuhm = document.querySelector('#oppekava-ruhm');
        this.oppekavaKoostamiseAlus = document.querySelector('#oppekava-koostamise-alus');
        this.pohiVastutaja = document.querySelector('#pohivastutaja');
        this.veebisKuvatavKorraldaja = document.querySelector('#veebis-kuvatav-korraldaja');
        this.onTellitav = document.querySelector('#tellitav');
        this.poleTellitav = document.querySelector('#pole-tellitav');
        this.tellitavus = "";
        this.onNahtav = document.querySelector('#nahtav');
        this.poleNahtav = document.querySelector('#pole-nahtav');
        this.nahtavus = "";

        this.downloadButton = document.querySelector('#downloadTxt');

        this.formData();
    }
    // Andmete komplekteerimine formaati
    formData(){
        console.log("Töötab endiselt");
        if(this.oppeViis1.checked){
            this.oppeViisid += "Kontaktõpe \r\n";
        }
        if(this.oppeViis2.checked){
            this.oppeViisid += "Praktika \r\n";
        }
        if(this.oppeViis3.checked){
            this.oppeViisid += "Iseseisev õpe \r\n";
        }
        console.log(this.oppeViisid);

        if(this.keel1.checked){
            this.keeled += "Eesti \r\n";
        }
        if(this.keel2.checked){
            this.keeled += "Inglise \r\n";
        }
        console.log(this.keeled);

        if(this.onTellitav.checked){
            this.tellitavus = "Tellitav";
        }
        if(this.poleTellitav.checked){
            this.tellitavus = "Pole tellitav";
        }

        if(this.onNahtav.checked){
            this.nahtavus = "Nähtav";
        }
        if(this.poleNahtav.checked){
            this.nahtavus = "Pole nähtav";
        }

        if(this.kontrolliVorm.value == 1){
            this.kontrollvorm = "Eksam";
        }
        if(this.kontrolliVorm.value == 2){
            this.kontrollvorm = "Arvestus";
        }
        if(this.kontrolliVorm.value == 3){
            this.kontrollvorm = "Puudub";
        }

        if(this.koolituseLiik.value == 1){
            this.liik = "Koolitus";
        }

        let data = 
            'Üldine info: \r\n' + 
            '\r\n' +
            'Õppekava nimetus eesti keeles: ' + this.nimiEK.value + ' \r\n ' + 
            'Õppekava nimetus inglise keeles: ' + this.nimiIK.value + ' \r\n ' +
            'Õppekava nimetus vene keeles: ' + this.nimiVK.value + ' \r\n ' +
            'Õppeviisid: ' + this.oppeViisid + ' \r\n ' +
            'Õppekeeled: ' + this.keeled + ' \r\n ' +
            'Koolituse liik: ' + this.liik + ' \r\n ' +
            'Kontaktõppe maht: ' + this.mahtTundidesKontakt.value + ' \r\n ' +
            'Praktika maht: ' + this.mahtTundidesPraktika.value + ' \r\n ' +
            'Iseseisva õppe maht: ' + this.mahtTundidesIseseisev.value + ' \r\n ' +
            'EAP maht: ' + this.eap.value + ' \r\n ' +
            '\r\n' +

            'Hindamine ja õppe eesmärgid: \r\n' + 
            '\r\n' +
            'Kontrollivorm: ' + this.kontrollvorm + ' \r\n ' +
            'Hindamiskriteeriumid eesti keeles: ' + this.hindamisKriteeriumidEK.value + ' \r\n ' + 
            'Hindamiskriteeriumid inglise keeles: ' + this.hindamisKriteeriumidIK.value + ' \r\n ' +
            'Hindamiskriteeriumid vene keeles: ' + this.hindamisKriteeriumidVK.value + ' \r\n ' +
            'Õppe eesmärgid eesti keeles: ' + this.eesmargidEK.value + ' \r\n ' + 
            'Õppe eesmärgid inglise keeles: ' + this.eesmargidIK.value + ' \r\n ' +
            'Õppe eesmärgid vene keeles: ' + this.eesmargidVK.value + ' \r\n ' +
            'Õpiväljundid eesti keeles: ' + this.opivaljundidEK.value + ' \r\n ' + 
            'Õpiväljundid inglise keeles: ' + this.opivaljundidIK.value + ' \r\n ' +
            'Õpiväljundid vene keeles: ' + this.opivaljundidVK.value + ' \r\n ' +
            'Õppe sisu eesti keeles: ' + this.sisuEK.value + ' \r\n ' + 
            'Õppe sisu inglise keeles: ' + this.sisuIK.value + ' \r\n ' +
            'Õppe sisu vene keeles: ' + this.sisuVK.value + ' \r\n ' +
            'Õppe eeldused eesti keeles: ' + this.eeldusedEK.value + ' \r\n ' + 
            'Õppe eeldused inglise keeles: ' + this.eeldusedIK.value + ' \r\n ' +
            'Õppe eeldused vene keeles: ' + this.eeldusedVK.value + ' \r\n ' +
            'Õppe tingimused eesti keeles: ' + this.tingimusedEK.value + ' \r\n ' + 
            'Õppe tingimused inglise keeles: ' + this.tingimusedIK.value + ' \r\n ' +
            'Õppe tingimused vene keeles: ' + this.tingimusedVK.value + ' \r\n ' +
            '\r\n' +

            'Muu informatsioon: \r\n' + 
            '\r\n' +
            'Sihtgrupp: ' + this.sihtGrupp.value + ' \r\n ' +
            'Õpikeskkond: ' + this.opiKeskkond.value + ' \r\n ' +
            'Koolitaja kompetentsus: ' + this.koolitajaKompetentsus.value + ' \r\n ' +
            'Veebis kuvatav koolitaja: ' + this.kuvatavKoolitaja.value + ' \r\n ' +
            '\r\n' +

            'Administratiivne info: \r\n' + 
            '\r\n' +
            'Õppevaldkond: ' + this.oppeValdkond.value + ' \r\n ' +
            'Õppesuund: ' + this.oppeSuund.value + ' \r\n ' +
            'Õppekava rühm: ' + this.oppeRuhm.value + ' \r\n ' +
            'Õppekava koostamise alus: ' + this.oppekavaKoostamiseAlus.value + ' \r\n ' +
            'Põhivastutaja: ' + this.pohiVastutaja.value + ' \r\n ' +
            'Veebis kuvatav korraldaja: ' + this.veebisKuvatavKorraldaja.value + ' \r\n ' +
            'Tellitavus: ' + this.tellitavus.value + ' \r\n ' +     
            'Nähtavus: ' + this.nahtavus.value + ' \r\n ';
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

        newLink.click();
    }
}