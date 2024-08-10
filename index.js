$(".number").on("click", function() {
    var number = $(this).text();
    $(".calculator__display").text(function(index, currentText) {
        if (currentText === "0") {
            return number; 
        } else {
            return currentText + number; 
        }
    });
});
$(".removing").on("click",function(){
    $(".calculator__display").text(function(index,currentText){
        if (currentText.length === 1) {
            return "0"; 
        } else {
            return currentText.slice(0, -1); 
        }
    });
});
$(".deleting").on("click",function(){
    $(".calculator__display").text(function(index,currentText){
        return "0";
    });
});
$(".operator").on("click",function(){
    var operator=$(this).text();
    $(".calculator__display").text(function(index,currentText){
        return currentText + operator;
        
    });
});
$(".multiply").on("click",function(){
    $(".calculator__display").text(function(index,currentText){
        return currentText + "X";
    });
});
$(".equal").on("click", function() {
    var displayText = $(".calculator__display").text().trim();
    try {
        var result = eval(displayText); 
        $(".calculator__display").text(result); 
    } 
    catch (error) {
        $(".calculator__display").text("Error"); 
    }
});
var buttons= document.querySelectorAll("button");
buttons.forEach(function(button) {
    button.addEventListener("click",function(){
        button.classList.add("pressed");
        setTimeout(function(){
            button.classList.remove("pressed");
        },100);
    });
});