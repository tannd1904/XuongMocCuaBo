window.onload = function () {
    var width = document.getElementById('header_id').offsetWidth;
    if(width < 768)
    {
        var value = document.getElementById('header-items-id').style.display;
        if(value == "none")
        {
            document.getElementById('header_id').style.setProperty('min-height', '96px');				
            document.getElementById('icon').classList.remove('fa-times');
            document.getElementById('icon').classList.add('fa-bars');
        }else
        {
            document.getElementById('icon').classList.remove('fa-bars');
            document.getElementById('icon').classList.add('fa-times');
            document.getElementById('header_id').style.setProperty('min-height', '300px');
        }
    }else{
        var value = document.getElementById('header-items-id').style.display;
        if(value == "none")
        {
            document.getElementById('header_id').style.setProperty('min-height', '96px');
            document.getElementById('icon').classList.remove('fa-times');
            document.getElementById('icon').classList.add('fa-bars');
        }else
        {
            document.getElementById('icon').classList.remove('fa-bars');
            document.getElementById('icon').classList.add('fa-times');
            document.getElementById('header_id').style.setProperty('min-height', '300px');
        }
        document.getElementById('header_id').style.setProperty('min-height', '10.6vw');
    }
}