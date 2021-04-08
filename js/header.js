document.getElementById('icon').onclick = function()
{   
    var value = document.getElementById('header-items-id').style.display;
    if(value == "none")
    {
        document.getElementById('header-items-id').style.setProperty('display', 'block');
    }else
    {
        document.getElementById('header-items-id').style.setProperty('display', 'none');
    }
    
    var width = document.getElementById('header_id').offsetWidth;
    if(width < 768)
    {  
        var value = document.getElementById('header-items-id').style.display;
        document.getElementById('header-items-id').classList.remove('show');
				if(value == "none")
				{
					document.getElementById('header_id').style.setProperty('min-height', '96px');				
					document.getElementById('icon').classList.remove('fa-times');
					document.getElementById('icon').classList.add('fa-bars');
				}else
				{			
					document.getElementById('header_id').style.setProperty('min-height', '300px');
                    document.getElementById('icon').classList.remove('fa-bars');
					document.getElementById('icon').classList.add('fa-times');
				}
        // if(document.getElementById('icon').classList.contains('fa-bars') == true)
        // {
        //     document.getElementById('icon').classList.remove('fa-bars');
        //     document.getElementById('icon').classList.add('fa-times');
        //     document.getElementById('header_id').style.setProperty('min-height', '96px');
            
        // }else
        // {
        //     document.getElementById('header-items-id').classList.remove('show');
        //     document.getElementById('icon').classList.remove('fa-times');
        //     document.getElementById('icon').classList.add('fa-bars');
        //     document.getElementById('header_id').style.setProperty('min-height', '300px');
            
        // }
        
    }else
    {
        if(document.getElementById('icon').classList.contains('fa-bars') == true)
        {
            document.getElementById('header-items-id').classList.remove('hidden');
            document.getElementById('header-items-id').classList.add('show');
            document.getElementById('icon').classList.remove('fa-bars');
            document.getElementById('icon').classList.add('fa-times');
            document.getElementById('header_id').style.setProperty('min-height', '10.6vw');         
        }else
        {
            document.getElementById('header-items-id').classList.remove('show');
            document.getElementById('header-items-id').classList.add('hidden');
            document.getElementById('icon').classList.remove('fa-times');
            document.getElementById('icon').classList.add('fa-bars');
            document.getElementById('header_id').style.setProperty('min-height', '10.6vw');
        }
    } 
    
}