const returnsThree = () => 3;

const reciprocal = n => {
  if (n < 1 || n > 1000000) throw new TypeError("number needs to be between 1 - 1,000,000");
  return 1/n
};

module.exports = {
  returnsThree,
  reciprocal
};
