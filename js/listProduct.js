var idParent = null;

function changeImage(id) {
	var menuItems = document.querySelectorAll('#' + idParent + ' .preview-pic div');
	for (var i = 0; i < menuItems.length; i++) {
		var menuItem = menuItems[i];
		console.log(menuItem);
		if (menuItem.classList.toString() == "tab-pane active") {
			menuItem.classList.remove("active");
		}
	}
	var element = document.getElementById(id);
	element.classList.add("active");

}

function openOrClosePopup(id) {
	idParent = id;
	var element = document.getElementById(id);
	var menuItems = document.querySelectorAll('.site-product .product-list');
	// var divs = document.querySelectorAll("body > div:not(.card)");
	if (element.style.display === "none") {
		element.style.display = "block";
		document.getElementById("icon").style.pointerEvents="none";
		document.getElementById("header_id").style.filter="blur(4px)";
		document.getElementById("library-main").style.filter="blur(4px)";
		document.getElementById("row-content-main").style.filter="blur(4px)";
		document.getElementById("footer").style.filter="blur(4px)";
		for (var i = 0; i < menuItems.length; i++) {
			menuItems[i].style.filter = "blur(4px)";
			document.getElementsByClassName("banner-container")[i].style.filter = "blur(4px)";
			// divs[i].style.filter = "blur(4px)";
		}
		document.querySelector('#contact-site').style.filter = "blur(4px)";
		document.querySelector('#form-help').style.filter = "blur(4px)";
		document.querySelector('#footer').style.filter = "blur(4px)";

	} else {
		element.style.display = "none";
		document.getElementById("icon").style.pointerEvents="auto";
		document.getElementById("header_id").style.filter="blur(0px)";
		document.getElementById("library-main").style.filter="blur(0px)";
		document.getElementById("row-content-main").style.filter="blur(0px)";
		document.getElementById("footer").style.filter="blur(0px)";
		for (var i = 0; i < menuItems.length; i++) {
			menuItems[i].style.filter = "blur(0px)";
			document.getElementsByClassName("banner-container")[i].style.filter = "blur(0px)";
			// divs[i].style.filter = "blur(0px)";
		}
		document.querySelector('#contact-site').style.filter = "blur(0px)";
		document.querySelector('#form-help').style.filter = "blur(0px)";
		document.querySelector('#footer').style.filter = "blur(0px)";
		

	}
}
function openOrClosePopup_tc(id) {
	idParent = id;
	var element = document.getElementById(id);
	var menuItems = document.querySelectorAll('.site-product .product-list');
	var divs = document.querySelectorAll("body > div:not(.card)");
	var div2=document.querySelectorAll('div[id*="product-popup-"');
	console.log(div2);
	

	if (element.style.display === "none") {
		element.style.display = "block";
		document.body.style.pointerEvents = "none";
		for(let i=0; i<menuItems.length;i++){
			menuItems[i].style.filter = "blur(4px)";
			document.getElementsByClassName("banner-container")[i].style.filter = "blur(4px)";
			divs[i].style.filter = "blur(4px)";
		}
		// Mở click
		for (var i = 0; i < div2.length; i++) {
			div2[i].style.pointerEvents="auto";
		}
		document.querySelector("#header_id").style.filter = "blur(4px)";
		document.querySelector('#contact-site').style.filter = "blur(4px)";
		document.querySelector('#new-events').style.filter = "blur(4px)";
		document.querySelector('#new-events-card').style.filter = "blur(4px)";
		document.querySelector('#footer').style.filter = "blur(4px)";
		// document.getElementsByTagName("footer").style.filter = "blur(4px)";
		
	} else {
		element.style.display = "none";
		document.body.style.pointerEvents = "auto";
		for (var i = 0; i < menuItems.length; i++) {
			menuItems[i].style.filter = "blur(0px)";
			document.getElementsByClassName("banner-container")[i].style.filter = "blur(0px)";
			divs[i].style.filter = "blur(0px)";
		}
		document.querySelector("#header_id").style.filter = "blur(0px)";
		document.querySelector('#contact-site').style.filter = "blur(0px)";
		document.querySelector('#new-events').style.filter = "blur(0px)";
		document.querySelector('#new-events-card').style.filter = "blur(0px)";
		document.querySelector('#footer').style.filter = "blur(0px)";
		// document.getElementsByTagName("footer").style.filter = "blur(0px)";
	}
}

