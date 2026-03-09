function encode() {
  let text = document.getElementById("inputText").value;

  let encoded = btoa(text);

  document.getElementById("result").innerText = encoded;
}

function checkPassword() {
  let password = document.getElementById("passwordInput").value;

  let result = document.getElementById("passwordResult");

  let hasUpperCase = /[A-Z]/.test(password);
  let hasNumber = /[0-9]/.test(password);
  let hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  let hasLength = password.length >= 8;

  if (hasUpperCase && hasNumber && hasSpecial && hasLength) {
    result.innerText = "Strong Password";
  } else {
    result.innerText = "Weak Password";
  }
}

function showBase64() {
  document.getElementById("base64Tool").style.display = "block";
  document.getElementById("passwordTool").style.display = "none";
}

function showPassword() {
  document.getElementById("passwordTool").style.display = "block";
  document.getElementById("base64Tool").style.display = "none";
}
