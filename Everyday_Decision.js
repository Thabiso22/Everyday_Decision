var handlebarsTemp=document.getElementById("handlebarsTemp");
var tempComp = Handlebars.compile(handlebarsTemp.innerHTML);
var display = document.getElementById('display');


var myOb1= [
{que1:"1.What would you do if you came across an accident and people are critically injured?"},
{opt1:"Call the police."},
{opt2:"Call for medical help."},
{opt3:"Take out your phone take a photo and update your facebook status."},
{opt4:"Take the victims wallets and phones."},
{opt5:"Walk away as if you saw nothing"}
];


var myOb2=[{que1:"2.What is your nationality?"},
           {opt1:"Nigerian."},
           {opt2:"South African."},
           {opt3:"Jamaican."},
           {opt4:"American."},
           {opt5:"Mexican."}
];

var myOb3=[
           {que1:"3.Type of car are you driving?"},
           {opt1:"Audi."},
           {opt2:"Golf."},
           {opt3:"Cresida."},
           {opt4:"Renault."},
           {opt5:"Mercedes-Benz."}
];

var myOb4=[
           {que1:"4.What is your highest qualification?"},
           {opt1:"Grade 8."},
           {opt2:"Grade 12."},
           {opt3:"Diploma."},
           {opt4:"Degree."},
           {opt5:"Honours."}
];

var myOb5=[
           {que1:"5.When were you born?"},
           {opt1:"1980-1990"},
           {opt2:"1991-1993"},
           {opt3:"1994-1996"},
           {opt4:"1997-2000"},
           {opt5:"2001-2010"}
];

 var done=[
            {que1:"Well Done You Succesfully Completed!"}
 ];


(function() {
    var view = tempComp({
        quest:myOb1

    });
    display.innerHTML = view;
})();

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












//First trial of previous and next buttons starts here.

//var Prevbutton = document.getElementById('Prevbutton');
//var Nextbutton= document.getElementById('Nextbutton');

// Prevbutton.addEventListener("click",function(){
//   (function() {
//       var view = tempComp({
//           quest:myOb
//
//       });
//       display.innerHTML = view;
//   })();
// })
//
//
//
// Nextbutton.addEventListener("click", function(){
//   (function() {
//       var view = tempComp({
//           quest:myOb1
//
//
//       });
//       display.innerHTML = view;
//   })();
//First trial of previous and next buttons ends here.
//})
