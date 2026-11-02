// Array of flowers.
let flowers = [];

function setup() {
  createCanvas(400, 400);
  frameRate(1);

  // Generate 20 flowers.
  flowerPower();
}
function draw() {
  background("lightblue");

 // For each flower in the array of flowers.
  for (let flower of flowers) {
    drawFlower(flower);
  }
}

// Function to create 20 flowers.
function flowerPower() {
  for (let i = 0; i < 20; i += 1 ) {
    // Create a flower in a random location.
    let flower = createFlower();

    // Add the flower to the flowers array.
    flowers.push(flower);
  }
}

// ... createFlower() and drawFlower()
function createFlower() {
  let flower = {
    x: random(20,380),
    y: random(20,380),
    size: random(20,75),
    lifespan: random(255,300),
    color: color(random(255), random(255), random(255))
  };
  return flower;
}
function drawFlower(flower) { 
  noStroke();
  fill(flower.color);

  // Draw petals.
  ellipse(flower.x, flower.y, flower.size / 2, flower.size);
  ellipse(flower.x, flower.y, flower.size, flower.size / 2);

  // Draw a yellow center.
  fill(255, 204, 0);
  circle(flower.x, flower.y, flower.size / 2);
}
  function updateAndDrawFlower(flower) {
    for (let flower of flowers) {
        drawFlower(flower);
        flower.lifespan -= 1;

        //Wilting effect for the flower.
        flower.size *= 0,95;

        //reduce lifespan of flower.
        flower.lifespan -= 1;
  
        if (flower.lifespan <= 0) {
            // save the index of the flower
            let i = flowers.indexOf(flower);

            // remove wilted flower
            flowers.splice(i, 1);
        }
    }


}
function mousePressed() {
  // Create a flower in a random location.
  let flower = createFlower();

  // reassign x to be mouseX and y to be mouseY
    flower.x = mouseX;
    flower.y = mouseY;
    
    // Add the flower to the flowers array.
    flowers.push(flower);   
}

function updateAndDrawFlowers() {
for (let flower of flowers) {

  // Draw the flower.
  drawFlower(flower);

  // Apply wilting effect by reducing size by 1%
  flower.size *= 0.99;

  // Reduce lifespan
  flower.lifespan -= 1;
  
  if (flower.lifespan <= 0) {
    // Save index of the flower.
    let i = flowers.indexOf(flower);
    
    // Remove wilted flower.
    flowers.splice(i, 1);
  }
}
}

// Function to create 20 flowers.
function flowerPower(){
for(let i = 0; i < 20; i+=1){
  // Create a flower in a random location.
  let flower1 = createFlower();
  
  // Add the flower to the flowers array.
  flowers.push(flower1);
}
}

function createFlower() {
let flower = {
  x: random(20,380),
  y: random(20,380),
  size: random(20, 75),
  lifespan: random(255,300),
  color: color(random(255), random(255), random(255))
};

return flower;
}

function drawFlower(flower) {
noStroke();
fill(flower.color);

// Draw petals.
ellipse(flower.x, flower.y, flower.size / 2, flower.size);
ellipse(flower.x, flower.y, flower.size, flower.size / 2);

// Draw center.
fill(255, 204, 0);
circle(flower.x, flower.y, flower.size / 2);

function mousePressed() {
    //Add a selected number of flowers to the garden when the mouse is pressed.
    let flower = createFlower();
    flower.x = mouseX;
    flower.y = mouseY;
    flowers.push(flower);
  }
}