function fun1(){
    document.getElementById("d1").innerHTML=document.getElementById("d").innerHTML;
    document.getElementById("d2").innerHTML=document.getElementById("d").firstChild.nodeValue;
    document.getElementById("d3").innerHTML=document.getElementById("d").childNodes[0].nodeValue;
}