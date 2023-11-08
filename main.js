const passwordbox =document.getElementById('password')

const lenth =12;
const uppercase ="QWERTYUIOPLKJHGFDSAZXCVBNM";
const lowercace ="qwertyuioplkjhgfdsazxcvbnm";
const number ="0123456789";
const symbol ="@#$%^&*()_<>}{";


const allchars = uppercase+lowercace+number+symbol;

function createpassword(){
    let password ="";
    while(lenth >password.length){
        password+= allchars[Math.floor(Math.random() *allchars.length)]
    }
    passwordbox.value=password;
}


