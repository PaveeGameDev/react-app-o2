import { useEffect, useRef, useState } from "react";
import { ProductList } from "./ProductList";
import { Simulate } from "react-dom/test-utils";
import load = Simulate.load;

export const BackEndConnectionMain = () => {
  // const ref = useRef<HTMLInputElement>(null);
  //
  // useEffect(() => {
  //   if (ref.current) ref.current.focus();
  // });
  //
  // useEffect(() => {
  //   document.title = "My App";
  // });

  // const [category, setCategory] = useState("");

  // const connect = () => console.log("Connecting");
  // const disconnect = () => console.log("Disconnecting");
  //
  // useEffect(() => {
  //   connect();
  //   return () => disconnect();
  // });

  return (
    <div>
      {/*<input ref={ref} type="text" className="form-control" />*/}
      {/*<select*/}
      {/*  className="form-select"*/}
      {/*  onChange={(event) => setCategory(event.target.value)}*/}
      {/*>*/}
      {/*  <option value=""></option>*/}
      {/*  <option value="Clothing">Clothing</option>*/}
      {/*  <option value="Household">Household</option>*/}
      {/*</select>*/}
      {/*<ProductList category={category} />*/}
    </div>
  );
};
