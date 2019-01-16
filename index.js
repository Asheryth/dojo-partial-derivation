
function equation(xCent, yCent) {
  v = xCent / 100.;
  c = yCent / 100.;

  return Math.max((v - c) * (c/v) * (1 - v * v), 0.);
}

var z_data = [];
for (i = 0; i < 100; i++) {
  var row = [];
  for (j = 0; j < 100; j++) {
    row.push(equation(i,j));
  }
  z_data.push(row);
}

var data = [{
  x:[49], y: [51], z: [equation(51,49)],
  mode: 'markers',
  marker: {
    color: 'rgb(0, 127, 0)',
    size: 5,
    symbol: 'circle',
    opacity: 1.0
  },
  type: 'scatter3d'
},{
  z: z_data,
  type: 'surface',
  opacity: 0.9
}];

var layout = {
  title: 'Mt Bruno Elevation',
  autosize: false,
  width: 500,
  height: 500,
  margin: {
    l: 65,
    r: 50,
    b: 65,
    t: 90,
  }
};
Plotly.newPlot('tester', data, layout);

