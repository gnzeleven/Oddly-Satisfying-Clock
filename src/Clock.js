import Strip from "./Strip";

function Clock({ time }) {
  const toSingleDigit = (doubleDigit) => {
    const tens = Math.trunc(doubleDigit / 10);
    const ones = doubleDigit % 10;
    return [tens, ones];
  };

  const hh = toSingleDigit(time.getHours());
  const mm = toSingleDigit(time.getMinutes());
  const ss = toSingleDigit(time.getSeconds());

  //console.log(hTens, hOnes, mTens, mOnes, sTens, sOnes);
  return (
    <div className="App">
      <Strip units={2} value={hh[0]} />
      <Strip units={9} value={hh[1]} />
      <span className="colon">:</span>
      <Strip units={5} value={mm[0]} />
      <Strip units={9} value={mm[1]} />
      <span className="colon">:</span>
      <Strip units={5} value={ss[0]} />
      <Strip units={9} value={ss[1]} />
    </div>
  );
}
export default Clock;
