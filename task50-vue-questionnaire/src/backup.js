qn.value.filter(el => {
  if (el > maxVal) {
    maxVal = el;
  }
  return el === i
})
let maxVal = 0;
qn.value.forEach(el => {
  if (el > maxVal) {
    maxVal = el;
  }
});