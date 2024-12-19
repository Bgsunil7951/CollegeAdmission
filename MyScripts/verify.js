$(function () {


    function validateForm() {
        var y, i, valid = true;
        y = document.getElementsByTagName("input");
        for (i = 0; i < y.length; i++) {
            if (y[i].value == "") {
                valid = false;
            }
        }
        return valid;
    }


    $("#submit").on("click", (e) => {
        e.preventDefault()
        if (!validateForm()) {
            alert("Fill All Deatils Correctly")
            return
        }
        const detail = {
            student_id: sessionStorage.getItem("id"),
            date: $("#date").val(),
            year: $("#year").val(),
        }
        alert("year : " + detail.year)

        $.ajax({
            url: "http://localhost:3500/verify",
            type: "post",
            data: detail,
            success: function (result) {
                alert("Submited   Successfully")
                sessionStorage.setItem("second_step", "true")
                sessionStorage.setItem("feesyear", $("#year").val())
                window.location = "../Components/admission.html"
            },
            error: function (xhr, textStatus, errorThrown) {
                if (xhr.status === 409) {
                    alert("You Have already applied : Duplicate entry ")
                    window.location = "../Components/admission.html"
                } else if (xhr.responseJSON && xhr.responseJSON.sqlMessage && xhr.responseJSON.sqlMessage.includes('Duplicate entry')) {
                    console.log(xhr)
                    alert("You have already Applied please Check Status or complete further steps or Internal Error")
                    window.location = "../Components/admission.html"
                } else {
                    console.log(xhr)
                    alert("An error occurred while submitting the bank details. Please try again later.")
                    window.location = "../Components/admission.html"
                }
            }

        })
    })
})
