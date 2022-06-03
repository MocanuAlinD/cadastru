import React from 'react'
import { Fade } from 'react-reveal'
import PreturiLink from '../PreturiLink'

const Energetic = () => {
  return (
    <div
    className={
      "row m-0 p-0 mb-5 d-flex justify-content-center align-items-center flex-row-reverse bg-dark bg-opacity-10"
    }
  >
    <Fade top>
    <img
      src="/certificatEnergetic.jpeg"
      alt="certificat energetic"
      className={"m-0 p-0 col-8 col-lg-6 p-1 p-lg-0"}
    />
    </Fade>
    <Fade bottom delay={200}>
    <p className={"col-12 col-lg-6 mt-2 mt-lg-0"}>
      &nbsp;&nbsp;<b>Certificat energetic.</b> Un audit energetic al unei
      cladiri reprezintă o analiză ce are rolul de a identifica
      caracteristicile termice ale constructiei. <br />
      &nbsp;&nbsp;Astfel pentru a putea vinde sau închiria o locuinta,
      proprietarul trebuie sa obtina un certificat energetic obligatoriu,
      care atesta starea apartamentului sau casei sale din punctul de vedere
      al consumului de energie. Acest certificat încadreaza locuinta într-o
      clasă energetica, ceea ce denotă un anumit consum mediu anual de
      energie.
    </p>
    <PreturiLink />
    </Fade>
  </div>
  )
}

export default Energetic