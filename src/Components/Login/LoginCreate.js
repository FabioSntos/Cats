import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';

const LoginCreate = () => {
  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Email" type="email" name="email" />
        <Input label="Senha" type="password" name="password" />

        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
