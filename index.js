console.log("test");
const SignUpForm = document.forms["sign-up-form"];
const firstName = SignUpForm["firstName"];
const lastName = SignUpForm["lastName"];
const age = SignUpForm["age"];

const fnAlert = document.getElementById("fnalert");
const lnAlert = document.getElementById("lnalert");
const ageAlert = document.getElementById("age-alert");
const result = document.getElementById("hasil");
const nama = document.getElementById("nama");
const umur = document.getElementById("umur");
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const backButton = document.getElementById("apalah");

const invalidInputs = []; // Array to store invalid inputs

// Function to check for invalid input types
function isValidName(value) {
  const nameRegex = /^[a-zA-Z]+$/;
  return nameRegex.test(value);
}

// Function to check if value is valid (not a boolean, null, undefined, number, or object)
function isInvalidType(value) {
  return (
    typeof value === "boolean" ||
    value === null ||
    value === undefined ||
    typeof value === "object"
  );
}

function validation() {
  invalidInputs.length = 0; // Clear previous invalid inputs

  // Validate first name
  if (isInvalidType(firstName.value)) {
    fnAlert.innerHTML =
      "Nama depan tidak boleh bertipe boolean, null, undefined, number, atau object!";
    invalidInputs.push("firstName");
  } else if (firstName.value === "") {
    fnAlert.innerHTML = "Nama depan harus diisi!";
    invalidInputs.push("firstName");
  } else if (!isValidName(firstName.value)) {
    fnAlert.innerHTML =
      "Nama depan tidak boleh mengandung angka atau karakter spesial!";
    invalidInputs.push("firstName");
  } else {
    fnAlert.innerHTML = "Mantap";
    fnAlert.classList.add("result");
  }

  // Validate last name
  if (isInvalidType(lastName.value)) {
    lnAlert.innerHTML =
      "Nama belakang tidak boleh bertipe boolean, null, undefined, number, atau object!";
    invalidInputs.push("lastName");
  } else if (lastName.value === "") {
    lnAlert.innerHTML = "Nama belakang harus diisi!";
    invalidInputs.push("lastName");
  } else if (!isValidName(lastName.value)) {
    lnAlert.innerHTML =
      "Nama belakang tidak boleh mengandung angka atau karakter spesial!";
    invalidInputs.push("lastName");
  } else {
    lnAlert.innerHTML = "Mantap";
    lnAlert.classList.add("result");
  }

  // Validate age
  const ageValue = parseInt(age.value, 10); // Convert age to integer
  if (isInvalidType(age.value) || isNaN(ageValue)) {
    ageAlert.innerHTML = "Usia harus berupa angka yang valid!";
    invalidInputs.push("age");
  } else if (ageValue < 0) {
    ageAlert.innerHTML = "Usia tidak boleh negatif!";
    invalidInputs.push("age");
  } else if (ageValue < 18) {
    ageAlert.innerHTML = "Pengguna harus di atas 18 tahun!";
    invalidInputs.push("age");
  } else {
    ageAlert.innerHTML = "Mantap";
    ageAlert.classList.add("result");
  }
}

function hasil() {
  if (
    fnAlert.innerHTML === "Mantap" &&
    lnAlert.innerHTML === "Mantap" &&
    ageAlert.innerHTML === "Mantap"
  ) {
    slide1.classList.add("slide1");
    slide2.classList.remove("slide2");
    nama.innerText = firstName.value + " " + lastName.value;
    umur.innerText = age.value;
  }
}

function back() {
  window.location.reload();
}

backButton.addEventListener("click", back);

SignUpForm.onsubmit = (event) => {
  event.preventDefault();
  validation();
  hasil();
};
