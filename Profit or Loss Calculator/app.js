var CP;
var SP;
var result;

function cal(){
    CP= parseInt(document.getElementById("CP1").value);
    SP= parseInt(document.getElementById("SP1").value);

    if(CP==0 && SP==0){
       document.getElementById("123").innerHTML="Both the numbers cannot be zero or less than zero";
    }

else{
    //document.getElementById("123").innerHTML=CP;
    //document.getElementById("123").innerHTML=SP;
    if (Number(CP)> Number(SP)){
    document.getElementById("123").value="Loss";
}
else if(Number(SP) > Number (CP)){
    document.getElementById("123").value="Profit!";
   // document.getElementById("123").innerHTML.CP1;
    // document.getElementById("123").innerHTML.SP1;
}
 }
  }
  function profit(){
document.getElementById("profitT").value = (Number(SP) - Number(CP) )
  }
  function loss(){

    document.getElementById("lossT").value = (Number(CP) - Number(SP))
    }
      