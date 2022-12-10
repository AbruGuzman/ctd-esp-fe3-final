import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  const nameRegex =
    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
  
    const error = { nameError: "", emailError: "" };

    if (!user.name || user.name.length < 3) {
      error.nameError =
        "El nombre es requerido y debe tener al menos 3 caracteres";
    }

    if (!user.email || !emailRegex.test(user.email)) {
      error.emailError = "Email invalido";
    }

    if (error.nombreError || error.emailError) {
      setErrors(error);
      alert("Por favor, complete los campos correctamente");
      return false;
    }

    setErrors({});
    return true;
  };
    function handleChange(e) {
		  setUser({
			  ...user,
			  [e.target.name]: e.target.value,
		})

    function handleSubmit(e) {
      e.preventDefault();
      if(!validateName(user.name) || !validateEmail(cuser.email)) {
        alert (`Gracias ${user.name}, te contactaremos cuanto antes via email.`);
      } else {
        alert (`Por favor, verifique los datos ingresados`)
      };
  
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
					<input name="name" onChange={handleChange} type="text" minLength={3} placeholder="Nombre completo" />
					<input name="email"  onChange={handleChange} type="email" placeholder="Email" />
					<button>Send</button>
      </form>
    </div>
  );
};

export default Form;
