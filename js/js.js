$(function () {
    $( "#login_button" ).click(function() {

    var loginEmail = $("#login_email").val();
    var loginPassword = $("#login_password").val();

    console.log(loginPassword);
    var ref = new Firebase("https://luminous-fire-8045.firebaseio.com/");

    ref.authWithPassword({
    email    : loginEmail,
    password : loginPassword
      }, function (error, authData) {
    if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
    localStorage.setItem("Greeting", loginEmail);
    window.location.href="logout.html";
  }

  });
  });





  $( "#register_button" ).click(function() {

  alert( "Success!" );
    var ref = new Firebase("https://luminous-fire-8045.firebaseio.com/");
 

  var email = $("#register_email").val();
  var password = $("#register_password").val();

  console.log(email);
  console.log(password);

  ref.createUser({
    email    : email,
    password : password
    }, function(error, userData) {
        if (error) {
                console.log("Error creating user:", error);
        } else {
                 console.log("Successfully created user account with uid:", userData.uid);
        }
    });
                 
});

  var searchDBString = [
    "Set Up",
    "Android Stack",
    "Swift",
    "Quiz",
  ];
  $("#autocomplete1").autocomplete({
    source: searchDBString,
  });

  $("#button1").button();
});
