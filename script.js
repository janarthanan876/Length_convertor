function convert(){
    let length=number(document.getElementById("input").value);
    let convert=length/2;
    let result=document.getElementById("result");
    result.innerHTML=convert;
    }