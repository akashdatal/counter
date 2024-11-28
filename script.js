const myCount = document.getElementById("count");
const nums = document.getElementById("num");
const altmsg =document.getElementById("altmsg")

let c = 0;
function incr(){
    bgchanger();
    if(c>20){
     alert('Maximum limit is 20'); 
    }
    else{
    myCount.textContent=c;
    oddeven();
    c++;
    }
}
function decr(){
    bgchanger();
    if(c==0){
    alert("Negetive Numbers Not allowed");
            
    }
    else{
        c--;  

    myCount.textContent=c;   
    oddeven()
}

}
function reset(){
    bgchanger();
    c=0;
    myCount.textContent=c;
    oddeven();
   
}
function oddeven(){
    bgchanger();
    if(c%2==0){
        nums.textContent=" Even ";
    }
    else{
        nums.textContent=" Odd"
    }
   
}
function bgchanger(){
    const bg= Math.floor(Math.random()*1987654321).toString(16);
    document.body.style.backgroundColor="#"+bg;
    
}