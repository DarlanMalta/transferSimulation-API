import { methodPut } from "./PutGetPost.js";
import { methodPost } from "./PutGetPost.js";
import { methodDelet } from "./PutGetPost.js";
//FUNÇÃO DO MÉTODO PUT QUE ATUALIZA A API/BD
document.querySelector("#alterData").addEventListener("click", methodPut);

//FUNÇÃO POST QUE ATUALIZA OS DADOS DA API/BD
document.querySelector("#btn").addEventListener("click", methodPost);

// FUNÇÃO QUE IMPLEMENTA O MÉTODO DELET
document.querySelector("#deletData").addEventListener("click", methodDelet);
