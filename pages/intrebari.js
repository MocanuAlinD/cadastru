import React from "react";
import styles from "../styles/intrebari.module.scss";

const intrebari = () => {
  return (
    <div className={styles.container + ""}>
      <h3 className={"text-center mb-4"}>Ce intrebari ne pun clientii de obicei</h3>
      <div>
        <h5>Ce este un imobil?</h5>
        <p>
          Imobilul reprezintă terenul cu sau fară construcţii, de pe teritoriul
          unei unităti administrativ-teritoriale, aparţinând unuia sau mai
          multor proprietari şi este identificat printr-un număr cadastral unic.
        </p>
      </div>

      <div>
        <h5>Ce trebuie sa fac atunci cand cumpar un imobil?</h5>
        <p>
          Înainte de a face tranzacţia pentru siguranţa dumneavoastră este
          indicat să efectuaţi o ridicare topografică pentru a vă putea garanta
          suprafaţa cât şi locaţia.
        </p>
      </div>

      <div>
        <h5>Cand am nevoie de cadastru?</h5>
        <p>
          În momentul înstrăinării imobilului (vânzare, cumpărare, moştenire,
          donaţie, etc) cât şi în situaţia în care asupra imobilului se doreşte
          o ipotecare sau garanţie.
        </p>
      </div>

      <div>
        <h5>Cat dureaza o documentatie cadastrala?</h5>
        <p>
          În funcţie de scopul documentaţiei cadastrale aceasta variază între 7
          şi 18 zile lucrătoare în regim normal şi între 3 si 7 zile lucrătoare
          în regim de urgenţă din momentul înregistrării documentaţiei.
        </p>
      </div>

      <div>
        <h5>Cine solicita extrasul de carte funciara?</h5>
        <p>
          Extrasul de carte funciară pentru informare se eliberează la
          solicitarea oricărei persoane, pentru a face cunoscută situaţia
          cadastral-juridică a imobilului la momentul întocmirii acestuia.
        </p>
      </div>

      <div>
        <h5>Ce este planul de situatie?</h5>
        <p>
          Un document tehnic, întocmit în sitemul naţional de referinţă unde
          sunt reprezentate limitele imobilului.
        </p>
      </div>

      <div>
        <h5>Cand am nevoie de planul de situatie?</h5>
        <p>
          Oricând. Planul de situaţie avizat de oficiul de Cadastru şi
          Publicitate Imobiliară vă garantează localizarea şi suprafaţa
          proprietăţii dumneavoastră.
        </p>
      </div>

      <div>
        <h5>Cand pot incepe sa construiesc?</h5>
        <p>Din momentul in care detineti autorizatia de constructie.</p>
      </div>

      <div>
        <h5>Cum obtin autorizatia de construire?</h5>
        <p>
          Primul pas în obţinerea autorizaţiei de construcţie este să cereţi
          autorităţii locale certificatul de urbanism. Acest act nu ţine loc de
          autorizaţe de construcţie fiind un act de informare. În cuprinsul
          acestui certificat veţi găsi toate avizele şi acordurile pe care
          trebuie să le obtineţi pentru eliberarea autorizaţiei de construcţie.
        </p>
      </div>

      <div>
        <h5>Ce acte am nevoie pentru certificatul de urbanism?</h5>
        <p>
          Pentru certificatele de urbanism eliberate în scopul autorizaţiei de
          construcţiei vă sunt necesare: extrasul de carte funciară, planul de
          situaţie, planul de încadrare în zonă, copia actului de identitate şi
          binenţeles cererea tip eliberată de autoritatea locală. Iar pentru
          cele de alipire sau dezmembrare aveţi nevoie de documentaţia
          cadastrală.
        </p>
      </div>

      <div>
        <h5>Ce acte am nevoie pentru certificatul energetic?</h5>
        <p>
          Un audit energetic al unei cladiri reprezintă o analiză ce are rolul
          de a identifica caracteristicile termice ale constructiei. Astfel
          pentru a putea vinde sau închiria o locuinta, proprietarul trebuie săa
          obtina un certificat energetic obligatoriu, care atestă starea
          apartamentului sau casei sale din punctul de vedere al consumului de
          energie. Acest certificat încadreaza locuinta într-o clasă energetica,
          ceea ce denotă un anumit consum mediu anual de energie. Documente
          necesare Pentru realizarea unui audit energetic si obtinerea unui
          certificat energetic pentru o locuinta sunt necesare copii ale
          urmatoarelor documente din cadastru:
        </p>
        <ul className={"m-0 p-0 ps-3"}>
          <li>Releveul apartamentului sau al casei (scara 1:100)</li>
          <li>Plan de incadrare in zona
          (scara 1:500)</li>
          <li>Anul construirii locuintei.</li>
          <li>O listă a îmbunatatirilor
          efectuate (e.g. reabilitare termica, calorifere, centrala termica,
          geamuri termoizolante, etc.)</li>
        </ul>
      </div>
    </div>
  );
};

export default intrebari;
