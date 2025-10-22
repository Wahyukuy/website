function tampilkanDeskripsi(id) {
  const deskripsi = {
    produk1: "Produk 1 adalah sepatu olahraga ringan dan nyaman.",
    produk2: "Produk 2 adalah tas ransel anti air dengan banyak kompartemen.",
    produk3: "Produk 3 adalah jam tangan pintar dengan fitur kesehatan.",
    produk4: "Produk 4 adalah kacamata stylish dengan perlindungan UV.",
    produk5: "Produk 5 adalah headphone bluetooth dengan suara jernih dan baterai tahan lama.",
    produk6: "Produk 6 adalah powerbank 20.000mAh dengan pengisian cepat.",
    produk7: "Produk 7 adalah keyboard mekanik RGB untuk pengalaman mengetik maksimal.",
    produk8: "Produk 8 adalah mouse wireless ergonomis dengan sensitivitas tinggi.",
    produk9: "Produk 9 adalah botol minum termal yang menjaga suhu hingga 12 jam.",
    produk10: "Produk 10 adalah lampu LED dekoratif untuk suasana kamar yang cozy.",
    produk11: "Produk 11 adalah flashdisk 64GB dengan kecepatan transfer tinggi.",
    produk12: "Produk 12 adalah buku catatan hardcover dengan desain elegan."
  };

  const output = document.getElementById("deskripsi-produk");
  if (deskripsi[id]) {
    output.innerText = deskripsi[id];
  } else {
    output.innerText = "Deskripsi produk tidak ditemukan.";
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
