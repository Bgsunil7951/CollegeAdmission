let count = 1;
// let id = 1000;
let slNum = 1;
let allCars = [];
let qtty = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let user = sessionStorage.getItem("uname");
if (!user) $("#user").text("Guest");
else $("#user").text(user);


const addToCart = (event) => {
  let getId = (event.target.id);
  alert("id is : " + getId)
}



// ================================== Main function ===============================================
  // =========================== important view carefully ===========================================
  // =============================== insert car into cart of HTML page ==============================
  // $("#cars_list").on("click", "button", (e) => {
  //   e.preventDefault();
  //   let btype = $(this).attr("id").toString().substring(0, 3)
  //   alert("reached " + btype);
  //   // let i = $(this).attr("id").substring($(this).attr("id").indexOf(("-") + 1) )
  // $("#tbody").append(
  //     "<tr>"
  //     + "<th scope='row'>" + i + "</th>"
  //     + "<td>" + (slNum++) + "</td>"
  //     + "<td>" + (++qtty[i]) + "</td>"
  //     + "<td> " + allCars[i].carame + "</td>"
  //     + "<td> " + allCars[i].carPrice + "</td>"
  //     + "<td> " + (qtty[i]) * allCars[i].carPrice + "</td>"
  //     + "<td>12%</td>"
  //     + "<td>30 million$</td>"
  //     + "</tr>"

  // "<tr>"
  // + "<th scope='row'>" + id++ + "</th>"
  // + "<td>" + $("#cname_" + count).text() + "</td>"
  // + "<td>1</td>"
  // + "<td>28 million$</td>"
  // + "<td>12%</td>"
  // + "<td>30 million$</td>"
  // + "</tr>"
  // )
  //   $("#counter").text(count++);
  // });


  // $("#cars_list").on("click", "button", (e) => {
  //   e.preventDefault();
  //   let btype = $(this).attr("id").substring(0, 3)
  //   $("#tbody").append(
  //     "<tr>"
  //     + "<th scope='row'>" + res + "</th>"
  //     + "<td>" + $("#cname_" + count).text() + "</td>"
  //     + "<td>1</td>"
  //     + "<td>28 million$</td>"
  //     + "<td>12%</td>"
  //     + "<td>30 million$</td>"
  //     + "</tr>"

  //     // "<tr>"
  //     // + "<th scope='row'>" + id++ + "</th>"
  //     // + "<td>" + $("#cname_" + count).text() + "</td>"
  //     // + "<td>1</td>"
  //     // + "<td>28 million$</td>"
  //     // + "<td>12%</td>"
  //     // + "<td>30 million$</td>"
  //     // + "</tr>"
  //   )
  //   $("#counter").text(count++);
  // })

  // =============================== insert car ====================================================


  $(function () {
    $("#insert_Car").on("click", (e) => {
      e.preventDefault();
      let data = {
        carID: $("#carID").val(),
        carName: $("#carName").val(),
        carPrice: $("#carPrice").val(),
        carImage: $("#carImage").val(),
        carType: $("#carType").val(),
      };
    
      $.ajax({
        url: "http://localhost:9000/insertCarData",
        type: "POST",
        data: data,
        success: function (result) {
          alert("Success inserted");
        },
        error: function (err) {
          console.log(err);
        },
      });
    });



    // $("#insert_Car").on("click", (e) => {
    //   e.preventDefault();
    //   alert("clicked on insert");
    //   $.ajax({
    //     url: "http://localhost:9000/insertCarData",
    //     type: "POST",
    //     dataType: "json",
    //     success: function (result) {
    //       alert("Success inserted")
    //     },
    //   });
    // });

    // // ===================================   Show cars ================================================

    $("#showcars").on("click", function (e) {
      e.preventDefault();

      $.ajax({
        url: "http://localhost:9000/showCars",
        type: "GET",
        dataType: "json",
        success: function (result) {
          allCars = result;
          $("#cars_list").empty();
          for (let i = 0; i < result.length; i++) {
            $("#cars_list").append(
              "  <div class='col m-2   p-1 center box' style=' border :1px solid black; border-radius  : 10px'> " +
              "    <div class='card cart_box '> " +
              "      <img src=" +
              result[i].carImage +
              " height='250px' class='card-img-top rounded' alt='...'> " +
              "        <div class='card-body'> " +
              "          <h5 class='card-title'> <span id='cname_" +
              i +
              "' >" +
              result[i].carName +
              " </span> </h5> " +
              "            <div class='cart_text t_center'> " +
              "              <p>Lorem ipsum dolor sit amet, consecte.  </p> " +
              "              <strong>" +
              result[i].carPrice +
              " .Millon Rs</strong> <br>" +
              // "              <button class='btn btn-sm insert_Car add_to_cart btn-primary ml-3'   id='buy-" +
              // i + "'> Add to cart ..... " +
              // "              </button> " +
              " <button onClick='addToCart' id='insert_Car' > add </button> " + 
              "           </div> " +
              "         </div> " +
              "    </div>" +
              "  </div>"
            );
          }
        },
      });
    });




  // ================================ SEARCH PERTICULAR CAR TYPE ===========================================

  $("#searchItem").on("click", (e) => {
    e.preventDefault();
    let type = $("#search").val();
    alert("inside : " + type);
    $.ajax({
      url: "http://localhost:9000/getCar/" + type,
      type: "GET",
      dataType: "json",
      success: function (result) {
        alert("inside the function: " + type);
        allCars = result;
        $("#cars_list").empty();
        for (let i = 0; i < result.length; i++) {
          $("#cars_list").append(
            "  <div class='col m-2   p-1 center box' style=' border :1px solid black; border-radius  : 10px'> " +
            "    <div class='card cart_box '> " +
            "      <img src=" +
            result[i].carImage +
            " height='250px' class='card-img-top rounded' alt='...'> " +
            "        <div class='card-body'> " +
            "          <h5 class='card-title'> <span id='cname_" +
            i +
            "' >" +
            result[i].carName +
            " </span> </h5> " +
            "            <div class='cart_text t_center'> " +
            "              <p>Lorem ipsum dolor sit amet, consecte.  </p> " +
            "              <strong>" +
            result[i].carPrice +
            " .Millon Rs</strong> <br>" +
            "              <button class='btn btn-sm add_to_cart btn-primary ml-3  ' id='add_to_cart'> Add to cart " +
            "              </button> " +

            "           </div> " +
            "         </div> " +
            "    </div>" +
            "  </div>"
          );
        }
      },
    });
  });
});
