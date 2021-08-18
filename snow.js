class snow{

constructer(x,y,width,height){
    var options = {
        'restitution':0.8,
        'friction':0.5,
        'density':1.0
    }   
this.body = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;
this.image = loadImage("snow4.webp");

display();

}
}

   

    



