import React from "react";
import Link from "next/link";

const PreturiLink = () => {

  return (
    <div className={"d-flex justify-content-end"}>
      <span className={"my-1"} style={{fontSize: '.9rem'}}>
        Vezi&nbsp;
        <Link href="/preturi">
          <a>aici</a>
        </Link>
        &nbsp;lista completa de preturi.
      </span>
    </div>
  );
};

export default PreturiLink;
