// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
let errorMessage = document.getElementById("error")
function error() {
    errorMessage.textContent = "Something Went Wrong"
    console.log(errorMessage)
}