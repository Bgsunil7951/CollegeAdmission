

$(function () {


    $("#getStatus").on("click", (e) => {
        e.preventDefault()
        if ($("#year").val() == null) {
            alert("Choose Year..!!")
            return
        }
        const detail = {
            student_id: sessionStorage.getItem("id"),
            year: $("#year").val(),
        };
        $.ajax({
            url: "http://localhost:3500/getAdmissionStatus",
            type: "POST",
            data: detail,
            success: function (result) {
                if (result.length > 0) {

                    // alert("success")
                    $("#status").val(result[0].admission_status)
                    $("#usn").val(detail.student_id)
                    if ($("#status").val() === "pending") {
                        document.getElementById("status_box").classList.toggle("bg-warning")
                    }
                    else if ($("#status").val() === "Rejected") {
                        document.getElementById("status_box").classList.toggle("bg-danger")
                    }
                    else {
                        document.getElementById("status_box").classList.toggle("bg-success")

                    }
                }
                else {
                    alert("Data not Found..!")
                }
            },
            error: function (err) {
                console.log(err);
            },
        });
    });
})
