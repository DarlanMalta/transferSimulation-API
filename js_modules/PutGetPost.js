import { renderDb } from "./render.js";

//IMPLEMENTA O GET
export async function getData() {
  const data = await fetch("http://localhost:3000/translations").then((res) =>
    res.json()
  );
  data.forEach(data);
}
//MÉTODO PUT
export async function methodPut(ev) {
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
}
//MÉTODO POST
export async function methodPost(ev) {
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
}
//MÉTODO DELET

export async function methodDelet() {
  const deletId = document.querySelector("#delet").value;
  const urlDelet = `http://localhost:3000/translations/${deletId}`;
  await fetch(urlDelet, {
    method: "DELETE",
  });
  document.querySelector("#delet").value = " ";
}
