$(function () {

    $("#admission_details").on("submit", (e) => {
        e.preventDefault()
        // alert("reached")
        // return
        if (!validateForm()) {
            alert("Fill All The Details Correctly")
            return
        }

        const id = sessionStorage.getItem("id")
        const stu1_detail = {
            studentId: id,
            stuName: $("#stuName").val(),
            admissionType: $("#admissionType").val(),
            registerNumber: $("#registerNumber").val(),
            rank: $("#rank").val(),
            category: $("#category").val(),
            branch: $("#branch").val(),
            admissionYear: $("#admissionYear").val(),
            date: $("#date").val(),
        }
        // alert("NA : " + stu1_detail.admissionYear)

        if (confirm('Are you sure you want to save this thing into the database? once submited you cannot able to modify it..')) {
            // Save it!
            console.log('Thing was saved to the database.');
        } else {
            // Do nothing!
            console.log('Thing was not saved to the database.');
            return
        }











        $.ajax({
            url: "http://localhost:3500/FirstAdmissionDetails",
            type: "post",
            data: stu1_detail,
            success: function (result) {
                alert("Submitted Bank and Admission Details Successfully")
                sessionStorage.setItem("fourth_step", "true")
                window.location = "../Components/admissionFirst.html"
            },
            error: function (xhr, textStatus, errorThrown) {
                if (xhr.status === 409) {
                    alert("You have already applied : Duplicate Entry")
                    window.location = "../Components/admissionFirst.html"
                } else if (xhr.responseJSON && xhr.responseJSON.sqlMessage && xhr.responseJSON.sqlMessage.includes('Duplicate entry')) {
                    console.log(xhr)
                    alert("You have already Applied please Check Status or complete further steps or Internal Error")
                    window.location = "../Components/admissionFirst.html"
                } else {
                    console.log(xhr)
                    alert("An error occurred while submitting the bank details. Please try again later.")
                    window.location = "../Components/admissionFirst.html"
                }
            }
        })



    })





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
})