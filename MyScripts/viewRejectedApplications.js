$(function () {

    const container = document.getElementById('rows');
    container.addEventListener('click', function (event) {
        const buttonId = event.target.id;
        console.log(`Button ID: ${(buttonId[0])} `);
        var student_id = document.getElementById("stu-" + buttonId[0]).innerHTML
        var stdyear = document.getElementById("year-" + buttonId[0]).innerHTML

        if (event.target.classList.contains('btn')) {
            const detail = {
                student_id: student_id
            }
            if (buttonId[2] === "a") {
                $.ajax({
                    url: "http://localhost:3500/approveApplication",
                    type: "post",
                    data: detail,
                    success: function (result) {
                        alert("approved " + student_id)
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
            }


            else if (buttonId[2] === "r") {
                $.ajax({
                    url: "http://localhost:3500/rejectApplication",
                    type: "post",
                    data: detail,
                    success: function (result) {
                        alert("rejected : " + student_id)
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
            }



            else if (buttonId[2] === "s") {
                // alert("set :" + student_id + " Year :" + stdyear)
                sessionStorage.setItem("user_tab_id", student_id)
                sessionStorage.setItem("user_tab_year", stdyear)
                // return
                window.location = "../Components/setFees.html"
            }

            else if (buttonId[2] === "v") {
                // alert("set :" + student_id + " Year :" + stdyear)
                sessionStorage.setItem("user_tab_id", student_id)
                sessionStorage.setItem("user_tab_year", stdyear)
                // return
                window.location = "../Components/viewDetails.html"
            }
        }
    });




    
    $("#getApplications").on("click", (e) => {
        e.preventDefault()
        $.ajax({
            url: "http://localhost:3500/viewRejectedApplications",
            type: "get",
            success: function (result) {
                if (result.length === 0) {
                    alert("No Applicants")
                }
                $("#rows").empty()
                console.log(result)
                formattedResult = $.map(result, (item) => {
                    let formattedDate = new Date(item.date).toISOString().slice(0, 10)
                    return {
                        ...item,
                        date: formattedDate
                    }
                })
                for (let i = 0; i < formattedResult.length; i++) {
                    $(".rows").append(
                        " <tr> " +

                        "   <td> " + (i + 1) + " </td> " +
                        "   <td id='stu-" + i + "'> " + formattedResult[i].Register_id + " </td> " +
                        "   <td> " + formattedResult[i].Student_name + " </td> " +
                        "   <td > " + formattedResult[i].admission_type + " </td> " +
                        "   <td id='year-" + i + "'>" + formattedResult[i].admission_year + "</td> " +
                        "   <td >" + formattedResult[i].date + "</td> " +
                        "   <td> " + formattedResult[i].branch + " </td> " +
                        "   <td> " + formattedResult[i].register_no + " </td> " +
                        "   <td> " + formattedResult[i].rank + " </td> " +
                        "   <td> " + formattedResult[i].category + " </td> " +
                        "   <td> <button id='" + i + "-approve' class='btn approve btn-sm btn-success'>  Approve</button>  </td> " +
                        // "   <td> <button id='" + i + "-reject' class='btn approve btn-sm btn-danger'>  Reject</button>  </td> " +
                        "   <td> <button id='" + i + "-set' class='btn set btn-sm btn-warning'>  set</button>  </td> " +
                        "   <td> <button id='" + i + "-view' class='btn set btn-sm btn-info'>View</button>  </td> " +
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