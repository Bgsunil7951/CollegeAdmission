

$(function () {

    var checked = false
    $('#year').on("change", (e) => {
        e.preventDefault()
        checked = false

    })
    $("#proceed_1").on("click", (p) => {


        if ($("#year").val() === null) {
            alert("Choose Year")
            return
        }

        if (checked) {
            if ($("#ins-1-status").val() === "pending") {

                sessionStorage.setItem("installment_no", 1)
                sessionStorage.setItem("feesyear", $("#year").val())
                sessionStorage.setItem("installment_1", $("#ins-1").val())

                alert(sessionStorage.getItem("installment_no")
                    + sessionStorage.getItem("year")
                    + sessionStorage.getItem("installment_1")
                )
                window.location = "../Components/fees.html"
            }
            else {
                alert("Installment 1 is Already Paid")
            }
        }
        else {
            alert("Click on get Details")
        }
    })


    $("#proceed_2").on("click", (p) => {
        if ($("#year").val() === null) {
            alert("Choose Year")
            return
        }
        if ($("#ins-1-status").val() === "pending") {
            alert("First Proceed with the Installment_1")
            return
        }
        if (checked) {
            if ($("#ins-2-status").val() === "pending") {
                sessionStorage.setItem("installment_no", 2)
                sessionStorage.setItem("feesyear", $("#year").val())
                sessionStorage.setItem("installment_2", $("#ins-2").val())

                alert(sessionStorage.getItem("installment_no")
                    + sessionStorage.getItem("feesyear")
                    + sessionStorage.getItem("installment_2")
                )
                window.location = "../Components/fees.html"
            } else {
                alert("Installment 2 is Already Paid")

            }
        }
        else {
            alert("Click on get Details")
        }
    })

    $("#getFeesDetails").on("click", (e) => {
        e.preventDefault()
        $("#usn").val(sessionStorage.getItem("id"))
        const detail = {
            usn: sessionStorage.getItem("id"),
            year: $("#year").val()
        }
        if (detail === "Guest" || detail === null) {
            alert("invalid user Id")
            return
        }
        if ($("#year").val() === null) {
            alert("Enter  Year")
            return
        }
        $.ajax({
            url: "http://localhost:3500/fees_details",
            type: "post",
            data: detail,
            success: function (result) {

                if (result.length > 0) {
                    checked = true
                    document.getElementById("totalFees-1").innerHTML = result[0].TotalFees
                    document.getElementById("totalFees-2").innerHTML = result[0].TotalFees
                    document.getElementById("ins-1").value = result[0].installment_1
                    document.getElementById("ins-2").value = result[0].installment_2
                    document.getElementById("ins-1-status").value = result[0].installment_1_status
                    document.getElementById("ins-2-status").value = result[0].installment_2_status
                }
                else {
                    alert("You Have not taken admission to the Year")
                }
            },

            error: function (err) {
                console.log(err);
            },
        });
    });
})
