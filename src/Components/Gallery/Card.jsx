import React, { useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";
export default function Card(props) {
  // eslint-disable-next-line
  const delegate = props.delegate || "[data-fancybox]";

  useEffect(() => {
    const opts = props.options || {};

    NativeFancybox.bind(delegate, opts);

    return () => {
      NativeFancybox.destroy();
    };
  }, [delegate, props.options]);
  return (
    <>
      <div
        options={{ infinite: false }}
        className="col-lg-6 col-md-6 my-3"
        data-fancybox="gallery"
        data-src={props.images}
      >
        <img src={props.images} alt="" />
      </div>
    </>
  );
}
