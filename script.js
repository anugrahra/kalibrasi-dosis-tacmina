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
	document.getElementById("qmax").innerHTML = "Qmax Pompa = " + qmax.toFixed(2) + " ml/detik";
  document.getElementById("dosis").innerHTML = "Dosis Stroke 1 = " + dosis.toFixed(2) + " mg/l";

  let strokePompa = [];
  for (s = 0; s <= 8; s+=0.1) {
    strokePompa.push(s.toFixed(1));
    console.log(s[strokePompa]);
  }

  let text = "";
  for (let i = 0; i < strokePompa.length; i++) {
    text += "<tr><td>" + strokePompa[i] + "</td><td>" + (strokePompa[i] * dosis).toFixed(2) + "</td></tr>";
  }

  dosisRange.innerHTML = text;
}

function exportData(){
  /* Get the HTML data using Element by Id */
  let table = document.getElementById("tableDosis");

  /* Declaring array variable */
  let rows =[];

    //iterate through rows of table
  for(let i=0,row; row = table.rows[i];i++){
      //rows would be accessed using the "row" variable assigned in the for loop
      //Get each cell value/column from the row
      column1 = row.cells[0].innerText;
      column2 = row.cells[1].innerText;

  /* add a new records in the array */
      rows.push(
          [
              column1,
              column2
          ]
      );

      }
      csvContent = "data:text/csv;charset=utf-8,";
       /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
      rows.forEach(function(rowArray){
          row = rowArray.join(",");
          csvContent += row + "\r\n";
      });

      /* create a hidden <a> DOM node and set its download attribute */
      let encodedUri = encodeURI(csvContent);
      let link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "table_stroke_dosis.csv");
      document.body.appendChild(link);
       /* download the data file named "Stock_Price_Report.csv" */
      link.click();
}

function printData()
{
   let divToPrint = document.getElementById("printTable");
   newWin= window.open("");
   newWin.document.write(divToPrint.outerHTML);
   newWin.print();
   newWin.close();
}