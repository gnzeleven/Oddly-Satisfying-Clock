const Strip = ({ units, value }) => {
  return (
    <div className="strip" data-id={value} style={{ top: `${-30 * value}px` }}>
      {Array(units + 1)
        .fill("")
        .map((_, i) => (
          <div className={`number${value === i ? " active" : ""}`}>{i}</div>
        ))}
    </div>
  );
};

export default Strip;
