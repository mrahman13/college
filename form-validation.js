function validateForm() {
    var nameInput = document.getElementById("yourName");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
  
    if (nameInput.value.trim() == "") {
      alert("Please enter your name.");
      nameInput.focus();
      return false;
    }
  
    if (emailInput.value.trim() == "") {
      alert("Please enter your email address.");
      emailInput.focus();
      return false;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return false;
    }
  
    if (messageInput.value.trim() == "") {
      alert("Please enter a message.");
      messageInput.focus();
      return false;
    }
  
    return true;
  }
  /*https://www.youtube.com/watch?v=4ePkrpCMTFo&t=1507s/*
  /*The sourcec I used to help me implement a form validation*/