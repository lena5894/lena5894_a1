function validateEmail() {
  var email = document.getElementById("email").value;

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var test = re.test(String(email).toLowerCase());

  if (!test) {
    alert('Invalid email.')

    return false;
  }

  return true;
}

function validateEmailNoRegex() {
  var email = document.getElementById("email").value;

  if (email == '') {
    alert("Empty email.");
    document.getElementById("email").focus();

    return false;
  }

  return true;
}

function validateUsername() {
  var username = document.getElementById("username").value;

  if (username == '') {
    alert("Empty username.");

    return false;
  }

  return true;
}

function validatePassword() {
  var password = document.getElementById("password").value;

  if (password == '') {
    alert("Empty password.");

    return false;
  }

  return true;
}

function validateForm() {
  if (!validateEmail()) {
    return false;
  }

  if (!validateUsername()) {
    return false;
  }

  if (!validatePassword()) {
    return false;
  }

  return true;
}
