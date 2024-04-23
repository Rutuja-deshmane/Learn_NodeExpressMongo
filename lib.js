//export Methods for commonJs

// 1]
function sub(a, b) {
  return a - b;
}
exports.sub = sub;

// 2]

exports.sum = (a, b) => {
  return a + b;
};

/* //export Methods for ES modules
const sub = (a, b) => {
  return a - b;
};

const sum = (a, b) => {
  return a + b;
};

export { sub, sum };*/
