class Box {
    constructor(x,y,width,height){
      var stat={
        isStatic:true,
      
      }
      
      this.Body=Bodies.rectangle(x,y,width,height,stat);
      this.width=width;
      this.height=height;

      World.add(world,this.Body)

    }

    display(){
      rectMode(CENTER);
      fill("red");
      rect(this.Body.position.x,this.Body.position.y,this.width,this.height);

    }

}
      