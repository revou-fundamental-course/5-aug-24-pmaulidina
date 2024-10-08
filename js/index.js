//Menggunakan inputan jenis kelamin, berat, tinggi, dan umur
function bmi() {
    const gender = document.querySelector('input[name="jenis-kelamin"]:checked');
    const berat = document.getElementById("berat").value;
    const tinggi = document.getElementById("tinggi").value;
    const umur = document.getElementById("umur").value;

    // Memeriksa inputan, jika form tidak terisi code akan menampilkan peringatan dan hentikan fungsi
    if (!gender || !berat || !tinggi || !umur) {
        alert("Harap isi semua kolom!");
        return;
    }

    // Mengonversi nilai berat dan tinggi menjadi float
    const beratFloat = parseFloat(berat);
    const tinggiFloat = parseFloat(tinggi);

    // Memeriksa nilai berat & tinggi <= 0, jika ya, akan menampilkan peringatan dan menghentikan fungsi
    if (beratFloat <= 0 || tinggiFloat <= 0) {
        alert("Masukkan angka yang valid!");
        return;
    }

    // Menghitung BMI
    const count = beratFloat / ((tinggiFloat / 100) * (tinggiFloat / 100));
    let BMIresult = '';

    if (count < 18.5) {
        BMIresult = "Berat badan anda kurang dibandingkan dengan tinggi yang anda miliki. Hal yang dapat dilakukan untuk mendapatkan berat badan ideal adalah menambah kalori yang masuk dengan gizi seimbang serta rutin olahraga untuk mendapatkan bentuk badan yang ideal. Workout yang dapat dilakukan adalah weight lifting untuk membentuk otot tubuh.";
    } else if (count >= 18.5 && count <= 24.9) {
        BMIresult = "Berat badan anda ideal. Pertahankan berat badan anda. Cukupi asupan makan dengan gizi seimbang, mencukupi kebutuhan mineral dalam tubuh, dan berolahraga untuk menghasilkan tone dan core yang kencang.";
    } else if (count >= 25.0 && count <= 29.9) {
        BMIresult = "Berat badan anda berlebih. Kurangi kalori harian anda atau tingkatkan akivitas. Kontrol kalori yang masuk dan rutin berolahraga dapat mengurangi lemak dalam tubuh.";
    } else if (count >= 30.0) {
        BMIresult = "Berat badan anda berada dalam kategori obesitas.";
    }

    //Menampilkan hasil BMI dan deskripsi
    document.getElementById('BMIvalue').textContent = `${count.toFixed(2)}`;
    document.getElementById('BMIresult').textContent = BMIresult;
}

//Code untuk mereset tampilan
function resetForm() {
    document.getElementById("bmiForm").reset();
    document.getElementById("BMIvalue").textContent = '';
    document.getElementById('BMIresult').textContent = '';
}