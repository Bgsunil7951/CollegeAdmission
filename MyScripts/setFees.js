$(function () {
    $("#stdId").val(sessionStorage.getItem("user_tab_id"))
    $("#stdYear").val(sessionStorage.getItem("user_tab_year"))
    // alert(sessionStorage.getItem("user_tab_id") + "  :  " + sessionStorage.getItem("user_tab_year"))

    $("#set_fees").on("submit", (e) => {
        e.preventDefault()
        // alert("reached")
        const detail = {
            stdId: $("#stdId").val(),
            stdYear: $("#stdYear").val(),
            totalFees: $("#totalFees").val(),
            inst_1: $("#inst_1").val(),
            inst_2: $("#inst_2").val()
        }
        // alert(detail.stdID + "  " + detail.stdYear + "  " + detail.totalFees + "  " + detail.inst_1 + "  " + detail.inst_2)



        $.ajax({
            url: "http://localhost:3500/setFeesDetails",
            type: "post",
            data: detail,
            success: function (result) {
                alert("Fees Structure Set Successfully")
                // window.location = "../Components/admissionFirst.html"
            },
            error: function (xhr, textStatus, errorThrown) {
                if (xhr.status === 409) {
                    alert("You have already applied : Duplicate Entry")
                } else if (xhr.responseJSON && xhr.responseJSON.sqlMessage && xhr.responseJSON.sqlMessage.includes('Duplicate entry')) {
                    console.log(xhr)
                    alert("You have already Applied please Check Status or complete further steps or Internal Error")
                } else {
                    console.log(xhr)
                    alert("An error occurred while submitting the bank details. Please try again later.")
                }
            }
        })

    })

})