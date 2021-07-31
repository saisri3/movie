import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";


export default function Sort(props) {
  
  
    return (
      <div className="sort">
        {/* < button
            style={{ height: 25, cursor: "pointer" }}
            className="arrow"    type="submit">GO</button> */}
        <button type="submit" onClick={() =>props.SortBasedDuration()}>sort</button>
       
      <div className="arrows">
          { props.order === 'descending' && <AiOutlineArrowDown />}
          {props.order === 'ascending' && <AiOutlineArrowUp />}
			</div>


      </div>
    
    )

  }

