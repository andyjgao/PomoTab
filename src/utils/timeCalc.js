export default function calcTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  let realMin = minutes.toString().split("").map(Number);
  let realSec = seconds.toString().split("").map(Number);
  realMin = realMin.length < 2 ? [0].concat(realMin) : realMin;
  realSec = realSec.length < 2 ? [0].concat(realSec) : realSec;
  return realMin.concat(realSec)
}
