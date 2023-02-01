let strokeColor = ""

window.addEventListener("load", () => {
    const canvas = document.querySelector('#canvas')
    const context = canvas.getContext('2d')

    // Resizing 

    function resizeCanvas() {
        if(canvas.width <= 600){
            canvas.height = window.innerHeight - 55
            canvas.width = window.innerWidth - 4
        }
        else{
            canvas.height = window.innerHeight - 4
            canvas.width = window.innerWidth - 53
        }
    }
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()
    window.addEventListener('load', resizeCanvas)
    resizeCanvas()
    // I really do not understand why i have to call the function twice, after each eventlistener.


    let painting = false

    //Styling variables
    const clsw =  document.getElementById("color-switch-text")
    const colors = [...document.querySelectorAll('.color')]
    colors.map(color => color.onclick = function () {
        strokeColor = color.value;
        clsw.innerHTML = `<h1 id='TemporaryHeading' style="color: ${strokeColor};">${strokeColor}</h1>`
        let temph1 = document.getElementById('TemporaryHeading')
        setTimeout(() => {
        temph1.style.animation = "fadeOut 1s ease-in-out";
            }, 1000 );
        temph1.addEventListener('animationend', function(){
            clsw.removeChild(temph1);
         });

    })

    function startPosition(e) {
        painting = true
        draw(e)
    }

    function finishedPosition() {
        painting = false
        context.beginPath()
    }

    function draw(e) {
        if (!painting) return;
        context.lineWidth = 10
        context.lineCap = "round"
        context.lineTo(e.clientX, e.clientY)
        context.stroke()
        context.beginPath()
        context.moveTo(e.clientX, e.clientY)
        context.strokeStyle = strokeColor
    }


    canvas.addEventListener("mousedown" || "touchstart", startPosition)
    canvas.addEventListener("mouseup" || "touchend", finishedPosition)
    canvas.addEventListener("mousemove" || "touchmove", draw)




})
