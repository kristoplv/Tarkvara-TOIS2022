function openTable(tableBtn_id) {
    let table_id = tableBtn_id.replace('Btn', '');
    let table = document.getElementById(table_id);
    let hide = table.style.display === 'none';

    if (hide) {
        table.style.display = 'table';
    } else {
        table.style.display = 'none';
    }
}

function calculateEAP() {
    let kontaktope = Number(document.getElementById('kontaktope-h').value);
    let praktika = Number(document.getElementById('praktika-h').value);
    let iseseisev = Number(document.getElementById('iseseisev-ope-h').value);

    let hours = kontaktope + praktika + iseseisev;
    let eap = Math.round((hours) / 26);

    let hoursResult = document.getElementById('hours-result');
    hoursResult.innerText = hours;
    let eapResult = document.getElementById('eap-result');
    eapResult.innerText = eap;
}

function showInputs(id) {
    let language = document.getElementById(id);
    let suffix = '';
    let th ='-th';
    let hindamiskriteeriumid = 'hindamiskriteeriumid-';
    let eesmargid = 'eesmargid-';
    let opivaljundid = 'opivaljundid-';
    let sisu = 'sisu-';
    let eeldused = 'eeldused-';
    let tingimused = 'tingimused-';

    if (id === 'inglise') {
        suffix = 'ik';
    }
    if (id === 'vene') {
        suffix = 'vk';
    }

    if (language.checked) {
        document.getElementById(hindamiskriteeriumid + suffix + th).style.display = '';
        document.getElementById(eesmargid + suffix + th).style.display = '';
        document.getElementById(opivaljundid + suffix + th).style.display = '';
        document.getElementById(sisu + suffix + th).style.display = '';
        document.getElementById(eeldused + suffix + th).style.display = '';
        document.getElementById(tingimused + suffix + th).style.display = '';
    } else {
        document.getElementById(hindamiskriteeriumid + suffix + th).style.display = 'none';
        document.getElementById(eesmargid + suffix + th).style.display = 'none';
        document.getElementById(opivaljundid + suffix + th).style.display = 'none';
        document.getElementById(sisu + suffix + th).style.display = 'none';
        document.getElementById(eeldused + suffix + th).style.display = 'none';
        document.getElementById(tingimused + suffix + th).style.display = 'none';
    }
}