$(function () {





    $("#apply_first_1").on("click", (e) => {

        alert("first : " + sessionStorage.getItem("first_step") + "\nsecond : " + sessionStorage.getItem("second_step") + "\nfourth : " + sessionStorage.getItem("fourth_step") + "\nthird : " + sessionStorage.getItem("third_steps"))

        e.preventDefault()

        window.location = " ../Components/form_1_stu_details.html"
    })
    $("#apply_first_2").on("click", (e) => {
        e.preventDefault()
        if (sessionStorage.getItem("first_step") == "true") {

            window.location = "../Components/form_1_diploma_edu.html"

        }
        else {
            alert("Complete The Step-1")
        }
    })
    $("#apply_first_3").on("click", (e) => {
        e.preventDefault()
        if (sessionStorage.getItem("second_step") == "true") {

            window.location = "../Components/form_1_bank_details.html"

        }
        else {
            alert("Complete The Step-2")
        }

    })

    $("#apply_first_4").on("click", (e) => {
        e.preventDefault()
        if (sessionStorage.getItem("third_steps") == "true") {

            window.location = "../Components/form_1_admission_details.html"

        }
        else {
            alert("Complete The Step-3")
        }

    })


    $("#apply_first_5").on("click", (e) => {
        e.preventDefault()
        if (sessionStorage.getItem("fourth_step") == "true") {
            window.location = "../Components/parent_declaration.html"
        }
        else {
            alert("Complete The Step-4")
        }

    })

    $("#apply_first_6").on("click", (e) => {
        e.preventDefault()
        if (sessionStorage.getItem("fifth_step") == "true") {
            window.location = "../Components/get_1_fees_details.html"
        }
        else {
            alert("Complete The Step-5 ")
        }

    })



})
