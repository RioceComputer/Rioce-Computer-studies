document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
  });
/* this code is a block a keyboard shortcuts*/
  document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && (event.key === "u" || event.key === "U")) {
      event.preventDefault();
    }
  });
  /* This code is a block a Inspect Elements & Developer Tools*/
  document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === "I") {
      event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.key === "J") {
      event.preventDefault();
    }
    if (event.ctrlKey && event.key === "S") {
      event.preventDefault();
    }
    if (event.ctrlKey && event.key === "H") {
      event.preventDefault();
    }
    if (event.key === "F12") {
      event.preventDefault();
    }
  }); 

//Emaill service 
   emailjs.init("SzxlHRy5_sMUejOLM");

  // Form submit
  document.getElementById("admissionForm").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_9lmee27", "template_gypoml7", this)
      .then(() => {
        alert("✅ Admission form submitted successfully! Check your email.");
        document.getElementById("admissionForm").reset();
      }, (error) => {
        alert("❌ Failed to send form: " + JSON.stringify(error));
      });
  });