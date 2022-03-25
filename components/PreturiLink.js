import React from "react";
import Link from "next/link";

const PreturiLink = () => {
  return (
    <div className={"d-flex justify-content-center"}>
      <span className={"mb-3"}>
        Vezi 
        <Link href="/preturi">
          <a> aici </a>
        </Link>
        lista completa de preturi.
      </span>
    </div>
  );
};

export default PreturiLink;
