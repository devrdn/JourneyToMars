function  Check_Form () {
  document.getElementById("error1").innerHTML = '';
  document.getElementById("error2").innerHTML = '';
  document.getElementById("error3").innerHTML = '';
  document.getElementById("error4").innerHTML = '';
  var err = 0;
  var name, surname, date, address, phone;
  name = document.getElementById('form1_name').value;
  surname = document.getElementById('form1_surname').value;
  adress = document.getElementById('form1_adress').value;
  email = document.getElementById('form1_email').value;
  alert(name + surname+adress+email);

  // Проверка имени.
  if (name == "") {
    error = " * First Name entered incorrectly. ";
    document.getElementById('error1').innerHTML = error;
    err++;
  } else document.getElementById("error2").innerHTML = " ";

  // Проверка телефона.
  if (surname == "") {
    error = " * Surname entered incorrectly. ";
    document.getElementById("error2").innerHTML = error;
    err++;
  } else document.getElementById("error2").innerHTML = " ";

  // Проверка адресса.
  if (adress == "") {
    error = " * Adress entered incorrectly. ";
    document.getElementById("error3").innerHTML = error;
    err++;
  } else document.getElementById("error3").innerHTML = " ";

  // Проверка Email.
  if (!email.match(/\w+@\w+\.*/)) {
    var temps = email.match(/\w+@\w+\.*/);
    err++;
    error = "* Email entered incorrectly (@).";
    document.getElementById("error4").innerHTML = error;
  } else document.getElementById("error4").innerHTML = " ";

  return (!err);
}
