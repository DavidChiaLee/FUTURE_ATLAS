$(function(){
	// window.alert("juju");
	/*從a到b點幾秒*/
	//TweenMax.fromTo(".box", 1 , {a},{b})
	TweenMax.fromTo(".title", 1, {
        x: -10,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        ease: Bounce.easeOut
    });
    // console.log("gg");
})