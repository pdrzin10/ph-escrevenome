let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;

let velociadeXBolinha = 2;
let velocidadeYBolinha= 2;

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background(0);
  circle(xBolinha, yBolinha, diametro);
  xBolinha +=  velociadeXBolinha;
  yBolinha +=  velocidadeYBolinha;
  
if (xBolinha + raio> width ||
  xBolinha - raio< 0){
  velocidadeXBolinha *= -1;
  
  
  
  }   
  if (yBolinha > height ||
      yBolinha < 0){
      velocidadeYBolinha *= -1;
 
    
    