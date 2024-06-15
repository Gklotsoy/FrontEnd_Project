var countDownDate = new Date("Feb 16, 2030 00:00:00").getTime();

var timer = setInterval(function() {
  
  var now = new Date().getTime();
    
 
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
 
  document.getElementById("countdown").innerHTML = days + "D " + hours + "H "
  + minutes + "M " + seconds + "S ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);


var modal = document.getElementById("myModal");

var btn = document.getElementById("subscribeBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

function newsletter() {
  var email = document.getElementById("exampleEmail1").value;
  var subscribeTxt = document.getElementById("subscribe");
  if (email == "") {
    subscribeTxt.innerHTML = "Please enter your Email address.";
    return false;
  }
  else if (!/\S+@\S+\.\S+/.test(email)) {
    subscribeTxt.innerHTML = "Invalid Email Address.";
    return false;
  }
  else {
    subscribeTxt.innerHTML = "Thank you for the Subscription!";
    return true;
  }
}


var formModal  = document.getElementById("form-modal");
var contactBtn = document.getElementById("contactBtn")
var xBtn       = document.getElementById("closeBtn");

contactBtn.onclick = function() {
  formModal.style.display = "block";
}

xBtn.onclick = function() {
 formModal.style.display = "none";
 clearFields();
}

window.onclick = function(event) {
  if (event.target == formModal) {
    formModal.style.display = "none";
  } else if (event.target == modal) {
    modal.style.display = "none";
  }
}

function showArmyDiv() {
  var selectValue = document.getElementById("gender").value;
  var armyDiv     = document.getElementById("armyDiv");
  if(selectValue == 1){
      armyDiv.style.display = "block";

  } else {
    armyDiv.style.display = "none";

  }
}

function showArmyDutiesDiv() {
  var selectDuties  = document.getElementById("armyDuties").value;
  var ArmyDutiesDiv = document.getElementById("armyEnded");
  if(selectDuties == 1) {
    ArmyDutiesDiv.style.display = "block";

  } else {
    ArmyDutiesDiv.style.display = "none";
  }
}

$(document).ready(function() {
  $('#checkbox').change(function() {
      if (this.checked) {
          $('#element').removeClass('hidden');
      } else {
          $('#element').addClass('hidden');
      }
  });
});

function validateForm() {
  var form = document.getElementById("form-modal")
  var requiredFields = form.querySelectorAll('input[required], select[required], textarea[required]');
  var errorMessage = document.getElementsByClassName("error-message");
  var isValid = true;
  
  for (var i = 0; i < requiredFields.length; i++) {
    if (requiredFields[i].value == "") {
      errorMessage[i].style.display = "block";
      isValid = false;
    } else {
      errorMessage[i].style.display = "none";
    }
  }
  if (!isValid) {
    alert("Παρακαλώ συμπληρώστε όλα τα απαιτούμενα πεδία.");
  } else {
    document.getElementById("sendForm").innerHTML = "Ευχαριστούμε για την επικοινωνία";
  }
}

function clearFields() {
  var textFields     = document.querySelectorAll('input[type         = "text"]');
  var numberFields   = document.querySelectorAll('input[type         = "number');
  var selectFields   = document.getElementsByTagName("select");
  var dateFields     = document.querySelectorAll('input[type         = "date"]');
  var checkboxes     = document.querySelectorAll('input[type         = "checkbox"]');
  var message        = document.getElementById("sendForm").innerHTML = "";
  var army           = document.getElementById("armyDiv");
  var armyEnd        = document.getElementById("armyEnded");
  for (i = 0; i < textFields.length; i++) {
    textFields[i].value = "";
  }
  for (i = 0; i < numberFields.length; i++){
    numberFields[i].value = "";
  }
  for (i = 0; i < selectFields.length; i++) {
    selectFields[i].selectedIndex = "";
  }
  for (i = 0; i < dateFields.length; i++){
    dateFields[i].value = "";
  }
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }
  
  message                      = "";
  army.style.display           = "none";
  armyEnd.style.display        = "none";
}
