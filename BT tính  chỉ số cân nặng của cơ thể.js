var bmi, weight, height2;

function tinhchieucao() {
    weight = document.getElementById('weight').value;
    height2 = document.getElementById('height2').value;
    bmi = weight / (height2 ^ 2);
    // alert(bmi);

    if (bmi < 18) {

        document.getElementById('ketqua').innerHTML = 'Underweight';

    } else if (bmi < 25.0) {

        document.getElementById('ketqua').innerHTML = 'Normal';

    } else if (bmi < 30.0) {

        document.getElementById('ketqua').innerHTML = 'Overweight';

    } else {

        document.getElementById('ketqua').innerHTML = 'Obese';

    }

}

