function parag()
{

    var obj=document.getElementById('note')
    obj.setAttribute("style","display:block;transition-delay: 300ms;")
    

    var obj = document.getElementById("note-list");
    obj.setAttribute("style",  

    "background-color: #feefc3;border-top-right-radius:40%;border-bottom-right-radius:40%;transition-delay: inherit;");

    
}

function out()
{
    var obj=document.getElementById('note')
    obj.setAttribute("style","display:none;")

    var obj=document.getElementById("note-list")
    obj.setAttribute("style","background-color:tranparent;")
}