import "./styles/Version2.css";
import componentOfV27 from "../assets/componentOfV27.svg";
import componentOfV24 from "../assets/componentOfV24.svg";
import componentOfV23 from "../assets/componentOfV23.svg";
import componentOfV26 from "../assets/componentOfV26.svg";
import componentOfV22 from "../assets/componentOfV22.svg";
import componentOfV25 from "../assets/componentOfV25.svg";
import componentOfV21 from "../assets/componentOfV21.svg";
import componentOfV2 from "../assets/componentOfV2.svg";
import componentOfV28 from "../assets/componentOfV28.svg";
const Version2 = (props) => {
  return (
    <div className={`version-2 ${props.className || ""}`}>
      <div className="rectangle-8">
        {props.pressRToRestart || "It’s a Draw!"}
      </div>
      <div className="flex-container-1">
        <img
          className="component-of-v-2"
          {...props.componentOfV25}
          src={componentOfV2}
        />
        <img
          className="component-of-v-2-1"
          {...props.componentOfV28}
          src={componentOfV23}
        />
        <img
          className="component-of-v-2-2"
          {...props.componentOfV27}
          src={componentOfV26}
        />
      </div>
      <div className="flex-container-2">
        <img
          className="component-of-v-2-3"
          {...props.componentOfV2}
          src={componentOfV21}
        />
        <img
          className="component-of-v-2-4"
          {...props.componentOfV24}
          src={componentOfV24}
        />
        <img
          className="component-of-v-2-5"
          {...props.componentOfV22}
          src={componentOfV27}
        />
      </div>
      <div className="flex-container-3">
        <img
          className="component-of-v-2-6"
          {...props.componentOfV21}
          src={componentOfV22}
        />
        <img
          className="component-of-v-2-7"
          {...props.componentOfV26}
          src={componentOfV25}
        />
        <img
          className="component-of-v-2-8"
          {...props.componentOfV23}
          src={componentOfV28}
        />
      </div>
    </div>
  );
};
export default Version2;
