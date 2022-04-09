let bc;
var cat;

function setup() {
  createCanvas(1920, 1080);
  bc = loadImage('assets/catbackground-01.jpg');

  cat = createSprite(850, 850, 184.5, 102.75);
  var myAnimation = cat.addAnimation('sitting', 'assets/catstill.png', 'assets/catstill2.png', 'assets/catstill3.png');
  myAnimation.offY = 15;
  cat.addAnimation('walking', 'assets/catwalk.png', 'assets/catwalk2.png', 'assets/catwalk3.png');
  //ghost.addAnimation('spinning', 'assets/ghost_spin0001.png', 'assets/ghost_spin0003.png');

}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(bc, 0, 0);
  //background(220);
  //if mouse is to the left
  if(mouseX < cat.position.x - 10) {
    cat.changeAnimation('walking');
    //flip horizontally
    cat.mirrorX(-1);
    //negative x velocity: move left
    cat.velocity.x = -2;
  }
  else if(mouseX > cat.position.x + 10) {
    cat.changeAnimation('walking');
    //unflip
    cat.mirrorX(1);
    cat.velocity.x = 2;
  }
  else {
    //if close to the mouse, don't move
    cat.changeAnimation('sitting');
    cat.velocity.x = 0;
  }

  //if(mouseIsPressed) {
    //the rotation is not part of the spinning animation
    //cat.rotation -= 10;
    //cat.changeAnimation('spinning');
  //}
  //else
    //cat.rotation = 0;

  //up and down keys to change the scale
  //note that scaling the image quality deteriorates
  //and scaling to a negative value flips the image
  if(keyIsDown(UP_ARROW))
    cat.scale += 0.05;
  if(keyIsDown(DOWN_ARROW))
    cat.scale -= 0.05;

  //draw the sprite
  drawSprites();
}
