// Get the modal
var modal = document.getElementById("myModal");
var modal_form = document.getElementById("myModal-form");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn_form = document.getElementById("myBtn-form");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span_form= document.getElementsByClassName("close-form")[0];
// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

btn_form.onclick = function() {
  modal_form.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span_form.onclick = function() {
  modal_form.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
window.addEventListener('click', function(event) {
  if (event.target == modal_form) {
    modal_form.style.display = "none";
  }
});
setTimeout(function(){
    $('.loading-spinner').css('display', 'none');
}, 3000); // it will remove after 5 seconds
document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    //Remove loader class from div
      $('.loading-spinner').css('display', 'none');
  }
}
// var full=false;
//
// function fill(){
//   full=!full;
//   document.getElementById("logocontainer").style.backgroundColor=full?"#3ebffa":"transparent";
// }

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


window.addEventListener("DOMContentLoaded", function() {

   // get the form elements defined in your form HTML above

   var form = document.getElementById("my-form");
   // var button = document.getElementById("my-form-button");
   var status = document.getElementById("status");

   // Success and Error functions for after the form is submitted

   function success() {
     form.reset();
      status.classList.add("success");
     status.innerHTML = "Thanks!";
   }

   function error() {
     status.classList.add("error");
     status.innerHTML = "Oops! There was a problem.";
   }

   // handle the form submission event

   form.addEventListener("submit", function(ev) {
     ev.preventDefault();
     var data = new FormData(form);
     ajax(form.method, form.action, data, success, error);
   });
 });

 // helper function for sending an AJAX request

 function ajax(method, url, data, success, error) {
   var xhr = new XMLHttpRequest();
   xhr.open(method, url);
   xhr.setRequestHeader("Accept", "application/json");
   xhr.onreadystatechange = function() {
     if (xhr.readyState !== XMLHttpRequest.DONE) return;
     if (xhr.status === 200) {
       success(xhr.response, xhr.responseType);
     } else {
       error(xhr.status, xhr.response, xhr.responseType);
     }
   };
   xhr.send(data);
 }
