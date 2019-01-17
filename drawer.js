const NB_ECH = 100;

function drawPointOnCurve(point, maxValue, divId) {
  const step = maxValue / NB_ECH;

  var xy_data = [];
  var z_data = [];
  for (y = 0; y < NB_ECH; y++) {
    xy_data.push(y*step);
    var row = [];
    for (x = 0; x < NB_ECH; x++) {
      row.push(equation(x*step,y*step));
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
  Plotly.react(divId, data, layout);
}
