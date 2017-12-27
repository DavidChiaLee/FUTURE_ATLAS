function doFirst() {
    //先跟HTML畫面產生關聯(尋找物件)，再建事件聆聽的功能
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    context.strokeStyle = '#35ffba';
    context.lineWidth = 10;

    context.beginPath();
    context.moveTo(15, 20);
    context.lineTo(200, 20);
    context.lineTo(250, 80);
    context.lineTo(250, 300);
    context.stroke();
}
window.addEventListener('load', doFirst);