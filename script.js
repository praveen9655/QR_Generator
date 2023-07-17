let inText = document.getElementById('inText');
let inImg = document.getElementById('qrImage');
let errMsg = document.getElementById('errMsg');
function qrGen(){
    if(inText.value == ''){
        errMsg.style.display = 'block';

    }

    else{
        errMsg.style.display = 'none';
        inImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+ inText.value;
    }
}
