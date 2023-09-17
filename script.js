const addBtn = document.querySelector(".add-btn");
const input = document.querySelector(".form-container input[type = 'text']");
const ul = document.querySelector(".li-item")
const doneBtn = document.querySelector(".li-btn1"); 
const removeBtn = document.querySelector(".li-btn2");
// console.log(doneBtn)

addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const newInput = input.value;
    input.value = "";
    const liItem = document.createElement("li");
    const newInnerHtml = `<span class="text">${newInput}</span>
    <div>
        <button class="btn li-btn1">Done</button>
        <button class="btn li-btn2">Remove</button>
    </div>`;

    liItem.innerHTML = newInnerHtml;
    ul.append(liItem);
    
   
  
});


ul.addEventListener("click", (e)=>{

   if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";

   }
        
   if(e.target.classList.contains("remove")){
    const targetLi = e.target.parentNode.parentNode;
    targetLi.remove();

}
})
































