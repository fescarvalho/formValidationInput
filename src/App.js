import React from 'react';
import Input from './Form/Input';
import useFormInput from './hooks/useFormInput';
const App = () => {
  const cep = useFormInput('cep');
  const email = useFormInput('email');
  const nome = useFormInput();
  const sobrenome = useFormInput(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('Enviar');
    } else {
      console.log('Nao Enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Nome" id="nome" type="text" {...nome} />
      <Input label="Sobrenome" id="sobrenome" type="text" {...sobrenome} />
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <Input label="Email" id="email" type="email" {...email} />
      <br />
      <button>Enviar</button>
    </form>
  );
};

export default App;
