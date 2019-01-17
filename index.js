const VARIATION_SPEED = 10;

point = [510, 490];

drawPointOnCurve(point, P_MAX, 'tester');

var i = setInterval(() => {

    d = derivative(point[0], point[1]);

    if (Math.abs(d[0]) < 0.001 && Math.abs(d[1]) < 0.001) {
      clearInterval(i);
    }

    point[0] += d[0] * VARIATION_SPEED;
    point[1] += d[1] * VARIATION_SPEED;

    console.log("Derivative = " + d);
    console.log("Point = " + point);

    drawPointOnCurve(point, P_MAX, 'tester');
  }, 100
);

