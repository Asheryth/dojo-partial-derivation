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

  return [0, 0]; // [dP, dC]
}
//
//
