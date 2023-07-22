
var result = "";//initial value of result is empty

// adding "click" event listener to each normal-btn
$(".Normal_btn").click(function () {
    // when a normal_btn is clicked
    // append the text of this button to result
    result = result + $(this).text();

    //display this text as result
    $("#result").text(result);
});

// clear single number
$("#delete_single_num").on("click", function () {
    result = result.substring(0, result.length - 1);
    $("#result").text(result);
})

// clear all numbers
$("#All-clear").on("click", function () {
    result = "";
    $("#result").text(result);
})

// equal-to action

$("#equalTo").on("click", function () {

    $("#history").text(result);

    if (result === "") {
        alert("Please enter any number !");
    } else {
        //perform calculation
        result = eval(result);
        $("#result").text(result);

        //update the history
    }

    $("p").on("click", function () {
        result = $("p").text();
        $("#result").text(result);
    })
})
