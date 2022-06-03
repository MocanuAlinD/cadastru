import React from "react";
import styles from "../styles/servicii.module.scss";
import Efectuam from "./ServiciiComponents/Efectuam";
import Lucrari from "./ServiciiComponents/Lucrari";
import Dezmembrari from "./ServiciiComponents/Dezmembrari";
import Energetic from "./ServiciiComponents/Energetic";
import Volum from "./ServiciiComponents/Volum";
import Fotogrammetria from "./ServiciiComponents/Fotogrammetria";


const Servicii = () => {
  return (
    <div className={styles.container}>
      <h3 className={"my-4 text-center"}>Ce servicii va oferim</h3>
      <Efectuam />
      <Lucrari />
      <Dezmembrari />
      <Energetic />
      <Volum />
      <Fotogrammetria />
    </div>
  );
};

export default Servicii;
