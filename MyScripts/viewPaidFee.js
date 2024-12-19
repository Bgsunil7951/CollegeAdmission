$(function () {

   

    
    $("#getFees").on("click", (e) => {
        e.preventDefault()
        let branch = $("#branch").val()
        let year = $("#year").val()
        if(branch == null || year == null){
            alert("Select Branch and Year")
            return
        }
        const details = {
            year : year, branch : branch
        }
        // alert( branch + " " + year)
        $.ajax({
            url: "http://localhost:3500/viewPaidFeesdetails",
            type: "post",
            data : details ,
            success: function (formattedResult) {
                // alert("reached")
                if (formattedResult.length === 0) {
                    alert("No Applicants")
                }
                $("#rows").empty()
                // console.log(result)
                
                for (let i = 0; i < formattedResult.length; i++) {
                    $(".rows").append(
                        " <tr> " +

                        "   <td> " + (i + 1) + " </td> " +
                        "   <td id='stu-" + i + "'> " + formattedResult[i].register_id + " </td> " +
                        "   <td> " + formattedResult[i].Student_name + " </td> " +
                        "   <td > " + formattedResult[i].admission_year + " </td> " +
                        "   <td id='year-" + i + "'>" + formattedResult[i].branch + "</td> " +
                        "   <td >" + formattedResult[i].installment_1 + "</td> " +
                        "   <td> " + formattedResult[i].installment_1_status + " </td> " +
                        "   <td> " + formattedResult[i].installment_1 + " </td> " +
                        "   <td> " + formattedResult[i].installment_2_status + " </td> " +
                        // "   <td> " + formattedResult[i].category + " </td> " +
                        // "   <td> <button id='" + i + "-approve' class='btn approve btn-sm btn-success'>  Approve</button>  </td> " +
                        // "   <td> <button id='" + i + "-reject' class='btn approve btn-sm btn-danger'>  Reject</button>  </td> " +
                        // "   <td> <button id='" + i + "-set' class='btn set btn-sm btn-warning'>  set</button>  </td> " +
                        // "   <td> <button id='" + i + "-view' class='btn set btn-sm btn-info'>View</button>  </td> " +
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