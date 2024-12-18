// src/components/contact/Contact.js
import React from "react";
import "./Cont.css";
import Swal from "sweetalert2";

const Cont = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5a45043e-8cc2-42f1-9f37-e86d57c9835e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Messge envoyez!",
        text: "clicke au button!",
        icon: "success",
      });
    }
  };

  return (
    <section className="cont">
      <form onSubmit={onSubmit}>
        <h1 class="form-titre">Contactez-nous</h1>
        <div class="main-user-info">
          <div className="input-box">
            <label>Nom :</label>
            <input type="text" className="field" name="name" required />
          </div>
          <div className="input-box">
            <label>Prénom:</label>
            <input type="text" className="field" name="prenom" required />
          </div>

          <div className="input-box">
            <label>Numéro WhatsApp:</label>
            <input
              type="tel"
              className="field"
              name="tel"
              required
              pattern="^(0|\+212)[5-7]\d{8}$"
              title="Entrez un numéro de téléphone marocain valide commençant par 0 ou +212, suivi de 9 chiffres."
            />
          </div>

          <div className="input-box">
            <label>Email:</label>
            <input type="email" className="field" name="email" required />
          </div>
          <div className="input-boxi">
            <label>Votre message </label>
            <input type="text" className="field" name="text" required  />
          </div>
          </div><br/><br/> <br/> <br/> <br/> <br/>

        <button type="submit">Envoyez</button>
      </form>
    </section>
  );
};

export default Cont;
