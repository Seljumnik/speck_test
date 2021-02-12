let brojacElement = document.querySelector('.brojac');
let isprazniListu = document.querySelector('.btn_brisanje');
let dodajListu = document.querySelector('.btn-dodaj');
let nova_stavka = document.getElementById('nova_stavka');
let lista = document.getElementById("lista");

let count = 0;

var stavke_u_kosarici = [];

updateDisplay();

dodajListu.addEventListener("click", () => {
  if (nova_stavka.value != "") {
    stavke_u_kosarici.push(nova_stavka.value);
    nova_stavka.value = "";
    count++;
    updateDisplay();
  }
});

isprazniListu.addEventListener("click", () => {
  if (confirm("Are you crazy? You entered all that stuff just to delete it? Speck will remember this.")) {
    stavke_u_kosarici = [];
    count = 0;
    updateDisplay();
  }
});

function updateDisplay() {
  var tableHTML = "<tr>";
    tableHTML += "<th>" + "Entered products" + "</th>";
  tableHTML += "</tr>";

  for (var eachItem in stavke_u_kosarici) {
    tableHTML += "<tr>";
    var dataObj = stavke_u_kosarici[eachItem];
    tableHTML += "<td>" + dataObj + "</td>";
    tableHTML += "</tr>";
  }
  lista.innerHTML = tableHTML;
  brojacElement.innerHTML = 'Number of products: ' + count;
};
