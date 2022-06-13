window.onload = function() {
    let courseCreationDate = document.querySelector('#courseCreationDate');
    let date = new Date();
    let currentDate = date.toLocaleDateString('et', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    courseCreationDate.innerHTML = "Kuupäev: " + currentDate;

    document.querySelector('#generateCourseLink').addEventListener('click', generateLink);
}

function dec2hex(dec) {
    return dec.toString(16).padStart(2, '0');
}

function generateId(len) {
    let arr = new Uint8Array((len || 40) / 2);

    (window.crypto || window.msCrypto).getRandomValues(arr);

    return Array.from(arr, dec2hex).join('');
}

function generateLink() {
    let linkId = generateId(30);
    let date = new Date();
    date.toISOString();

    let courseCreator = document.querySelector('#courseCreator').value;
    let courseFiller = document.querySelector('#courseFiller').value;
    let buttonId = document.querySelector('#generateCourseLink');
    let courseLink = document.querySelector('#courseLink');
    
    buttonId.style.display = 'none';
    courseLink.innerHTML = '<a class="linkBtn" id="linkBtn" href="form.html?id=' + linkId + '">Link uue õppekava täitmiseks</a>';
    courseLink.innerHTML += '<img id="copyLink" src="images/link.png" alt="Kopeeri" title="Kopeeri" onclick="copyLink()">';

    let newFormHashmap = new Map([
        ['id', linkId],
        // firebase klappivus?
        ['date', date],
        ['courseCreator', courseCreator],
        ['courseFiller', courseFiller]
    ]);
    console.log(newFormHashmap);
}

function copyLink() {
    let link = document.querySelector('#linkBtn').href;
    navigator.clipboard.writeText(link);
}