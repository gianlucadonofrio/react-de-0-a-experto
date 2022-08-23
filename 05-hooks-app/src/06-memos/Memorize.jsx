import { useState } from "react";
import { Small } from "../05-useLayoutEffect/Small";
import { useCounter } from "../hooks";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true)
  return (
    <>
      <h1>
        Counter : <Small value={counter}/>
      </h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button className="btn btn-outline-primary" onClick={()=>setShow(!show)}>
        Show/hide {JSON.stringify(show)}
      </button>
    </>
  );
};
