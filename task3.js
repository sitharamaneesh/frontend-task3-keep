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


function newlist(){

    var newlist_button=document.getElementById('newlist_id')
    newlist_button.setAttribute("style","opacity: 0.87;background-color: rgba(95,99,104,0.157);")

}

function out_newlist()
{
    var newlist_button=document.getElementById('newlist_id')
    newlist_button.setAttribute("style","opacity: 0.87;background-color: transparent")
}

function enter_note()
{

    var list=document.getElementById('newlist_id');
    list.setAttribute("style","display:none;")

    var title=document.getElementById('title_div');
    title.innerHTML="Title...";
    title.setAttribute("style","flex:1;width:100%;")
     
    var note=document.getElementById('note_div');
    note.setAttribute("style","display:block;min-height:150px;")

    
}

function leave_note()
{
    var title=document.getElementById('title_div');
    title.innerHTML="Take a note..."; 

    var note=document.getElementById('note_div');
    note.setAttribute("style","display:none;")
}