function validateForm() {
  var name = document.getElementById('name').value;
  var registerNumber = document.getElementById('registerNumber').value;
  var dob = document.getElementById('dob').value;
  var program = document.getElementById('program').value;
  var email = document.getElementById('email').value;
  var tempAddress = document.getElementById('tempAddress').value;
  var permanentAddress = document.getElementById('permanentAddress').value;
  var phone = document.getElementById('phone').value;
  var sameAddressCheckbox = document.getElementById('sameAddressCheckbox').checked;

  if (!/^[A-Za-z ]{1,30}$/.test(name)) {
    alert('Name can only contain alphabets and cannot exceed 30 characters.');
    return false;
  }

  if (!/^[A-Za-z0-9]+$/.test(registerNumber)) {
    alert('Register Number can only contain alphabets and numbers.');
    return false;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  if (phone.length !== 10) {
    alert('Mobile number should be exactly 10 digits.');
    return false;
  }

  if (sameAddressCheckbox) {
    document.getElementById('permanentAddress').value = tempAddress;
    document.getElementById('permanentAddress').disabled = true;
  }

  return true;
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
