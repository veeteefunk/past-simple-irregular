const form = document.querySelector('form');
const iconRight1 = document.getElementById("icon-right1")
const iconWrong1 = document.getElementById("icon-wrong1")
const iconRight2 = document.getElementById("icon-right2")
const iconWrong2 = document.getElementById("icon-wrong2")
const iconRight3 = document.getElementById("icon-right3")
const iconWrong3 = document.getElementById("icon-wrong3")
const iconRight4 = document.getElementById("icon-right4")
const iconWrong4 = document.getElementById("icon-wrong4")
const iconRight5 = document.getElementById("icon-right5")
const iconWrong5 = document.getElementById("icon-wrong5")
const iconRight6 = document.getElementById("icon-right6")
const iconWrong6 = document.getElementById("icon-wrong6")
const iconRight7 = document.getElementById("icon-right7")
const iconWrong7 = document.getElementById("icon-wrong7")
const iconRight8 = document.getElementById("icon-right8")
const iconWrong8 = document.getElementById("icon-wrong8")
const iconRight9 = document.getElementById("icon-right9")
const iconWrong9 = document.getElementById("icon-wrong9")
const iconRight10 = document.getElementById("icon-right10")
const iconWrong10 = document.getElementById("icon-wrong10")

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    const ex1 = document.getElementById("ex1").value
    const ex2 = document.getElementById("ex2").value
    const ex3 = document.getElementById("ex3").value
    const ex4 = document.getElementById("ex4").value
    const ex5 = document.getElementById("ex5").value
    const ex6 = document.getElementById("ex6").value
    const ex7 = document.getElementById("ex7").value
    const ex8 = document.getElementById("ex8").value
    const ex9 = document.getElementById("ex9").value
    const ex10 = document.getElementById("ex10").value

    ex1 == "bought" ? iconRight1.style.visibility = "visible" : iconWrong1.style.visibility = "visible";
    ex2 == "took" ? iconRight2.style.visibility = "visible" : iconWrong2.style.visibility = "visible";
    ex3 == "came" ? iconRight3.style.visibility = "visible" : iconWrong3.style.visibility = "visible";
    ex4 == "stood" ? iconRight4.style.visibility = "visible" : iconWrong4.style.visibility = "visible";
    ex5 == "sang" ? iconRight5.style.visibility = "visible" : iconWrong5.style.visibility = "visible";
    ex6 == "did" ? iconRight6.style.visibility = "visible" : iconWrong6.style.visibility = "visible";
    ex7 == "found" ? iconRight7.style.visibility = "visible" : iconWrong7.style.visibility = "visible";
    ex8 == "got" ? iconRight8.style.visibility = "visible" : iconWrong8.style.visibility = "visible";
    ex9 == "went" ? iconRight9.style.visibility = "visible" : iconWrong9.style.visibility = "visible";
    ex10 == "saw" ? iconRight10.style.visibility = "visible" : iconWrong10.style.visibility = "visible";
});