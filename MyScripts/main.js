// let register_no = sessionStorage.getItem("reg_id");
// let id = sessionStorage.getItem("id");
// let user_type = sessionStorage.getItem("user_type");


// if (register_no === null || register_no === "false") $("#user").text("Guest");
// else $("#user").text(id);

// const register_id = sessionStorage.getItem("reg_id")


// $("#logout").on("click", (e) => {
//     e.preventDefault()
//     // sessionStorage.setItem("reg_id", "false")
//     // sessionStorage.setItem("id", "false")
//     // sessionStorage.setItem("user_type", null)
//     // location.reload()
//     document.getElementById("admin").style.display = "none"
//     document.getElementById("logout").style.display = "none"
//     document.getElementById("admission").style.display = "none"
//     document.getElementById("feesPayment").style.display = "none"
//     document.getElementById("login_nav").style.display = "block"
//     document.getElementById("sign_up_nav").style.display = "block"
//     window.location = "../Components/home_page.html"

// })

// // if (sessionStorage.getItem("first_step") === "true") {
// //     document.getElementById("apply_first_1").classList.add("btn-outline-success")
// // }
// // if (sessionStorage.getItem("second_step") === "true") {
// //     document.getElementById("apply_first_2").classList.add("btn-outline-success")

// // }
// // if (sessionStorage.getItem("third_steps") === "true") {
// //     document.getElementById("apply_first_3").classList.add("btn-outline-success")
// // }
// // if (sessionStorage.getItem("fourth_step") === "true") {
// //     document.getElementById("apply_first_4").classList.add("btn-outline-success")

// // }
// // if (sessionStorage.getItem("fifth_step") === "true") {
// //     document.getElementById("apply_first_5").classList.add("btn-outline-success")
// // }
// // if (sessionStorage.getItem("sixth_step") === "true") {
// //     document.getElementById("apply_first_6").classList.add("btn-outline-success")

// // }

// alert(user_type)
// if (user_type != null) {
//     if (user_type === "Admin") {
//         alert("Admin")
//         document.getElementById("admin").style.display = "block"
//         document.getElementById("logout").style.display = "block"
//         document.getElementById("admission").style.display = "none"
//         document.getElementById("feesPayment").style.display = "none"
//         document.getElementById("login_nav").style.display = "none"
//         document.getElementById("sign_up_nav").style.display = "none"
//     }
//     else if (user_type === "Student") {
//         alert("normal User")
//         document.getElementById("logout").style.display = "block"
//         document.getElementById("admission").style.display = "block"
//         document.getElementById("feesPayment").style.display = "block"
//         document.getElementById("admin").style.display = "none"
//         document.getElementById("login_nav").style.display = "none"
//         document.getElementById("sign_up_nav").style.display = "none"
//     }
// }
// else if (user_type == null) {
//     alert("guest")
//     document.getElementById("login_nav").style.display = "block"
//     document.getElementById("sign_up_nav").style.display = "block"
//     document.getElementById("admission").style.display = "none"
//     document.getElementById("feesPayment").style.display = "none"
//     document.getElementById("logout").style.display = "none"
//     document.getElementById("admin").style.display = "none"
// }




// Get the user's information from session storage
let register_no = sessionStorage.getItem("reg_id");
let id = sessionStorage.getItem("id");
let user_type = sessionStorage.getItem("user_type");

// If the user is not registered or not logged in, display "Guest"
if (register_no === null || register_no === "false") {
    $("#user").text("Guest");
} else {
    $("#user").text(id);
}

// On click of the logout button, clear the session storage and redirect to the home page
$("#logout").on("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("reg_id", "false");
    sessionStorage.setItem("id", "false");
    sessionStorage.setItem("user_type", null);
    window.location = "../Components/home_page.html"
});

// If the user is an admin, display the admin page and hide the login and sign up buttons
if (user_type === "Admin") {
    // alert("admin")
    document.getElementById("admin").style.display = "block";
    document.getElementById("logout_nav").style.display = "block";
    document.getElementById("admission").style.display = "none";
    document.getElementById("feesPayment").style.display = "none";
    document.getElementById("login_nav").style.display = "none";
    document.getElementById("sign_up_nav").style.display = "none";
}
// If the user is a student, display the admission and fees payment pages and hide the login and sign up buttons
else if (user_type === "Student") {
    // alert("student")
    document.getElementById("logout_nav").style.display = "block";
    document.getElementById("admission").style.display = "block";
    document.getElementById("feesPayment").style.display = "block";
    document.getElementById("admin").style.display = "none";
    document.getElementById("login_nav").style.display = "none";
    document.getElementById("sign_up_nav").style.display = "none";
}
// If the user is a guest, display the login and sign up buttons and hide the other pages
else {
    // alert("guest")
    document.getElementById("login_nav").style.display = "block";
    document.getElementById("sign_up_nav").style.display = "block";
    document.getElementById("admission").style.display = "none";
    document.getElementById("feesPayment").style.display = "none";
    document.getElementById("logout_nav").style.display = "none";
    document.getElementById("admin").style.display = "none";
}
