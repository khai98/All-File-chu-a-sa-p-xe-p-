function Xbang() {
       var  A = parseInt(document.getElementById('numBerA').value);
       var  B = parseInt(document.getElementById('numBerB').value);
       var  X;

       if ( A == 0 ){
             alert('PT VO NGHIEM');
       }else if ( B != 0 ){
             X = -B /A ;
             alert("dap an la" + X);

       }


}