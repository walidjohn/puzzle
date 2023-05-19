
function checkPassword() {
    
    var password = document.getElementById("password").value;
    if(password === "snail"){
        window.location="questionTwo.html";
    }

}

function checkPasswordTwo() {
    
    var password = document.getElementById("password").value;
    if(password === "hoda"){
        window.location="questionTwo.html";
    }

}

function showHint() {
    var visibility = document.getElementById("hint").style.visibility;
    if (visibility == "hidden") {
        document.getElementById("hint").style.visibility = "visible";
    }
    else {
        document.getElementById("hint").style.visibility = "hidden";
    }
}

document
    .getElementById("submitButton")
    .addEventListener("mouseover", function () {
        var password = document.getElementById("password").value;
        var submitButton = document.getElementById("submitButton");

        if (password !== "snail" && !submitButton.classList.contains("moved")) {
            submitButton.classList.add("moved");
        }

        else if (password !== "snail" && submitButton.classList.contains("moved")) {
            submitButton.classList.remove("moved");
        }
    });

