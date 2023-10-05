document.getElementById("hitung").addEventListener("click", function () {
    let berat = parseFloat(document.getElementById("berat").value);
    let tinggi = parseFloat(document.getElementById("tinggi").value) / 100;

    if (!isNaN(berat) && !isNaN(tinggi) && tinggi > 0) {
        let bmi = berat / (tinggi * tinggi);
        let status = "";

        if (bmi < 18.5) {
            status = "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            status = "Normal weight";
        } else if (bmi >= 25 && bmi <= 29.9) {
            status = "Overweight";
        } else {
            status = "Obesity";
        }

        document.getElementById("hasil").innerHTML = "Your BMI is" + bmi.toFixed(2) + ", which means you are " + status;
    } else {
        alert("Masukkan berat dan tinggi badan yang valid.");
    }
});