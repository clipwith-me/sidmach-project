let retireAge = 60;
let government = true;
if (retireAge >= 30 && government) {
    alert('You can now retire')   
} else if (retireAge < 59){
    alert('You are yet to retire');
} else{
    alert('You must be up to 60 for you to retire');
}

// online shopping
const myCart = 2;
const verify = true;
if (myCart == 2){
    confirm('Proceed to puchase your product')
} else if(myCart == 2 || verify > 0){
    confirm('We have some issue verifying it you')
} else{
    confirm('You cannot purchase any order for now')
}

//user login
let username = 'John doe';
let password = 'richesunaak';
let boardMember = true;

if (username === 'John doe' && password == 'richesunaak') {
    alert(`Welcome ${username}`);
} else if(username == 'John doe' || admin){
    alert('Welcome log in with your Board details');
} else {
    alert('Your username and password is incorrect')
}   

//Age validity
const age = 18;
const check = false;
if (age >= 18 || !check) {
    confirm('You are now at your prime age');
} else if(age == 20 && !check) {
    confirm('You are yet to be at your prime age');
} else{
    confirm('You are not up to the age standard');
}

//gender validity
let boy = 'male';
let girl = 'female';
if (boy  === 'male' && girl == 'female') {
    alert('')
} else {
    
}
