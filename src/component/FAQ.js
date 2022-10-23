import React from "react";
import { useState } from "react";

function FAQ({ title, description }) {
  const [toggle, setToggle] = useState(false);
  return (
    <article>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        {title}
      </button>
      {toggle && <p className="para">{description}</p>}
    </article>
  );
}

export default FAQ;
