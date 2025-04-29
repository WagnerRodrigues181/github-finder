// Como só tenho um tipo de erro, vou construí-lo hardcoded, mas seria
// mais eficiente enviá-lo por props caso houvesse mais casos.
const Error = () => {
  return (
    <div>
      <p>Usuário não encontrado!</p>
    </div>
  );
};

export default Error;
