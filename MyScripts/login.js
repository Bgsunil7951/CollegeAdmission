

$(function () {

  $("#login").on("click", (e) => {
    e.preventDefault()
    if ($("#Register_id").val() == "" || $("#password").val() == "") {
      alert("invalid user id or password ")
      return
    }
    const detail = {
      Register_id: $("#Register_id").val(),
      userType: $("#user_type").val(),
      password: $("#password").val(),
    };
    $.ajax({
      url: "http://localhost:3500/user",
      type: "post",
      data: detail,
      success: function (result) {

        if (result.length > 0) {
          sessionStorage.setItem("reg_id", result[0].user_name)
          sessionStorage.setItem("id", result[0].register_id)
          sessionStorage.setItem("user_type", result[0].user_type)
          alert("login Success " + sessionStorage.getItem("id"))
          window.location = "../Components/home_page.html"

        }
        else {
          alert("invalid user id or password or user may not exist or select the proper user type")
        }
      },

      error: function (err) {
        console.log(err);
      },
    });
  });
})
