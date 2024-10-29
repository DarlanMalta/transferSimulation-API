const button = document.querySelector("#btn");
//FUNÇÃO QUE RENDERIZA OS DADOS DA API
let renderDb = (dataApi) => {
  const newDiv = document.createElement("div");
  newDiv.id = "Transaction-" + dataApi.id;
  const newName = document.createElement("h5");
  newName.textContent = "Nome-" + dataApi.nome;
  const valueTransfer = document.createElement("h5");
  valueTransfer.textContent = "Valor da transferência-" + dataApi.valor;
  newDiv.append(newName, valueTransfer);
  document.querySelector("#content").appendChild(newDiv);
};
// FUNÇÃO DO MÉTODO GET QUE PEGA E FAZ A CONVERSÃO DA API PARA ARQUIVOS JSON
async function getData() {
  const data = await fetch("http://localhost:3000/translations").then((res) =>
    res.json()
  );
  data.forEach(data);
}
//FUNÇÃO DO MÉTODO PUT QUE ATUALIZA A API/BD
document.querySelector("#alterData").addEventListener("click", async (ev) => {
  ev.preventDefault();
  const idPut = document.querySelector("#put").value;
  const url = `http://localhost:3000/translations/${idPut}`;
  const newData = {
    nome: document.querySelector("#newName").value,
    valor: document.querySelector("#newValue").value,
  };
  const responsePut = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newData),
  });
  const responsePutJs = await responsePut.json();
  renderDb(responsePutJs);
  document.querySelector("#put").value = " ";
  document.querySelector("#newName").value = " ";
  document.querySelector("#newValue").value = "";
});
//FUNÇÃO POST QUE ATUALIZA OS DADOS DA API/BD
button.addEventListener("click", async (ev) => {
  ev.preventDefault();
  const newTransaction = {
    nome: document.querySelector("#nome").value,
    valor: document.querySelector("#valor").value,
  };
  const response = await fetch("http://localhost:3000/translations", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newTransaction),
  });
  const responseJs = await response.json();
  renderDb(responseJs);
  document.querySelector("#nome").value = " ";
  document.querySelector("#valor").value = " ";
});
// FUNÇÃO QUE IMPLEMENTA O MÉTODO DELET
document.querySelector("#deletData").addEventListener("click", async (ev) => {
  const deletId = document.querySelector("#delet").value;
  const urlDelet = `http://localhost:3000/translations/${deletId}`;
  await fetch(urlDelet, {
    method: "DELETE",
  });
  document.querySelector("#delet").value = " ";
});
