 window.onload =function () {
    var buttonClick=document.getElementById("showPercentage");
    var math=document.getElementById("math").value;
    var chem=document.getElementById("chem").value;
    var phys=document.getElementById("phys").value;
    var prog=document.getElementById("prog").value;
   
       
    buttonClick.onclick=() => {
        console.log(math);
        var total = parseFloat(math) + parseFloat(chem) + parseFloat(phys) + parseFloat(prog);
        alert("your total of 4 subjects is " + total);
        var grade = (total / 400) * 100;
        alert("your percentage is " + grade);
    }
        
}
