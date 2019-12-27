class Road {
    constructor(StartPosition, Length, Direction) {
        for (var i = 0; i < Length; i++) {
            if(Direction == "Right"){
                var roadSection = new Image("./HorizontalRoadSectionV1.png")
                
                roadSection.size = Vector2.new(.12, .1)
                roadSection.position = Vector2.new(StartPosition.x + roadSection.size.x/2 + (roadSection.size.x - 0.0004) * i, StartPosition.y)
                WorldObjects.push(roadSection)
                console.log("Road section created!")
            }
            else if(Direction == "Up") {
                var roadSection = new Image("./VerticalRoadSectionV1.png")
                
                roadSection.size = Vector2.new(.0498, .2438)
                roadSection.position = Vector2.new(StartPosition.x, StartPosition.y + roadSection.size.y/2 + (roadSection.size.y - 0.0008) * i)
                WorldObjects.push(roadSection)
                console.log("Road section created!")
            }
        }
    }
    
}