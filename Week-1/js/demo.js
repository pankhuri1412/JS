function openMe() {
   x = document.getElementById("demo");
   //Option1:Change the style attribute directly
//    x.style.display="block";

  //Option2:Change the class
   x.className="open";
}

function closeMe() {
   y = document.getElementById("demo");
   //Option1:Change the style attribute directly
//    y.style.display="none";

   //Option2:Change the class
   y.className="close";
}
