const button = document.querySelector("#btn");

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

async function getData() {
  const data = await fetch("http://localhost:3000/translations").then((res) =>
    res.json()
  );
  data.forEach(data);
}

button.addEventListener("click", async (ev) => {
  ev.preventDefault();
  const newTransaction = {
    nome: document.querySelector("#newName").value,
    valor: document.querySelector("#newValue").value,
  };
  const response = await fetch("http://localhost:3000/translations", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newTransaction),
  });
  const responseJs = await response.json();
  renderTransaction(responseJs);
});

document.querySelector("#deletData").addEventListener("click", async (ev) => {
  const deletId = document.querySelector("#delet").value;
  const urlDelet = `http://localhost:3000/translations/${deletId}`;
  await fetch(urlDelet, {
    method: "DELETE",
  });
});
