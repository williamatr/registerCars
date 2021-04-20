var btn_lista = document.getElementById("list");
var btn_add = document.getElementById("add");
var btn_example = document.getElementById("example");

var section_list = document.getElementById("section_list");
var section_add = document.getElementById("section_add");
var section_example = document.getElementById("section_example");

const modelos = ["Tesla", "Ford", "Dodge", "Renault"];
var modelos_tesla = ["Model 3", "Model S", " Model X"];
var modelos_ford = ["Mustang", "Explorer", "F-150"];
var modelos_dodge = ["Charger", "Challenger", "Durango"];
var modelos_renault = ["Alaskan", "Clio", "Fluence"];
var annos = [2020, 2019, 2018, 2017, 2016];
var placas = ["CFA240", "GHJ345", "SDE098", "WER215", "CAS055"];
var baseDatos = [];
var baseDatosBackup = [];

btn_lista.onclick = function () {
  section_list.style.display = "flex";
  section_add.style.display = "none";
  section_example.style.display = "none";
  mainList();
};
btn_add.onclick = function () {
  section_add.style.display = "flex";
  section_list.style.display = "none";
  section_example.style.display = "none";
};
btn_example.onclick = function () {
  section_example.style.display = "flex";
  section_add.style.display = "none";
  section_list.style.display = "none";
};

function autos_registro(marca, modelo, anno, placa) {
  this.marca = marca;
  this.modelo = modelo;
  this.anno = anno;
  this.placa = placa;
}

function backUp(){
    for(let i = 0 ; i < baseDatos.length ; i++){
        baseDatosBackup.push(baseDatos[i]);
    }
}

function manual() {
  this["nuevo_registro"] = new autos_registro(
    document.getElementById("inMarca").value,
    document.getElementById("inModelo").value,
    document.getElementById("inAnno").value,
    document.getElementById("inPlaca").value
  );
  baseDatos.push(this["nuevo_registro"]);
  document.getElementById("tabla_create").innerHTML +=
    "<td>" +
    this["nuevo_registro"].marca +
    "</td>" +
    "<td>" +
    this["nuevo_registro"].modelo +
    "</td>" +
    "<td>" +
    this["nuevo_registro"].anno +
    "</td>" +
    "<td>" +
    this["nuevo_registro"].placa +
    "</td>";
  backUp();
}

function mainList() {
  console.log(baseDatos);
  console.log(baseDatosBackup);
  console.log(baseDatos.length);
  for (let i = 0; i < baseDatos.length; i++) {
    document.getElementById("tabla_list").innerHTML +=
      "<td>" +
      baseDatos[i].marca +
      "</td>" +
      "<td>" +
      baseDatos[i].modelo +
      "</td>" +
      "<td>" +
      baseDatos[i].anno +
      "</td>" +
      "<td>" +
      baseDatos[i].placa +
      "</td>";
  }
  baseDatos = [];
}

function example() {
  var numero_registros = document.getElementById("numberCars").value;
  console.log(numero_registros);

  for (let i = 0; i < numero_registros; i++) {
    let random = Math.floor(Math.random() * 4);

    if (random == 0) {
      this["nuevo_registro"] = new autos_registro(
        modelos[random],
        modelos_tesla[Math.floor(Math.random() * 3)],
        annos[Math.floor(Math.random() * 4)],
        placas[Math.floor(Math.random() * 4)]
      );
      baseDatos.push(this["nuevo_registro"]);
      document.getElementById("tabla_example").innerHTML +=
        "<td>" +
        this["nuevo_registro"].marca +
        "</td>" +
        "<td>" +
        this["nuevo_registro"].modelo +
        "</td>" +
        "<td>" +
        this["nuevo_registro"].anno +
        "</td>" +
        "<td>" +
        this["nuevo_registro"].placa +
        "</td>";
    } else if (random == 1) {
      this["nuevo_registro"] = new autos_registro(
        modelos[random],
        modelos_ford[Math.floor(Math.random() * 3)],
        annos[Math.floor(Math.random() * 4)],
        placas[Math.floor(Math.random() * 4)]
      );
      baseDatos.push(this["nuevo_registro"]);
      document.getElementById("tabla_example").innerHTML +=
        "<td>" +
        this["nuevo_registro"].marca +
        "</td>" +
        "<td>" +
        this["nuevo_registro"].modelo +
        "</td>" +
        "<td>" +
        this["nuevo_registro"].anno +
        "</td>" +
        "<td>" +
        this["nuevo_registro"].placa +
        "</td>";
    } else if (random == 2) {
      this["nuevo_registro"] = new autos_registro(
        modelos[random],
        modelos_dodge[Math.floor(Math.random() * 3)],
        annos[Math.floor(Math.random() * 4)],
        placas[Math.floor(Math.random() * 4)]
      );
      baseDatos.push(this["nuevo_registro"]);
      document.getElementById("tabla_example").innerHTML +=
        "<td>" +
        this["nuevo_registro"].marca +
        "</td>" +
        "<td>" +
        this["nuevo_registro"].modelo +
        "</td>" +
        "<td>" +
        this["nuevo_registro"].anno +
        "</td>" +
        "<td>" +
        this["nuevo_registro"].placa +
        "</td>";
    } else {
      this["nuevo_registro"] = new autos_registro(
        modelos[random],
        modelos_renault[Math.floor(Math.random() * 3)],
        annos[Math.floor(Math.random() * 4)],
        placas[Math.floor(Math.random() * 4)]
      );
      baseDatos.push(this["nuevo_registro"]);
      document.getElementById("tabla_example").innerHTML +=
        "<td>" +
        this["nuevo_registro"].marca +
        "</td>" +
        "<td>" +
        this["nuevo_registro"].modelo +
        "</td>" +
        "<td>" +
        this["nuevo_registro"].anno +
        "</td>" +
        "<td>" +
        this["nuevo_registro"].placa +
        "</td>";
    }
  }
  backUp();
}