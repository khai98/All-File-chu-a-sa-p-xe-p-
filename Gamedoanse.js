function Choi() {
    var a = parseInt(prompt(" NHAP VAO SO BAN MUON DOAN TRONG KHOANG NAO DI "));
    var b = parseInt(prompt(" NHAP VAO SO BAN MUON DOAN TRONG KHOANG TIEP  DI NAO "));
    var d = Math.floor(Math.random() * (b - a) + a);
    var c = parseInt(prompt(" NHAP SO BAN MUON DOAN "));

    if (c == d) {
        alert(" BAN DOAN DUNG")
    } else {
        for (var i = 0; i <= 3; i++) {
            g = parseInt(prompt(" NHAP SO BAN MUON DOAN "));
            if (g == d) {
                alert(" BAN DOAN dung");
                break;
            } else {
                alert("BAN SAI ROI");
            }
        }
    }
}
