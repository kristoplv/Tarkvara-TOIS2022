function openTable(tableBtn_id) {
    let table_id = tableBtn_id.replace('Btn', '');
    let table = document.getElementById(table_id);
    let hide = table.style.display == 'none';

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

    let eap = Math.round((kontaktope + praktika + iseseisev) / 26);

    let result = document.getElementById('eap-result');
    result.innerText = eap;
}