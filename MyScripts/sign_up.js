$(function () {
  let pass;
  let pass_2;

  $("#user_password, #user_password_2").on("input", function () {
    pass = $("#user_password").val();
    pass_2 = $("#user_password_2").val();
  });

  $("#signup-form").on("submit", (e) => {
    e.preventDefault();

    if ($("#user_password").val().length < 8) {
      alert("password must at least 8 charecters");
      return;
    } else if (pass !== pass_2) {
      alert("password does not match");
      return;
    }

    const detail = {
      user_name: $("#user_name").val(),
      user_email: $("#user_email").val(),
      user_type: $("#user_type").val(),
      user_password: $("#user_password").val(),
    };
    // alert("reacheed");

    $.ajax({
      url: "http://localhost:3500/signup",
      type: "post",
      data: detail,
      success: function (result) {
        alert(
          "Refer this Register ID for the future use don't forget it : " +
          result.insertId 
        );
        window.location = "../Components/login.html";
      },
      error: function (xhr, textStatus, errorThrown) {
        if (xhr.status === 409) {
          alert("Duplicate Entry")
        } else if (xhr.responseJSON && xhr.responseJSON.sqlMessage && xhr.responseJSON.sqlMessage.includes('Duplicate entry')) {
          console.log(xhr)
          alert("You have already Applied please Check Status or complete further steps or Internal Error")
        } else {
          console.log(xhr)
          alert("An error occurred while submitting the  details. Please try again later.")
        }
      }
    });


  });
});