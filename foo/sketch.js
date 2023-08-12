function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);
  const EPS = 1e-6;
  const W2 = width / 2, H2 = height / 2;
  const a = random(2), b = random(2), 
        c = random(2), d = random(2),
        e = random(2);
  translate(W2, H2);
  stroke('black');
  line(-W2, 0, W2, 0); line(0, -H2, 0, H2);
  let STEP = 1;
  stroke('blue');
  for (let t = -100; t <= 100; t += STEP){
    let t2 = 1 + t*t ; // 円
    let x = 2 * t / t2;
    let y = (0.5 - t) / t2;
//    let t2 = 1 + t**2 ;
//    let x = 2 * t / t2;
//    let y = (1 - t**2) / t2;
//      let x = log(tan(t/2))+cos(t)
//      let y = sin(t)
    point(x*W2, -y*H2);
    if (t != 0 && (abs(t) > EPS))
      STEP = abs(t / 100);
  }
}