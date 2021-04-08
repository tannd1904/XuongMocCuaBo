var line = document.getElementsByClassName('line');
       
for(let i = 0 ; i < line.length ; i ++){
    
    document.getElementById('icon-click'+i).onclick = function(){
        for(let j = 0; j < line.length; j++){
            document.getElementById('line'+j).style.display = "none";
            document.getElementById('story-box'+j).style.display = "none";
        }
        document.getElementById('line'+i).style.setProperty("display","block");
        document.getElementById('story-box'+i).style.setProperty("display","block");
        
}
}