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
    <div className="clock" title={time.toLocaleTimeString()}>
      <div>
        <div>
          <div className="highlight-bar">
            <span className="clock-divider">:</span>
            <span className="clock-divider">:</span>
          </div>

          <div className="clock-group">
            <Strip items={3} val={hh[0]} />
            <Strip items={10} val={hh[1]} />
          </div>

          <div className="clock-group">
            <Strip items={6} val={mm[0]} />
            <Strip items={10} val={mm[1]} />
          </div>

          <div className="clock-group">
            <Strip items={6} val={ss[0]} />
            <Strip items={10} val={ss[1]} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Clock;
