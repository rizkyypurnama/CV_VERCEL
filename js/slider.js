var elms = document.getElementsByClassName( 'splide' );

for ( var i = 0; i < elms.length; i++ ) {
new Splide( elms[ i ] ).mount();
}

var splide1 = new Splide('#slider1', {
type: 'loop',
});

splide1.mount();

var splide2 = new Splide('#slider2', {
    type: 'loop',
});

splide2.mount();
var splide3 = new Splide('#slider3', {
    type: 'loop',
});

splide3.mount();