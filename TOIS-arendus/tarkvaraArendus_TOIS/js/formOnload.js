window.onload = function(){

    /*checkLoginStatus();*/

    /*authAccess();*/

    /* ISCED */
    let valdkond = document.querySelector('#oppevaldkond');
    let suund = document.querySelector('#oppesuund');
    let ruhm = document.querySelector('#oppekava-ruhm');

    for (var x in valikud) {
        console.log("Tootab");
        valdkond.options[valdkond.options.length] = new Option(x, x);
      }
      valdkond.onchange = function() {
        
        //empty Chapters- and Topics- dropdowns
        suund.length = 1;
        ruhm.length = 1;
        //display correct values
        for (var y in valikud[this.value]) {
          suund.options[suund.options.length] = new Option(y, y);
        }
      }
      suund.onchange = function() {
        //empty Chapters dropdown
        ruhm.length = 1;
        //display correct values
        var z = valikud[valdkond.value][this.value];
        for (var i = 0; i < z.length; i++) {
          ruhm.options[ruhm.options.length] = new Option(z[i], z[i]);
        }
    }

    /* Nupud, väljad enabled/disabled, colspan */
    document.querySelector('#downloadTxt').addEventListener('click', downloadFormTxt);
    document.querySelector('#downloadPdf').addEventListener('click', generatePdf);
    document.querySelector('#kontaktope').addEventListener('change', function() {
        if (this.checked) {
            document.querySelector('#kontaktope-h').disabled = false;
        } else {
            document.querySelector('#kontaktope-h').disabled = true;
        }
    });
    document.querySelector('#praktika').addEventListener('change', function() {
        if (this.checked) {
            document.querySelector('#praktika-h').disabled = false;
        } else {
            document.querySelector('#praktika-h').disabled = true;
        }
    });
    document.querySelector('#iseseisev-ope').addEventListener('change', function() {
        if (this.checked) {
            document.querySelector('#iseseisev-ope-h').disabled = false;
        } else {
            document.querySelector('#iseseisev-ope-h').disabled = true;
        }
    });
    document.querySelector('#muu-oppeviis').addEventListener('change', function() {
        if (this.checked) {
            document.querySelector('#muu-ope-h').disabled = false;
            document.querySelector('#muu-oppeviisi-nimetus').disabled = false;
        } else {
            document.querySelector('#muu-ope-h').disabled = true;
            document.querySelector('#muu-oppeviisi-nimetus').disabled = true;
        }
    });
    document.querySelector('#muu-oppetookeel').addEventListener('change', function() {
        if (this.checked) {
            document.querySelector('#muu-oppetookeele-nimetus').disabled = false;
        } else {
            document.querySelector('#muu-oppetookeele-nimetus').disabled = true;
        }
    });
    document.querySelector('#inglise').addEventListener('change', function() {
        if (this.checked) {
            document.querySelector('#kontrollivorm-colspan').colSpan += 1;
        } else {
            if (document.querySelector('#kontrollivorm-colspan').colSpan != 1) {
                document.querySelector('#kontrollivorm-colspan').colSpan -= 1
            }
        }
    });
    document.querySelector('#vene').addEventListener('change', function() {
        if (this.checked) {
            document.querySelector('#kontrollivorm-colspan').colSpan += 1;
        } else {
            if (document.querySelector('#kontrollivorm-colspan').colSpan != 1) {
                document.querySelector('#kontrollivorm-colspan').colSpan -= 1
            }
        }
    });
    document.querySelector('#on-korraldaja').addEventListener('change', function() {
        if (this.checked) {
            document.querySelector('#pole-korraldaja-norm').checked = true;
        }
    });
    document.querySelector('#on-korraldaja-norm').addEventListener('change', function() {
        if (this.checked) {
            document.querySelector('#pole-korraldaja').checked = true;
        }
    });
}

document.body.addEventListener('change', function() {
    sleep(2000).then(() => {
    sendValues();
    console.log('saatsime');
    });
});