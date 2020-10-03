
exports.min = function min (mn) {
  if (mn === undefined || mn.length === 0) return 0;
  mn.sort(function (a, b) {
		return a - b;
	});
  return mn[0];   
};

exports.max = function max (mx) {
  if (mx === undefined || mx.length === 0) return 0;
  mx.sort(function (a, b) {
		return b - a;
	});
	return mx[0]; 
}

exports.avg = function avg (ag) {
  if (ag === undefined || ag.length === 0) return 0;
  if (ag.length == 0) return 0;
  return ag.reduce((a, b) => (a + b)) / ag.length;
}
