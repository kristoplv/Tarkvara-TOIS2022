function openTable1() {
    let table = document.getElementById('table1');
    let hide = table.style.display == 'none';

    if (hide) {
        table.style.display = 'table';
    } else {
        table.style.display = 'none';
    }
}

function openTable2() {
    let table = document.getElementById('table2');
    let hide = table.style.display == 'none';

    if (hide) {
        table.style.display = 'table';
    } else {
        table.style.display = 'none';
    }
}

function openTable3() {
    let table = document.getElementById('table3');
    let hide = table.style.display == 'none';

    if (hide) {
        table.style.display = 'table';
    } else {
        table.style.display = 'none';
    }
}

function openTable4() {
    let table = document.getElementById('table4');
    let hide = table.style.display == 'none';

    if (hide) {
        table.style.display = 'table';
    } else {
        table.style.display = 'none';
    }
}

function calculateEAP() {
    let kontaktope = parseInt(document.getElementById('kontaktope-h').value);
    let praktika = parseInt(document.getElementById('praktika-h').value);
    let iseseisev = parseInt(document.getElementById('iseseisev-ope-h').value);

    let eap = (kontaktope + praktika + iseseisev) / 26;

    let result = document.getElementById('eap-result');
    result.innerText = eap;
}