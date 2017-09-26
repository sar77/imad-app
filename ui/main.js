console.log('Loaded!');
var counter=0;
var button =document.getElementById('counter');
button.onclick=function()
{
    //mk req to counter end point
    
    //capture the response and store it in a variable
    
    //render the var in the correct span
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
}