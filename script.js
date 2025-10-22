function tampilkanDeskripsi(id) {
  const deskripsi = {
    produk1: "buku tulis Rp4.500",
    produk2: "Buku Gambar Rp8.000",
    produk3: "Pensil Rp1.500",
    produk4: "Bolpoint Rp3.000",
    produk5: "Tipe-X Rp5.000",
    produk6: "AQUA Rp3.000",
    produk7: "Kolong Hasduk Rp4.000",
    produk8: "Dasi Rp15.000",
    produk9: "Kertas Folio per biji Rp1.500",
    produk10: "Hasduk Rp7.000",
    produk11: "Topi sekolah Rp23.000",
    produk12: "Penghapus Rp2.000"
  };

  const output = document.getElementById("deskripsi-produk");
  output.innerText = deskripsi[id] || "Deskripsi produk tidak ditemukan.";
}

function kirimForum() {
  const teks = document.querySelector("textarea").value;
  if (teks.trim() !== "") {
    const ul = document.getElementById("daftar-forum");
    const li = document.createElement("li");
    li.textContent = teks;
    ul.appendChild(li);
    document.querySelector("textarea").value = "";
  }
}
