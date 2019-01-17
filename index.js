const VARIATION_SPEED = 10;

const P_MAX = 1000;
const ALPHA = 10;

function sqr(v) {
  return v * v;
}

// p = prix de vente
// c = cout de production
function equation(p, c) {
  var res = ALPHA * (p - c) * (c/p) * (1 - sqr(p/P_MAX));

  return Math.max(res, 0.); // For plotting limitations
}







//
// A COMPLETER
//
// p = prix de vente
// c = cout de production
function derivative(p, c) { 
  return [0, 0];
}
//
//











const NB_ECH = 100;
const STEP = P_MAX / NB_ECH;

function plot(point) {
  var xy_data = [];
  var z_data = [];
  for (y = 0; y < NB_ECH; y++) {
    xy_data.push(y*STEP);
    var row = [];
    for (x = 0; x < NB_ECH; x++) {
      row.push(equation(x*STEP,y*STEP));
    }
    z_data.push(row);
  }
  
  var data = [{
    x: [point[0]], y: [point[1]], z: [equation(point[0],point[1])],
    mode: 'markers',
    marker: {
      color: 'rgb(0, 127, 0)',
      size: 10,
      symbol: 'circle',
      opacity: 1.0
    },
    type: 'scatter3d'
  },{
    x: xy_data,
    y: xy_data,
    z: z_data,
    type: 'surface',
    opacity: 0.9
  }];
  
  var layout = {
    title: 'Benefices des chaussettes',
    autosize: false,
    width: 800,
    height: 800,
    margin: {
      l: 65,
      r: 50,
      b: 65,
      t: 90,
    }
  };
  Plotly.react('tester', data, layout);
}

point = [510, 490];

plot(point);

var i = setInterval(() => {

    d = derivative(point[0], point[1]);

    if (Math.abs(d[0]) < 0.001 && Math.abs(d[1]) < 0.001) {
      clearInterval(i);
    }

    point[0] += d[0] * VARIATION_SPEED;
    point[1] += d[1] * VARIATION_SPEED;

    console.log("Derivative = " + d);
    console.log("Point = " + point);

    plot(point);
  }, 100
);

