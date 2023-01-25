let strokeColor = ""



window.addEventListener("load", () => {
    const canvas = document.querySelector('#canvas')
    const context = canvas.getContext('2d')

    // Resizing 

    function resizeCanvas() {
        canvas.height = window.innerHeight - 6
        canvas.width = window.innerWidth - 50
        window.addEventListener('resize', resizeCanvas)
    }
    resizeCanvas()

    let painting = false

    //Styling variables
    const cl =  document.getElementById("cl")
    const colors = [...document.querySelectorAll('.color')]
    colors.map(color => color.onclick = function () {
        strokeColor = color.value;
       cl.innerHTML = `<h1 id='p' style="color: ${strokeColor};">${strokeColor}</h1>`
       setTimeout(() => {cl.removeChild(document.getElementById('p'));}, 1000);

    })
   //document.querySelector('#button-red').onclick = function () { strokeColor = "red"; console.log(strokeColor) }


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


    canvas.addEventListener("mousedown", startPosition)
    canvas.addEventListener("mouseup", finishedPosition)
    canvas.addEventListener("mousemove", draw)




})
