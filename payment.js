function cardNum(){
    let x=document.getElementById("card-number").value;
    if(x.length<16){
        document.getElementById("num_err").innerText="Invalid (Card num. should be 16 digits)"
    }else{
        document.getElementById("num_err").innerText=null
    }
}


function expDate(){
    let x=document.getElementById("exp-date").value;
    if(x.length<4){
        document.getElementById("exp_err").innerText="Invalid (exp. date should be MM/YY : 0422)"
    }else{
        document.getElementById("exp_err").innerText=null
    }
}

function Cvv(){
    let x=document.getElementById("cvv").value;
    if(x.length<3){
        document.getElementById("cvv_err").innerText="Invalid (cvv : 123)"
    }else{
        document.getElementById("cvv_err").innerText=null;
    }

}
document.getElementById("proceed-to").addEventListener("click",validate);
function x(id){
    return document.getElementById(id).value;
}
function validate(event){
  
    let name=x("card-number");
    let expiry_date=x("exp-date");
    let card_cvv=x("cvv");
    if(name!="" && expiry_date!="" && card_cvv!=""){
        append();
        setTimeout(()=>{
            window.location="confirm.html";
        },5000)
    }else{
        alert("please fill the card details correctly!")
    }
    
}
let container=document.getElementById("processing");
function append(){
    container.innerHTML=null;
    let img=document.createElement('img');
    img.src="processing_gif.gif";
    let p=document.createElement('p');
    p.innerText="Loading Next Step...";
    container.append(img,p);
}