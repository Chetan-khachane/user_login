var value=[];

var dataBase=[
    {
        username:"chetan",
        password:"123",
        email:"chetankhachane655@gmail.com"
    },
    {
        username:"yuvraj",
        password:"yuvi",
        email:"yuvrajkhachane96@gmail.com"
    },
    {
        username:"vaibhavi",
        password:"vaichetu",
        email:"vaibhavikhachane30@gmail.com"
    },
    {
        username:"vidya",
        password:"vivid",
        email:"vidyakhachane27@gmail.com"
    }
]


//to get data from user
document.getElementsByClassName("sub")[0].addEventListener("click",function(){
   var res=true;
    for(let i=0;i<3;i++)
    {
    value[i]=document.getElementsByClassName("fields")[i].value;
    };
    for(i=0;i<3;i++)
    {
        if(value[i]=="")
        {document.getElementsByClassName("fields")[i].value="!Input required";
        res=false;}

    }
    if(res)
    signInUser(value);
});




//for login
function signInUser(credentials)
{
    var result=false;
    for(let i=0,j=0;i<dataBase.length;i++)
    {
        if(credentials[j]===dataBase[i].username
            && credentials[j+1]===dataBase[i].password 
            && credentials[j+2]===dataBase[i].email)
           { 
               document.write("Successfully Logged!!!");
               result=true;
                break;
           }
    }
    if(result===false)
    document.write("Sorry,Wrong credentials given.");
}




//eye hide and visible effect.
var input=document.querySelectorAll("input")[1];
var eye=document.querySelector("img");
console.log(input)
eye.addEventListener("click",function(){

    eye.classList.toggle("eye-hide");

    if(input.type=="password")
     input.type="text";   
    else
    input.type="password";
}
);