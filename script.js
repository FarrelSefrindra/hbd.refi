function tampilkanUcapan() {
    const nama = document.getElementById('nama').value; // Mengambil nilai dari input nama
    const usia = document.getElementById('usia').value; // Mengambil nilai dari input usia
    const ucapanDiv = document.getElementById('ucapan'); // Mengambil elemen div untuk menampilkan ucapan

    // Memeriksa apakah nama dan usia telah diisi
    if (nama && usia) {
        // Validasi nama
        if (nama !== "Refitri Ramazuri") {
            ucapanDiv.innerHTML = "Nama yang diperbolehkan hanya 'Refitri Ramazuri'.";
            return;
        }

        // Validasi usia
        if (isNaN(usia) || usia <= 0) {
            ucapanDiv.innerHTML = "Usia harus berupa angka positif.";
            return;
        }

        // Menampilkan ucapan selamat ulang tahun yang personal
        ucapanDiv.innerHTML = `Selamat Ulang Tahun, <strong>${nama}</strong>! 🎉<br>
        Semoga di usia yang ke-<strong>${usia}</strong> ini, semua impianmu dapat terwujud 🤲.<br>
        Selamat ulang tahun ya 🥳 maaf saya tidak bisa ngasih kadonya langsung 🙏 paling saya titip sama kawan mu, Harapan saya semoga kamu menjadi lebih semangat 💪 lagi menjalani hidup ini, Saya tau ini masa masa yang berat utukmu menghadapi ujian snbt dan ujian akhir semester kelas 12, Di sini saya titip pesan untuk kamu jangan gampang menyerah tetap semangat kalau capek ya tinggal istirahat karena akan selalu ada orang yang selalu support kamu dari belakang, Doa aku semoga Refi makin pintar, makin semangat, makin lebih lucu lagi, makin mendapatkan energi positif setiap saat dan lolos untuk utbkanya Aamiin, sekian dari saya bila ada kata salah dari saya mohon di maafkan 🙏 Maklum lah manusia bukan Nabi boy dan semoga suka sama kadonya Happy Birthday 🎂🎉 <br>
        Jangan Lupa Sholatnya Di Jaga 🎂`;

        // Menambahkan gambar setelah ucapan
        const gambarContainer = document.createElement('div');
        gambarContainer.className = 'gambar-container'; // Menambahkan kelas untuk styling

        // Menambahkan gambar sesuai dengan nama
        const gambar1 = document.createElement('img');
        gambar1.src = 'image 1.jpeg'; // Ganti dengan path gambar Anda
        gambar1.alt = 'Gambar 1';

        const gambar2 = document.createElement('img');
        gambar2.src = 'image 2.jpeg'; // Ganti dengan path gambar Anda
        gambar2.alt = 'Gambar 2';

        const gambar3 = document.createElement('img');
        gambar3.src = 'image 3.jpeg'; // Ganti dengan path gambar Anda
        gambar3.alt = 'Gambar 3';

        // Menambahkan gambar ke dalam container
        gambarContainer.appendChild(gambar1);
        gambarContainer.appendChild(gambar2);
        gambarContainer.appendChild(gambar3);

        // Menambahkan container gambar ke dalam ucapanDiv
        ucapanDiv.appendChild(gambarContainer);

        // Reset input setelah mengirim ucapan
        document.getElementById('nama').value = '';
        document.getElementById('usia').value = '';
    } else {
        // Menampilkan pesan jika input tidak lengkap
        ucapanDiv.innerHTML = "Silakan masukkan nama dan usia.";
    }
}