console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML='new one';
var img = document.getElementById('madi');
function moveRight()
{
    marginLeft=marginLeft + 10;
    img.style.marginLeft= marginLeft+"px";
}
img.onclick = function() {
    var interval=setInterval(moveRight,200);
    
};