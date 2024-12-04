let currentOperation = null;

// Fungsi untuk menyimpan operasi yang dipilih
function setOperation(operation) {
  currentOperation = operation;
  console.log("Operasi yang dipilih:", currentOperation);
}

function calculate() {
  // Ambil elemen dari Matriks A
  const a11 = parseInt(document.getElementById("a11").value) || 0;
  const a12 = parseInt(document.getElementById("a12").value) || 0;
  const a21 = parseInt(document.getElementById("a21").value) || 0;
  const a22 = parseInt(document.getElementById("a22").value) || 0;

  // Ambil elemen dari Matriks B
  const b11 = parseInt(document.getElementById("b11").value) || 0;
  const b12 = parseInt(document.getElementById("b12").value) || 0;
  const b21 = parseInt(document.getElementById("b21").value) || 0;
  const b22 = parseInt(document.getElementById("b22").value) || 0;

  let r11, r12, r21, r22;

  // Lakukan operasi berdasarkan operator yang dipilih
  if (currentOperation === "+") {
    r11 = a11 + b11;
    r12 = a12 + b12;
    r21 = a21 + b21;
    r22 = a22 + b22;
  } else if (currentOperation === "-") {
    r11 = a11 - b11;
    r12 = a12 - b12;
    r21 = a21 - b21;
    r22 = a22 - b22;
  } else if (currentOperation === "x") {
    r11 = a11 * b11 + a12 * b21;
    r12 = a11 * b12 + a12 * b22;
    r21 = a21 * b11 + a22 * b21;
    r22 = a21 * b12 + a22 * b22;
  } else {
    alert("Silakan pilih operasi terlebih dahulu!");
    return;
  }

  // Tampilkan hasil
  document.getElementById("r11").value = r11;
  document.getElementById("r12").value = r12;
  document.getElementById("r21").value = r21;
  document.getElementById("r22").value = r22;
}