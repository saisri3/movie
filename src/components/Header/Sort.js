import "./sort.css";

export default function Sort(props) {
  return (
    <div className="sort">
      {/* < button
            style={{ height: 25, cursor: "pointer" }}
            className="arrow"    type="submit">GO</button> */}
      <button type="submit" onClick={() => props.SortBasedDuration()}>
        sort
      </button>
    </div>
  );
}
