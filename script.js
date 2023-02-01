let lagi = true;
while (lagi) {
  let angka = Math.floor(Math.random() * 3) + 1;

  let pr1 = prompt("Angka Pilihan Player 1");
  let pr2 = prompt("Angka Pilihan Player 2");

  let hasil = "";

  if (pr1 == angka) {
    hasil = "Player 1 Menang";
  } else if (pr2 == angka) {
    hasil = "Player 2 Menang";
  } else {
    hasil = "SERI!!!";
  }
  alert("Player 1 Menjawab : " + pr1 + " Player 2 Menjawab : " + pr2 + " Jawabannya adalah : " + angka + hasil);
  lagi = confirm("Again?");
}
alert("Terimakasih sudah bermain");
