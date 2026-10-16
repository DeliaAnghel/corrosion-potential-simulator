let metalPlasat = null;
let solutiePlasata = null;

function selectMetal(metal) {
  metalPlasat = metal;

  // Actualizeaza eticheta
  const label = document.getElementById("metal-label");
  label.textContent = `Metal selectat: ${metal}`;

  // Evidentiaza electrodul
  const electrod = document.getElementById("electrod-highlight");
  electrod.style.backgroundColor = "#C8DEDC";

  checkReady();
}

function checkReady() {
  solutiePlasata = document.getElementById("mediu").value;
  document.getElementById("simuleazaBtn").disabled = false;
}

function simuleaza() {
  const emInput = document.getElementById("em");
  const em = parseFloat(emInput.value);
  const errorBox = document.getElementById("errorMsg");

  // Resetare eroare vizuală și mesaj
  errorBox.textContent = "";
  emInput.classList.remove("input-error");

  if (!metalPlasat || !solutiePlasata) {
    errorBox.textContent = "⚠️ Selectează un metal și un mediu!";
    emInput.classList.add("input-error");
    return;
  }

  if (isNaN(em) || em <= 0) {
    errorBox.textContent = "⚠️ Introdu o valoare validă pentru E măsurat ( > 0)";
    emInput.classList.add("input-error");
    return;
  }

  const metale = {
    Fe: -0.44,
    Zn: -0.763,
    Al: -1.66,
    Mg: -2.37,
    Sn: -0.14,
    Ni: -0.25
  };
  const solutii = { acid: 0, neutru: 0.401, bazic: 0.401 };
  const epsilonRef = 0.266;

  const ecor = +(em + epsilonRef).toFixed(3);
  const etaA = +(ecor - metale[metalPlasat]).toFixed(3);
  const etaC = +(ecor - solutii[solutiePlasata]).toFixed(3);

  document.getElementById("epsilon_cor").innerText = `${ecor}`;
  document.getElementById("eta_a").innerText = `${etaA}`;
  document.getElementById("eta_c").innerText = `${etaC}`;

  const display = document.getElementById("displayEm");
  display.value = `${em.toFixed(2)}  `;
  display.classList.add("pulse");
  setTimeout(() => display.classList.remove("pulse"), 700);
}


function reseteaza() {
  // Resetare valoare E masurat și afișaj
  document.getElementById("em").value = "";
  document.getElementById("displayEm").value = "0.00  ";
  document.getElementById("epsilon_cor").innerText = "-";
  document.getElementById("eta_a").innerText = "-";
  document.getElementById("eta_c").innerText = "-";

  // Resetare eroare vizuală
  const emInput = document.getElementById("em");
  const errorBox = document.getElementById("errorMsg");
  emInput.classList.remove("input-error");
  errorBox.textContent = "";

  // Resetare selecții
  document.getElementById("mediu").value = "";
  document.getElementById("metal-label").textContent = "";
  metalPlasat = null;
  solutiePlasata = null;

  // Actualizeaza starea butonului dupa resetare
  checkReady();
}


