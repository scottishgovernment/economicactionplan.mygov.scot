var loadHighResImages = function(){
	if (window.devicePixelRatio > 1) {

        var heroImage = document.querySelector('.hero-header__image');

        if (!heroImage) {
        	return;
        }

        var lowResSrc = heroImage.src;
        var highResSrc = lowResSrc.replace(/.png$/, '-x2.png');
     	heroImage.src = highResSrc;
    }
}

window.addEventListener('load', loadHighResImages);