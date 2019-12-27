var WorldObjects = []

var backround = new Rectangle(5, 5)
backround.innerColor = Color3.fromRGB(83, 252, 137)

window.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    console.info(delta);
    if(delta == 1) {
        //zoom in
        console.log("Zoom in")
        backround.size = Vector2.new(backround.size.x + backround.size.x/20, backround.size.y + backround.size.y/20)
        /*WorldObjects.forEach(function(Obj, index){
            var StartSize = Obj.size
            Obj.size = Vector2.new(Obj.size.x + Obj.size.x/20, Obj.size.y)
            Obj.position = Vector2.new(Obj.position.x - StartSize.x / 20, Obj.position.y)
        })*/
    } else {
        //zoom out
        console.log("Zoom out")
    }
});
var road = new Road(Vector2.new(0.5, 0.5), 10, "Up")
var road = new Road(Vector2.new(0.5, 0.5), 10, "Right")

WorldObjects.push(backround)

var Dragging = false
var OrigClickPos
Mouse.MouseDown.connect(function(e){
    var VectorMousePos = Vector2.new(e.x / window.innerWidth, e.y / window.innerHeight)
    OrigClickPos = VectorMousePos
    Dragging = true
    console.log("Clicked at " + VectorMousePos.x + ", " + VectorMousePos.y)
    startPositions = []
    WorldObjects.forEach(function(Obj, index){
        startPositions.push(Obj.position)
    })
})

Mouse.MouseUp.connect(function(e){
    Dragging = false
    startPositions = []
    WorldObjects.forEach(function(Obj, index){
        startPositions.push(Obj.position)
    })
})
var startPositions = []
Mouse.MouseMove.connect(function(e){
    if(Dragging == true) {
        var VectorMousePos = Vector2.new(e.x / window.innerWidth, e.y / window.innerHeight)
        WorldObjects.forEach(function(Obj, index){
            Obj.position = Vector2.new(startPositions[index].x - (OrigClickPos.x - VectorMousePos.x), startPositions[index].y - (OrigClickPos.y - VectorMousePos.y))
        })
    }
})