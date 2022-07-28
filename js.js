
var i = 0;
$('#sube').click(function () {
    if (i < 25) {
        i++;
    } else if (i = i++) {
        i = 25;
    }

    document.getElementById("display").innerHTML = i;
    if (i >= 20) {
        document.body.style.color = 'green';
    }else if (i =>0 || i <20) {
        document.body.style.color = 'white';
    }
})
$('#baja').click(function () {

    if (i > -25) { --i; }
    document.getElementById("display").innerHTML = i;
    if (i < 0) {
        document.body.style.color = 'red';
    }else if (i =>0 || i <20) {
        document.body.style.color = 'white';
    }
})
