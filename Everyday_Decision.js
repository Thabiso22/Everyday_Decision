var disp1 = document.getElementById("disp1");
var storage= localStorage.getItem("count");
var handlebarsTemp=document.getElementById("handlebarsTemp");
var tempComp = Handlebars.compile(handlebarsTemp.innerHTML);
var display = document.getElementById('display');




var myOb1= [
{que1:"1.What would you do if you came across an accident and people are critically injured?"},
{opt1:"Call the police."},
{opt2:"Contact medical help."},
{opt3:"Take out your phone take a photo and update your facebook status."},
{opt4:"keep the victims wallets and phones."},
{opt5:"Walk away as if you saw nothing"}
];


var myOb2=[{que1:"2.What would you like to study in future?"},
           {opt1:"Commerce."},
           {opt2:"Biblical Studies."},
           {opt3:"Information Technology."},
           {opt4:"Accounting."},
           {opt5:"Physical Science."}
];

var myOb3=[
           {que1:"3.Which television icon do you like?"},
           {opt1:"Vin Diesel."},
           {opt2:"Jessica Alba."},
           {opt3:"Jammie Foxx."},
           {opt4:"Eddie Murphy."},
           {opt5:"Denzel Washington."}
];

var myOb4=[
           {que1:"4.What type of movie do you like"},
           {opt1:"Action."},
           {opt2:"Romance."},
           {opt3:"Drama."},
           {opt4:"Comedy."},
           {opt5:"Triller."}
];

var myOb5=[
           {que1:"5.What is your dream job?"},
           {opt1:"Librarian"},
           {opt5:"Cleaner"},
           {opt2:"Technician"},
           {opt3:"Policeman"},
           {opt4:"Nurse"}
];

 var done=[
            {que1:"Well Done You Succesfully Completed!"}



];



// (function() {
//     var view = tempComp({
//         quest:myOb1
//
//     });
//     display.innerHTML = view;
// })();

var button1=document.getElementById('button1');
var button2=document.getElementById('button2');
var button3=document.getElementById('button3');
var button4=document.getElementById('button4');
var button5=document.getElementById('button5');

button1.addEventListener("click",function(){
  (function() {
      var view = tempComp({
          quest:myOb1

      });
      display.innerHTML = view;

  })();




})

button2.addEventListener("click",function(){
  (function() {
      var view = tempComp({
          quest:myOb2

      });
      display.innerHTML = view;

  })();




})

button3.addEventListener("click",function(){
  (function() {
      var view = tempComp({
          quest:myOb3

      });
      display.innerHTML = view;
  })();
})

button4.addEventListener("click",function(){
  (function() {
      var view = tempComp({
          quest:myOb4

      });
      display.innerHTML = view;
  })();
})



button5.addEventListener("click",function(){
  (function() {
      var view = tempComp({
          quest:myOb5

      });
      display.innerHTML = view;
  })();
})

var subButt= document.getElementById('subButt');


subButt.addEventListener("click",function(){
  (function() {
      var view = tempComp({
          quest:done

      });
      display.innerHTML = view;
  })();
})

var myRadios=document.getElementById("myRadios");
var radioButt1= document.getElementById('radioButt1');
var radioButt2= document.getElementById('radioButt2');
var radioButt3= document.getElementById('radioButt3');
var radioButt4= document.getElementById('radioButt4');
var radioButt5= document.getElementById('radioButt5');
var myRadios=document.getElementsByName("foo");
var seconds=document.getElementById('seconds');
var store=[[0],[1]];

var disp2=document.getElementById("disp2");
var disp3=document.getElementById("disp3");
var disp4=document.getElementById("disp4");
var disp5=document.getElementById("disp5");


addEventListener("change",function(){
//for (var i = 0; i < myRadios.length; i++) {
  if(myRadios[0].checked) {
 //store.push(myRadios[0].id);
 seconds.innerHTML="Button1 clicked";
 //storage=seconds.innerHTML;
  }
  if(myRadios[1].checked) {
 store.push(myRadios[1].id);
 disp2.innerHTML="Button2 clicked";
 //storage=disp2.innerHTML;
  }
  else if(myRadios[2].checked) {
 store.push(myRadios[2].id);
 disp3.innerHTML="Button3 clicked";
 //storage=disp3.innerHTML;
  }
  else if(myRadios[3].checked) {
 store.push(myRadios[3].id);
 disp4.innerHTML="Button4 clicked";
 //storage=disp4.innerHTML;
  }
  else if(myRadios[4].checked) {
 store.push(myRadios[4].id);
 disp5.innerHTML="Button 5 clicked";
 //storage=disp5.innerHTML;
  }






  var test = [myOb1,myOb2,myOb3,myOb4,myOb5];
  for (var i=0;i<test.length;i++) {
  if(test[i]===myOb1){



  for(var i=0;i<myOb1.length;i++){

    if (myRadios[1].checked){
      document.body.style.background="green";
    }

     else if (!myRadios[1].checked) {
  document.body.style.background="red";
    }

  }
  }
  }


})
