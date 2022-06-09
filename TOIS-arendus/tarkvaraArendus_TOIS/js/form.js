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

$('input').keyup(function() {
    let kontaktope = Number($('#kontaktope-h').val());
    let praktika = Number($('#praktika-h').val());
    let iseseisev = Number($('#iseseisev-ope-h').val());

    $('#eap-result').html(Math.round((kontaktope + praktika + iseseisev) / 26));
});