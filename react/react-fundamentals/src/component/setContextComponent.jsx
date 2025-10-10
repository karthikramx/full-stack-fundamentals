import { ContextVariable } from "../context/contextExample";
import { useContext } from "react";

export default function SetContextComponent() {
  const { test, setTest } = useContext(ContextVariable);

  console.log(test);

  return (
    <div>
      <button
        onClick={() => {
          setTest(!test);
        }}
      >
        Click Me
      </button>
    </div>
  );
}
