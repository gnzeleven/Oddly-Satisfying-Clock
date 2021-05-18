import Strip from "./Strip";

function Clock({ time, format }) {
  // split a double digit number to two single digits
  const toSingleDigit = (doubleDigit) => {
    const tens = Math.trunc(doubleDigit / 10);
    const ones = doubleDigit % 10;
    return [tens, ones];
  };

  let hours = time.getHours();
  // if hours >= 12, it is PM else AM
  const ampm = hours >= 12 ? 1 : 0;

  // modify the hours for standard clock format
  if (format === "STANDARD") {
    if (hours >= 12) hours -= 12;
    if (hours === 0) hours = 12;
  }

  const hh = toSingleDigit(hours);
  const mm = toSingleDigit(time.getMinutes());
  const ss = toSingleDigit(time.getSeconds());

  return (
    <div className="App">
      <p className="space" />
      <Strip units={format === "MILITARY" ? 3 : 2} value={hh[0]} flag={false} />
      <Strip units={10} value={hh[1]} flag={false} />
      <span className="colon">:</span>
      <Strip units={6} value={mm[0]} flag={false} />
      <Strip units={10} value={mm[1]} flag={false} />
      <span className="colon">:</span>
      <Strip units={6} value={ss[0]} flag={false} />
      <Strip units={10} value={ss[1]} flag={false} />
      <p className="space" />
      {format === "STANDARD" && <Strip units={2} value={ampm} flag={true} />}
    </div>
  );
}
export default Clock;
