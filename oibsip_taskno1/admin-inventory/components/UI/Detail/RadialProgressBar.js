function RadialProgressBar({ percentage }) {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  let color = "";
  if (percentage < 35) {
    color = "red";
  } else if (percentage >= 35 && percentage <= 50) {
    color = "yellow";
  } else {
    color = "green";
  }

  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        justifyItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <svg width="100%" height="100%">
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#ccc"
          strokeWidth="5"
          fill="transparent"
        />
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke={color}
          strokeWidth="5"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
        />
        <text x="100" y="100" textAnchor="middle" dominantBaseline="middle">
          {percentage}%
        </text>
      </svg>
    </div>
  );
}

export default RadialProgressBar;
