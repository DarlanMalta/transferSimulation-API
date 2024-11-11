//FUNÇÃO QUE RENDERIZA OS DADOS DA API
export const renderDb = (dataApi) => {
  const newDiv = document.createElement("div");
  newDiv.id = "Transaction-" + dataApi.id;
  const newName = document.createElement("h5");
  newName.textContent = "Nome-" + dataApi.nome;
  const valueTransfer = document.createElement("h5");
  valueTransfer.textContent = "Valor da transferência-" + dataApi.valor;
  newDiv.append(newName, valueTransfer);
  document.querySelector("#content").appendChild(newDiv);
};
