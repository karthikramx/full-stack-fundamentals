import { ContextVariable } from "../context/contextExample";
import { useContext } from "react";

export default function SetContextComponent() {
  const [examplevariable, setExampleVariable] = useContext(ContextVariable);

  console.log(examplevariable);

  return (
    <div>
      <button
        onClick={() => {
          setExampleVariable(!examplevariable);
        }}
      >
        Click Me
      </button>
    </div>
  );
}
