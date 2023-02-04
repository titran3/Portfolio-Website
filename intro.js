let start = document.querySelector(".start");

start.onclick = function() {
	window.location="2nd.html";
};

var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});

window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY
});

cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if(link.classList.contains('small')){
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }
		var elem=document.createElement('div');
		elem.setAttribute('class','trail')
		elem.setAttribute('style','left: ${e.clientX -10}px; top: $(e.clientY -10}px; ');
		
		elem.onanimationend=()=>{
			elem.remove();
		}
		body.insertAdjacentElement('beforeend',elem);
    });
});

var body=document.body;