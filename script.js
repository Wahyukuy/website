function tampilkanDeskripsi(id) {
  const deskripsi = {
    produk1: "Produk 1 adalah sepatu olahraga ringan dan nyaman.",
    produk2: "Produk 2 adalah tas ransel anti air dengan banyak kompartemen."
    produk3: "Produk 2 adalah tas ransel anti air dengan banyak kompartemen."
  produk4: "Produk 2 adalah tas ransel anti air dengan banyak kompartemen."
  produk5: "Produk 2 adalah tas ransel anti air dengan banyak kompartemen."
  produk6: "Produk 2 adalah tas ransel anti air dengan banyak kompartemen."
  produk7: "Produk 2 adalah tas ransel anti air dengan banyak kompartemen."
  produk8: "Produk 2 adalah tas ransel anti air dengan banyak kompartemen."
  produk9: "Produk 2 adalah tas ransel anti air dengan banyak kompartemen."
  produk10: "Produk 2 adalah tas ransel anti air dengan banyak kompartemen."
  produk11: "Produk 2 adalah tas ransel anti air dengan banyak kompartemen."
  produk12: "Produk 2 adalah tas ransel anti air dengan banyak kompartemen."
  };
  document.getElementById("deskripsi-produk").innerText = deskripsi[id];
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
