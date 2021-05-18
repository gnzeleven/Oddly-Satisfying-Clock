const ampmMap = {
  0: "AM",
  1: "PM",
};

const Strip = ({ units, value, flag }) => {
  return (
    <div className="strip" data-id={value} style={{ top: `${-30 * value}px` }}>
      {Array(units)
        .fill("")
        .map((_, i) => (
          <div key={i} className={`number${value === i ? " active" : ""}`}>
            {flag === false ? i : ampmMap[i]}
          </div>
        ))}
    </div>
  );
};

export default Strip;
