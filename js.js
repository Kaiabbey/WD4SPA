onstart();



function ShowPage(field){
    var Location = field.split("-");
    var last = localStorage.getItem("current");
    if(last != null){
        var lastsplit = last.split("-");
        document.getElementById(lastsplit[1]).style.display = "none";
        setactive(lastsplit[1]);
    }
    document.getElementById(Location[1]).style.display = "block";
    localStorage.setItem("current", field);
    setactive(Location[1])
}

function onstart(){
    var lastpage = localStorage.getItem("current");
    console.log(lastpage)
    if(lastpage != null){
        ShowPage(lastpage);
    }
    else{
        ShowPage("0-Home");
    }

}

function setactive(target){
    var newtar = "a-" + target;
    document.getElementById("a-Home").style.backgroundColor = '';
    document.getElementById("a-About").style.backgroundColor = '';
    document.getElementById("a-Blog").style.backgroundColor = '';
    document.getElementById("a-Contact").style.backgroundColor = '';
    document.getElementById(newtar).style.backgroundColor = 'gray';
}


function navscroll(scrollpos){
    console.log(scrollpos);
    if(scrollpos>100){
        document.getElementById("navbar").style.display = 'none';
        document.getElementById("header").style = 'width:50px; height:50px; margin:5px;';
        document.getElementById("header").style.borderRadius = '100%';
        document.getElementById("uparrow").style.display = 'block';
    }
    else{
        document.getElementById("navbar").style.display = '';
        document.getElementById("header").style = 'width:100vw; margin:0px;';
        document.getElementById("header").style.borderRadius = '0%';
        document.getElementById("uparrow").style.display = 'none';
    }
   
}


function scrollhome(){
    window.scrollTo(0,0);

}


///listners

document.addEventListener('scroll', function(e) {
    var lastKnownScrollPosition = window.scrollY;
    navscroll(lastKnownScrollPosition);
 });