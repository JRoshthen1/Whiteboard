window.addEventListener("load", () => {
    console.log('Canvas Loaded')
    const canvas = document.querySelector('#canvas')
    const context = canvas.getContext('2d')

    // Resizing 

    function resizeCanvas(){
        canvas.height = window.innerHeight-6
        canvas.width = window.innerWidth-50
    }
    resizeCanvas()

    let painting = false
    
    //Styling variables
    const colors = ["red", "green", "blue" ]

    function startPosition(e){
        painting = true
        draw(e)
    }

    function finishedPosition(){
        painting = false
        context.beginPath()
    }

    function draw(e){
        if(!painting) return;
        context.lineWidth = 10
        context.lineCap = "round"
        context.lineTo(e.clientX, e.clientY)
        context.stroke()
        context.beginPath()
        context.moveTo(e.clientX, e.clientY)
        context.strokeStyle = colors[1]
    }


    canvas.addEventListener("mousedown", startPosition)
    canvas.addEventListener("mouseup", finishedPosition)
    canvas.addEventListener("mousemove", draw)




})

window.addEventListener('resize', resizeCanvas())