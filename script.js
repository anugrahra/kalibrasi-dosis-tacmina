function hitung() {
  // get numbers
  let konsentrasi = document.getElementById("konsentrasi").value;
  let stroke = document.getElementById("stroke").value;
  let volume = document.getElementById("volume").value;
  let waktu = document.getElementById("waktu").value;
  let debitIPA = document.getElementById("debitIPA").value;
  let dosisRange = document.getElementById("dosisRange");

  //hitung qmax
  let qmaxdetik = volume / stroke / waktu;
  let qmax = qmaxdetik * 60 * 8;

  //hitung dosis
  let dosis = ((konsentrasi * 10000) / (debitIPA * 1000)) * qmaxdetik;

  // show hasil hitung
  document.getElementById("qmax").innerHTML = parseFloat(qmax);
  document.getElementById("getstroke").innerHTML = parseFloat(stroke);
  document.getElementById("getwaktu").innerHTML = parseFloat(waktu);
  document.getElementById("getvolume").innerHTML = parseFloat(volume);
  document.getElementById("getqmaxdetik").innerHTML = parseFloat(qmaxdetik);

  let strokePompa = [];
  for (s = 0; s <= 8; s += 0.1) {
    strokePompa.push(s.toFixed(1));
    console.log(s[strokePompa]);
  }

  let text = "";
  for (let i = 0; i < strokePompa.length; i++) {
    text +=
      "<tr><td>" +
      strokePompa[i] +
      "</td><td>" +
      (strokePompa[i] * dosis).toFixed(2) +
      "</td></tr>";
  }

  dosisRange.innerHTML = text;
}
