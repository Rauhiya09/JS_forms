function validateForm() {
  var name = document.getElementById('name').value;
  var address = document.getElementById('address').value;
  var zip = document.getElementById('zip').value;
  var country = document.getElementById('country').value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var preferences = document.querySelectorAll('input[name="color"]:checked');
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var verifyPassword = document.getElementById('verifyPassword').value;

  if (name.length > 20) {
    alert('Name cannot exceed 20 characters.');
    return false;
  }

  if (preferences.length < 2) {
    alert('Please select at least two preferences.');
    return false;
  }

  if (password !== verifyPassword) {
    alert('Passwords do not match.');
    return false;
  }

  return true;
}
