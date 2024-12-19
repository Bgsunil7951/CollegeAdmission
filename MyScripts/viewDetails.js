$(function () {

    $("#usn").val(sessionStorage.getItem("user_tab_id"))
    // $("#year").val(sessionStorage.getItem("user_tab_year"))


    // $("#get_stu_details").on("click", (e) => {
    //     e.preventDefault()
    //     const detail = {
    //         usn: $("#usn").val(),
    //         // year : $("#year").val()
    //     }

    //     $.ajax({
    //         url: "http://localhost:3500/viewStuDetails",
    //         type: "post",
    //         data: detail,
    //         success: function (result) {
    //             // alert("success");
    //             if (result.length === 0) {
    //                 alert("No Applicants")
    //             }
    //             $("#stu_rows").empty()
    //             console.log(result)
    //             for (let i = 0; i < result.length; i++) {
    //                 $("#stu_rows").append(
    //                     " <tr> " +

    //                     "   <td> " + (i + 1) + " </td> " +
    //                     "   <td > " + result[i].firstName + " </td> " +
    //                     "   <td> " + result[i].lastName + " </td> " +
    //                     "   <td > " + result[i].stuPhone + " </td> " +
    //                     "   <td>" + result[i].fatherName + "</td> " +
    //                     "   <td >" + result[i].fatherPhone + "</td> " +
    //                     "   <td> " + result[i].motherName + " </td> " +
    //                     "   <td> " + result[i].dob + " </td> " +
    //                     "   <td> " + result[i].address + " </td> " +
    //                     "  </tr>"
    //                 )
    //             }
    //         },
    //         error: function (xhr, textStatus, errorThrown) {
    //             if (xhr.status === 409) {
    //                 alert("Duplicate Entry")
    //             } else if (xhr.responseJSON && xhr.responseJSON.sqlMessage && xhr.responseJSON.sqlMessage.includes('Duplicate entry')) {
    //                 console.log(xhr)
    //                 alert("You have already Applied please Check Status or complete further steps or Internal Error")
    //             } else {
    //                 console.log(xhr)
    //                 alert("An error occurred while submitting the bank details. Please try again later.")
    //             }
    //         }
    //     });

    // })
    $("#get_stu_details").on("click", (e) => {
        e.preventDefault()
        const detail = {
            usn: $("#usn").val(),
            // year : $("#year").val()
        }

        $.ajax({
            url: "http://localhost:3500/viewStuDetails",
            type: "post",
            data: detail,
            success: function (result) {
                if (result.length === 0) {
                    alert("No Applicants")
                }
                $("#stu_rows").empty()
                console.log(result)
                for (let i = 0; i < result.length; i++) {
                    let formattedDate = new Date(result[i].dob).toISOString().slice(0, 10)
                    $("#stu_rows").append(
                        " <tr> " +
                        "   <td> " + (i + 1) + " </td> " +
                        "   <td > " + result[i].firstName + " </td> " +
                        "   <td> " + result[i].lastName + " </td> " +
                        "   <td > " + result[i].stuPhone + " </td> " +
                        "   <td>" + result[i].fatherName + "</td> " +
                        "   <td >" + result[i].fatherPhone + "</td> " +
                        "   <td> " + result[i].motherName + " </td> " +
                        "   <td> " + formattedDate + " </td> " +
                        "   <td> " + result[i].address + " </td> " +
                        "  </tr>"
                    )
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                if (xhr.status === 409) {
                    alert("Duplicate Entry")
                } else if (xhr.responseJSON && xhr.responseJSON.sqlMessage && xhr.responseJSON.sqlMessage.includes('Duplicate entry')) {
                    console.log(xhr)
                    alert("You have already Applied please Check Status or complete further steps or Internal Error")
                } else {
                    console.log(xhr)
                    alert("An error occurred while submitting the bank details. Please try again later.")
                }
            }
        });
    })


    $("#get_edu_details").on("click", (e) => {
        e.preventDefault()

        const detail = {
            usn: $("#usn").val(),
            // year : $("#year").val()
        }

        $.ajax({
            url: "http://localhost:3500/viewEduDetails",
            type: "post",
            data: detail,
            success: function (result) {
                // alert("success");
                if (result.length === 0) {
                    alert("No Applicants")
                }
                $(".edu").empty()
                console.log(result)
                for (let i = 0; i < result.length; i++) {
                    $(".edu").append(
                        " <tr> " +

                        "   <td> " + (i + 1) + " </td> " +
                        "   <td > " + result[i].schoolName + " </td> " +
                        "   <td> " + result[i].sslcRegNo + " </td> " +
                        "   <td > " + result[i].scchoolPassYear + " </td> " +
                        "   <td> " + result[i].sslcPerecntage + " </td> " +
                        "   <td>" + result[i].collegeName + "</td> " +
                        "   <td> " + result[i].pucRegNo + " </td> " +
                        "   <td >" + result[i].pucPassYear + "</td> " +
                        "   <td> " + result[i].pucPercentage + " </td> " +
                        "  </tr>"
                    )
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                if (xhr.status === 409) {
                    alert("Duplicate Entry")
                } else if (xhr.responseJSON && xhr.responseJSON.sqlMessage && xhr.responseJSON.sqlMessage.includes('Duplicate entry')) {
                    console.log(xhr)
                    alert("You have already Applied please Check Status or complete further steps or Internal Error")
                } else {
                    console.log(xhr)
                    alert("An error occurred while submitting the bank details. Please try again later.")
                }
            }
        });

    })
})