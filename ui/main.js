//console.log('Loaded!');

var button =document.getElementById('counter');
button.onclick=function() {

    //mk req to counter end point
    var request=new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange=function() {
        if(request.readyState === XMLHttpRequest.DONE){
        //action
            if(request.status === 200){
                var counter=request.responseText;
                //counter=counter+1;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    //make req
   request.open('GET','http://ssameerabanu07.imad.hasura-app.io/counter',true);
   request.send(null);
};