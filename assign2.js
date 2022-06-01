
$(document).ready(function(e){
    jsonObject.products.forEach((i)=>loadProducts(i));

});



function loadProducts(data){

var data1 = document.createElement('div');
   data1.innerHTML =  '<div class="grid1">'+ '<div class="switchdis">'+
    '<div class="details"><img src="'+ data.image +'"class="det_img"></div>'+
    '<div class="subdet"><p class="subdet_p1">'+ data.title +'</p>'+
    '<span>'+ data.description +'</span>'+
    '<p class="subdet_p2">'+ data.content +'</p>'+
'</div>'+'</div>'+'<div class="hoverdis">'+data.content+'<div class="bright">'+
'<button class="btn btn2">'+data.view+'</button>'+'</div>'+'</div>'+'</div>' ;
document.getElementById("content1").appendChild(data1);
// console.log(data1);
}
// example();
