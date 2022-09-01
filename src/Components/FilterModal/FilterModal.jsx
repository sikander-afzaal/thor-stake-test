import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { updateFilter } from "../../redux/filterReducer";
import "./FilterModal.css";
import heimdallImg from "../../Assets/filter/heimdall.png";
import thorImg from "../../Assets/filter/thor.png";
import freyaImg from "../../Assets/filter/freya.png";
import odinImg from "../../Assets/filter/odin.png";

function FilterModal({ closeModal }) {
  const dispatch = useDispatch();
  const { odin, thor, freya, heim } = useSelector((state) => state.filter);
  return (
    <>
      <div className="overlay-modal" onClick={() => closeModal(false)}></div>
      <div className="filter-modal">
        <h2 className="kanit">Filter By</h2>
        <div className="filter-row-modal">
          <h3 className="kanit">Character</h3>
          <div className="character-row">
            <div
              onClick={() => dispatch(updateFilter("heim"))}
              className={`${heim ? "heimdall-modal" : ""}`}
            >
              <img src={heimdallImg} alt="" className="char" />
            </div>
            <div
              onClick={() => dispatch(updateFilter("freya"))}
              className={`${freya ? "freya-modal" : ""}`}
            >
              <img src={freyaImg} alt="" className="char" />
            </div>
            <div
              onClick={() => dispatch(updateFilter("thor"))}
              className={`${thor ? "thor-modal" : ""}`}
            >
              <img src={thorImg} alt="" className="char" />
            </div>
            <div
              onClick={() => dispatch(updateFilter("odin"))}
              className={`${odin ? "odin-modal" : ""}`}
            >
              <img src={odinImg} alt="" className="char" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterModal;
