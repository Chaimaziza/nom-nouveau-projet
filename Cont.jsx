// src/components/contact/Contact.js
import React from "react";
import "./Cont.css";
import Swal from "sweetalert2";

const Contact = () => {
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
        title: "Rendez-vous envoyez!",
        text: "clicke au button!",
        icon: "success",
      });
    }
  };

  return (
    
    <section className="contact">
      <form onSubmit={onSubmit} id="R">
       
        <h2 class="form-titre">Votre vision mérite le meilleur, Contactez-nous !</h2>

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
            <input type="email" className="field" name="email"  required />
          </div>
              <label>Votre message:</label>
              <textarea name="texterea" className="field"></textarea><br/> <br/> <br/>
        </div>
        <div>
           <button type="submit" >Envoyez</button>
        </div>
      </form>
      
    </section>
  );
};

export default Contact;
