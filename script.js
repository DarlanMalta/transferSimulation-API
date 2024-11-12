import { methodPut } from "./js_modules/PutGetPost.js";
import { methodPost } from "./js_modules/PutGetPost.js";
import { methodDelet } from "./js_modules/PutGetPost.js";
//FUNÇÃO DO MÉTODO PUT QUE ATUALIZA A API/BD
document.querySelector("#alterData").addEventListener("click", methodPut);

//FUNÇÃO POST QUE ATUALIZA OS DADOS DA API/BD
document.querySelector("#btn").addEventListener("click", methodPost);

// FUNÇÃO QUE IMPLEMENTA O MÉTODO DELET
document.querySelector("#deletData").addEventListener("click", methodDelet);
