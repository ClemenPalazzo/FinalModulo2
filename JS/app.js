function openForm(){
    document.getElementById("myForm").style.display = "block";
}

function closeForm(){
   document.getElementById("myForm").style.display = "none";
}

function openAccordion1() {
  document.getElementById("myAccordion1").style.display = "block";
   document.getElementById("myAccordion2").style.display = "none";
}
function openAccordion2() {
  document.getElementById("myAccordion2").style.display = "block";
  document.getElementById("myAccordion1").style.display = "none";
}


