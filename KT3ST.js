function KT() {
    var a = parseInt(document.getElementById('A').value);
    var b = parseInt(document.getElementById('B').value);
    var c = parseInt(document.getElementById('C').value);
    if (a > 0 && b > 0 && c > 0) {
        alert('so ban nhap la mot canh cua tam giac');

    } else if (a + b > c) {
        alert('so ban nhap la mot canh cua tam giac');

    } else if (b + c > a) {
        alert('so ban nhap la mot canh cua tam giac');
    } else if (a + c > b) {
        alert('so ban nhap la mot canh cua tam giac');
    } else if (a < 0 && b < 0 && c < 0) {
        alert('so ban nhap khong phai la mot canh cua tam giac');
    }


}


