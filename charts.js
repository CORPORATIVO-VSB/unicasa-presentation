document.addEventListener("DOMContentLoaded", function () {

new Chart(document.getElementById("graficoMercado"), {

type: "pie",

data: {

labels: [
"Casa Brasileira 45%",
"New 40%",
"DellAnno 15%"
],

datasets: [{
data: [45,40,15],
backgroundColor: ["#c89b5a","#777","#333"]
}]

}

});


new Chart(document.getElementById("graficoVentas"), {

type: "bar",

data: {

labels: ["Casa Brasileira","New","DellAnno"],

datasets: [{
label:"Distribución de ventas %",
data:[40,35,25],
backgroundColor:"#c89b5a"
}]

}

});


new Chart(document.getElementById("graficoCostos"), {

type:"pie",

data:{

labels:[
"Producto 58%",
"Flete 7%",
"Seguro 2%",
"Aranceles 8%",
"Logística 5%",
"Administración 5%",
"Margen 15%"
],

datasets:[{
data:[58,7,2,8,5,5,15],
backgroundColor:[
"#c89b5a",
"#999",
"#777",
"#444",
"#555",
"#666",
"#222"
]
}]

}

});

});
