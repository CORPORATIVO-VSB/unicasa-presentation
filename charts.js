
document.addEventListener("DOMContentLoaded",()=>{

const ctx1=document.getElementById('marketChart');
new Chart(ctx1,{
type:'pie',
data:{
labels:[
'Casa Brasileira – 45% (Segmento económico)',
'New – 40% (Segmento medio)',
'DellAnno – 15% (Segmento premium)'
],
datasets:[{
data:[45,40,15],
backgroundColor:['#c59a6b','#888','#333']
}]
},
options:{plugins:{legend:{labels:{color:'white'}}}}
});

const ctx2=document.getElementById('salesChart');
new Chart(ctx2,{
type:'bar',
data:{
labels:['Casa Brasileira','New','DellAnno'],
datasets:[{
label:'Distribución de ventas (%)',
data:[40,35,25],
backgroundColor:'#c59a6b'
}]
},
options:{
plugins:{legend:{labels:{color:'white'}}},
scales:{
x:{ticks:{color:'white'}},
y:{ticks:{color:'white'}}
}
}
});

const ctx3=document.getElementById('costChart');
new Chart(ctx3,{
type:'pie',
data:{
labels:[
'Producto 58%',
'Flete 7%',
'Seguro 2%',
'Aranceles 8%',
'Logística 5%',
'Administración 5%',
'Margen 15%'
],
datasets:[{
data:[58,7,2,8,5,5,15],
backgroundColor:['#c59a6b','#777','#999','#444','#555','#666','#222']
}]
},
options:{plugins:{legend:{labels:{color:'white'}}}}
});

});
