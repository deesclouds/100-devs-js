// when we click the h1 of Final Rose we run the function hide
document.querySelector('#finalRose').addEventListener('click', hide)

// this function hides claire and sharleen's photo
function hide(){
	document.querySelector('#claire').style.display = 'none'
	document.querySelector('#sharleen').style.display = 'none'
}
