$(function () {
    var calculated = false
    var submited = false
    function getDate() {
        n = new Date();
        y = n.getFullYear();
        m = n.getMonth() + 1;
        d = n.getDate();
        document.getElementById("adddate").value = y + "/" + m + "/" + d;
    }

    $("#print").on("click", (e) => {
        e.preventDefault()

        window.print($("#recipt").text())
    })

    $("#calculate").on("click", (e) => {
        e.preventDefault()
        $("#stuYear").val(sessionStorage.getItem("feesyear"))
        $("#insta_no").val(sessionStorage.getItem("installment_no"))
        let tutionFees = parseFloat($("#tutionFees").val())
        let collegeFees = parseFloat($("#collegeFees").val())
        let vtuFees = parseFloat($("#vtuFees").val())
        let hostelFees = parseFloat($("#hostelFees").val())
        let otherFees = parseFloat($("#otherFees").val())
        let examFees = parseFloat($("#examFees").val())
        let totalFees = tutionFees + collegeFees + vtuFees + otherFees + hostelFees + examFees
        $("#totalFees").val(totalFees)
        calculated = true
        getDate()
    })


    $("#updateFees").on("click", (e) => {

        e.preventDefault()
        if (!submited) {
            alert("Click on Submit First")
            return
        }

        const id = sessionStorage.getItem("id")
        const detail = {
            studentId: id,
            stuYear: $("#stuYear").val(),
            insta_no: sessionStorage.getItem("installment_no")
        }
        $.ajax({
            url: "http://localhost:3500/updateFees",
            type: "post",
            data: detail,
            success: function (result) {
                alert("updated Successfully")
                sessionStorage.setItem("sixth_step", "true")
                window.location = "../Components/home_page.html"
            },
            error: function (xhr, textStatus, errorThrown) {
                if (xhr.status === 409) {
                    alert("Duplicate Entry")
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


    $("#fees").on("submit", (e) => {
        e.preventDefault()

        if (!calculated) {
            alert("calulate the fees Click on calculate")
            return
        }
        else if ($("#totalFees").val() == 0) {
            alert("Total Fees Cannot be Zero")
            return
        }
        else {

            const id = sessionStorage.getItem("id")
            const fees_detail = {
                studentId: id,
                UTR_No: $("#UTR_No").val(),
                uploadFile: $("#uploadFile").val(),
                stuYear: $("#stuYear").val(),
                branch: $("#branch").val(),
                tutionFees: $("#tutionFees").val(),
                collegeFees: $("#collegeFees").val(),
                vtuFees: $("#vtuFees").val(),
                examFees: $("#examFees").val(),
                hostelFees: $("#hostelFees").val(),
                otherFees: $("#otherFees").val(),
                totalFees: $("#totalFees").val(),
                insta_no: sessionStorage.getItem("installment_no"),
                date: $("#adddate").val()
            }
            if (fees_detail.totalFees != sessionStorage.getItem("installment_" + sessionStorage.getItem("installment_no"))) {
                $("#totalFees").val("28")
                alert("you Need To pay : " + sessionStorage.getItem("installment_" + sessionStorage.getItem("installment_no")) + " Amount")
                return
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
                url: "http://localhost:3500/payfees",
                type: "post",
                data: fees_detail,
                success: function (result) {
                    alert("Submited Successfully")
                    sessionStorage.setItem("fifth_step", "true")
                    // window.location = "../Components/admissionFirst.html"
                    submited = true
                },
                error: function (xhr, textStatus, errorThrown) {
                    if (xhr.status === 409) {
                        alert("Duplicate Entry")
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
        }
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