function toggleTitle(id){
    var element=document.getElementById(id);
    if(document.getElementById(id).style.visibility=="hidden"){
        document.getElementById(id).style.visibility="visible";
    }
    else{
        document.getElementById(id).style.visibility="hidden";
    }
}