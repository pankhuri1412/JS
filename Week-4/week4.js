// function nicknameFunction(){
//     if (document.getElementById('yesNick').checked){
//   document.getElementById('nick').style.display="inline";
//   document.getElementById('nickname').setAttribute('required',true);
//     }
//     else{ 
//         document.getElementById('nickname').removeAttribute('required');
//         document.getElementById('nick').style.display="none";
//     }
// }

function billingFunction() {
    if (document.getElementById("same").checked) {
            document.getElementById("billingName").value = document.getElementById("shippingName").value;
    document.getElementById("billingZip").value = document.getElementById("shippingZip").value;
    }
    else {
      document.getElementById("billingName").value = "";
      document.getElementById("billingZip").value = "";
    }
}