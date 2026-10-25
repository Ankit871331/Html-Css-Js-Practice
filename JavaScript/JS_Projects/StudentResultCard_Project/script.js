

function showHindiMarks() {
    document.getElementById("hindiMarks").textContent =
        document.getElementById("hindiInput").value;
}

function showEnglishMarks(){
    document.getElementById("englishMarks").textContent = 
        document.getElementById("englishInput").value;
}

function showMathsMarks(){
    document.getElementById("mathsMarks").textContent = 
        document.getElementById("mathsInput").value;
}

function showScienceMarks(){
    document.getElementById("scienceMarks").textContent = 
        document.getElementById("scienceInput").value;
}

function showComputerMarks(){
    document.getElementById("computerMarks").textContent = 
        document.getElementById("computerInput").value;
}


function generateMarksheet(){
    let hindi=Number(document.getElementById("hindiInput").value)
let english=Number(document.getElementById("englishInput").value)
let maths=Number(document.getElementById("mathsInput").value)
let science=Number(document.getElementById("scienceInput").value)
let computer=Number(document.getElementById("computerInput").value)

let total = hindi+english+maths+science+computer;

document.getElementById("totalMarks").textContent = total;

    document.querySelector(".student_info").style.display = "none";
    document.querySelector(".marks_sheet").style.display = "block";
}

