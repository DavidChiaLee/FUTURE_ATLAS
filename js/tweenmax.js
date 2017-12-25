/*三個box*/
/*第一物件*/
$(function(){
    /*從a到b點幾秒*/
    //TweenMax.fromTo(".box", 1 , {a},{b})
    //有時間順序
    TweenMax.staggerFromTo(".box", 1, {
        x: 0,
        // y: -20,
        // opacity: 0
    }, {
        x: 120,
        // y:0,
        // opacity: 1,
        // scale : 1,
        rotationY : 360,
        transformOrigin:'100px  20px', //定位點
        autoAlpha: 0, //結束點自動消失  
        yoyo : true, //搭配repeat 使用，會從第二動作回來
        repeat : 1, //如果沒使用yoyo，就回從第一動作開始
        ease: Power4.easeOut
    } ,1);
});

/*第二物件*/
/*置換 className*/
// $(function(){
//     /*從a到b點幾秒*/
//     //TweenMax.fromTo(".box", 1 , {a},{b})
//     //有時間順序
//     TweenMax.to(".session ", 1, {
//         x: 0,
//         opacity: 1,
//         className: '+=boxer' //增加
//     })
// });


$(function(){
    /* bezier*/
     // TweenMax.to(" .box55", 3, {
     //     bezier : {
     //         values : [{x :100,y: 200},{x: 250 , y:600},{x: 560, y: 50}
     //         ,{x: 250 , y:600},{x : 0,y: 0}],
     //         autoRotate: false
     //     }
     // });

    /* SVG rect*/
     TweenMax.to(" #rects", 3, {
        attr:{
            width:500,
            height:300,

         }
     });

    //有時間軸的動畫
    // repeat:1 只會跑一4次, 0 無限循環
    // repeatDelay:1 ,動畫結束後1秒，開始下一個動畫
    var tl = new TimelineMax({
        repeat:1,
        repeatDelay:1
    });

    tl.add(TweenMax.to(".box4 ", 2, {
        bezier : {
         curviness: 1.25,
         values : [{x : 100,y: 39},{x: 25 , y:259},{x: 40, y: 50} ,{x: 360, y: 150} ,{x: 0, y: 0} ],
        //  autoRotate:true
        }
    }))

    //把物件加在動畫物件上
    tl.add(TweenMax.to(".box5 ", 2, {
        bezier : {
         curviness: 1.25,
         values : [{x : 100,y: 200},{x: 250 , y:20},{x: 400, y: 100} ,{x: 560, y: 150} ,{x: 0, y: 0} ],
        //  autoRotate:true
        }
    }));

    tl.add(TweenMax.to(".box6 ", 2, {
        bezier : {
         curviness: 1.25,
         values : [{x : 100,y: 39},{x: 250 , y:250},{x: 200, y: 500} ,{x: 360, y: 150} ,{x: 0, y: 0} ],
        //  autoRotate:true
        }
    }))
});

//Scrollmagic
$(function(){
    //先建立場景 
    var controller = new ScrollMagic.Controller();

    //設計一段動畫
    var tween01 = TweenMax.to(".section_03 .box1", 2, {
        bezier: {
            curviness: 1.25,
            values: [{
                x: 100,
                y: 39
            }, {
                x: 25,
                y: 259
            }, {
                x: 40,
                y: 50
            }, {
                x: 360,
                y: 150
            }, {
                x: 0,
                y: 0
            }],
            //  autoRotate:true
        }
    });

    console.log('scroll ok');

    //scroll 處發點

    var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger1", //觸發點id
        })
        .setTween(tween01) // 找到動畫事件
        //trigger1滑到start1才觸動
        .addIndicators()  //自動顯示觸發點指標 start1、trigger1
        .addTo(controller) //最後加到場景裡面

    //第二場景

    
    //class = boxso x軸偏移100
    var tween02 =TweenMax.to('.boxso' ,1 ,{
      x: 100
    })
    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        offset : '10px', // 觸發偏移量
        duration:'200px',//動畫結束點
        reverse:true   //false跑一次 reverse:true(預設)-->跑很多次
    })
    .setClassToggle('.boxers' , 'fadeIn') //.boxers 選擇器  fadein 會塞入的class
    .setTween(tween02) //同時增加 動畫進來
    .addIndicators()
    .addTo(controller)
    console.log('scroll_04 ok');

    //找到場景
    var scene = document.getElementById('parallax_box');
    //把滾動視差加入場景
    var parallax = new Parallax(scene);
});




$(function(){
	/*從a到b點幾秒*/
	//TweenMax.fromTo(".box", 1 , {a},{b})
	TweenMax.fromTo(".title",5, {
        x: -10,
        y:50,
        color:"blue",
        opacity: 0
    }, {
        x: 0,
        y:0,
        color:"red",
        opacity: 1,

        ease: Bounce.easeOut
    });
    // console.log("gg");
});

$(function(){
    /*從a到b點幾秒*/
    //TweenMax.fromTo(".box", 1 , {a},{b})
    TweenMax.fromTo(".titlep", 1, {
        x: -10,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        delay :4,
        ease: Bounce.easeOut
    });
    // console.log("gg");
});

