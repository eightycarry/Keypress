$(document).ready(function(){
   $("#textBoxOne").change(textboxHeardChange);
   $("#textBoxTwo").keypress(textboxHeardKeypress);

   function textboxHeardChange(){
      //generate random number
      var randomNumber = Math.random();
      //put random number in paragraph
      $("p").text(randomNumber)
   }

   function textboxHeardKeypress(event){
      //find out which key was pressed
      var character = event.key;
      //put that key in paragraph
      $("p").text(character);
   }
});