function read_input(){
  var a1 = document.getElementById('a1').value;
  a1 = parseFloat(a1);
  var b1 = document.getElementById('b1').value;
  b1 = parseFloat(b1);
  var c1 = document.getElementById('c1').value;
  c1 = parseFloat(c1);
  var a2 = document.getElementById('a2').value;
  a2 = parseFloat(a2);
  var b2 = document.getElementById('b2').value;
  b2 = parseFloat(b2);
  var c2 = document.getElementById('c2').value;
  c2 = parseFloat(c2);

  var x;
  x = result_x(a1, b1, c1 ,a2, b2, c2)
  document.getElementById('x').innerHTML = x;

  var y;
  y= result_y(a1, b1, c1 ,a2, b2, c2);
  document.getElementById('y').innerHTML = y;
}

function result_x(a1,b1,c1,a2,b2,c2)
{
  var d;
  d = a1*b2 - a2*b1;
  var x;
  d2 = c1*b2 - c2*b1;

  x = d2/d;
  x = x.toFixed(2);
  return x;
}

function result_y(a1,b1,c1,a2,b2,c2)
{
  var d;
  d = a1*b2 - a2*b1;
  var y;
  d2 = a1*c2 - c1*a2;

  y = d2/d;
  y = y.toFixed(2);
  return y;
}

function back_home(){
    window.open("index.html", '_self');
}
