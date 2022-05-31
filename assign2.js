// const main= document.querySelector("grid-container");
// let htmlString="";
// for (let i=0; i<8;i++)
// {
//     htmlString+=`<div class="grid-conatiner grid-item${i}"></div>`;

// }
// main.innerHTML = htmlString;
// function employee() {
// empdetails = [
//     {
//         "EmpDP": "Hi",
//         "EmpName" : "Anoosha",
//         "Designation" : "Software  Developer",
//         "Details" : "Working as a developer in Fibona labs."
//     }
// ]
// let empd=["hi","Anoosha","Software Developer","Working as a developer in Fibona Labs"]
// console.log("Call");

// let fstr=empd.join('\r\n');
// document.getElementsByClassName("empdet").innerHTML=  fstr;
// }
//  <script src="./cards.json">
// </script> 


$(document).ready(function(e){
    jsonObject.products.forEach((i)=>loadProducts(i));

});

$(document).ready(function(){
    $("details").hover(function(){
      $(this).css("background-color", "yellow");
      document.getElementById("content1").innerHTML="Hello";
      }, function(){
      $(this).css("background-color", "pink");
    });
  });


// function example(){
//     jsonObject.products.forEach((i)=>loadProducts(i));

// }
{/* <div class="grid-item grid-item-1">
                This workflow is to enable an employee <br> raise his leave request and get it approved <br>it from him reporting manager.
                <div class="bright">
                    <button class="btn btn2" >View Details</button> '<div class="hovertext">'+data.htext+ '<div class="hovertext">'+data.htext+
                </div>'<div class="hovergrid1">'+
               </div> */}

function loadProducts(data){

var data1 = document.createElement('div');
   data1.innerHTML =  '<div class="grid1">'+ '<div class="switchdis">'+
    '<div class="details"><img src="'+ data.image +'"class="det_img"></div>'+
    '<div class="subdet"><p class="subdet_p1">'+ data.title +'</p>'+
    '<span>'+ data.description +'</span>'+
    '<p class="subdet_p2">'+ data.content +'</p>'+
'</div>'+'</div>'+'<div class="hoverdis">'+data.htext+'</div>'+'</div>' ;
document.getElementById("content1").appendChild(data1);
// console.log(data1);
}
// example();
