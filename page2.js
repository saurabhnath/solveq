function read_input(){
  var a1 = document.getElementById('a1').value;
  a1 = parseFloat(a1);
  var b1 = document.getElementById('b1').value;
  b1 = parseFloat(b1);
  var c1 = document.getElementById('c1').value;
  c1 = parseFloat(c1);
  var d1 = document.getElementById('d1').value;
  d1 = parseFloat(d1);

  var a2 = document.getElementById('a2').value;
  a2 = parseFloat(a2);
  var b2 = document.getElementById('b2').value;
  b2 = parseFloat(b2);
  var c2 = document.getElementById('c2').value;
  c2 = parseFloat(c2);
  var d2 = document.getElementById('d2').value;
  d2 = parseFloat(d2);

  var a3 = document.getElementById('a3').value;
  a3 = parseFloat(a3);
  var b3 = document.getElementById('b3').value;
  b3 = parseFloat(b3);
  var c3 = document.getElementById('c3').value;
  c3 = parseFloat(c3);
  var d3 = document.getElementById('d3').value;
  d3 = parseFloat(d3);

det = a1*(b2*c3-c2*b3) - b1*(a2*c3-a3*c2) + c1*(a2*b3-a3*b2);

det1 = d1*(b2*c3-c2*b3) - b1*(d2*c3-c2*d3) + c1*(d2*b3-b2*d3);

det2 = a1*(d2*c3-c2*d3) - d1*(a2*c3 - a3*c2) + c1*(a2*d3-a3*d2);

det3 = a1*(b2*d3-d2*b3) - b1*(a2*d3-a3*d2) + d1*(a2*b3-b2*a3);

x = det1/det;
y = det2/det;
z = det3/det;

  document.getElementById('x').innerHTML = x;
  document.getElementById('y').innerHTML = y;
  document.getElementById('z').innerHTML = z;
}


function back_home(){
    window.open("index.html", '_self');
}
