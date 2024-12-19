$(function () {

    $("#stuDetails_1").on("submit", (e) => {
        e.preventDefault()

        if (!validateForm()) {
            alert("Fill All The Details Correctly")
            return
        }

        const id = sessionStorage.getItem("id")
        const stu1_detail = {
            studentId: id,
            firstName: $("#firstName").val(),
            middleName: $("#middleName").val(),
            lastName: $("#lastName").val(),
            stuPhone: $("#stuPhone").val(),
            fatherName: $("#fatherName").val(),
            fatherPhone: $("#fatherPhone").val(),
            motherName: $("#motherName").val(),
            motherPhone: $("#motherPhone").val(),
            gender: $("#gender").val(),
            dob: $("#dob").val(),
            bloodGroup: $("#bloodGroup").val(),
            aadhar: $("#aadhar").val(),
            cast: $("#cast").val(),
            address: $("#address").val(),
            state: $("#state").val(),
            city: $("#city").val(),
            zip: $("#zip").val()
        }
        if (confirm('Are you sure you want to save this thing into the database? once submited you cannot able to modify it..')) {
            // Save it!
            console.log('Thing was saved to the database.');
        } else {
            // Do nothing!
            console.log('Thing was not saved to the database.');
            return
        }
        $.ajax({
            url: "http://localhost:3500/FirstStuDetails",
            type: "post",
            data: stu1_detail,
            success: function (result) {
                alert("Submited Successfully")
                sessionStorage.setItem("first_step", "true")
                window.location = "../Components/admissionFirst.html"
            },
           error: function (xhr, textStatus, errorThrown) {
                if (xhr.status === 409) {
                    alert("You Have already applied Duplicate entry")
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