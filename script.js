const addBtn = document.querySelector(".btn");
const input = document.querySelector(".form-todo input[type = 'text']");
const ul = document.querySelector(".li-item");


addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const inputValue = input.value;
    input.value = "";
    const liItem = document.createElement("li");


    const liInnerHtml = `<span class="text">${inputValue}</span>
        <div>
            <button class="btn done li-btn1">Done</button>
            <button class="btn remove li-btn2">Remove</button>
        </div>`
    liItem.innerHTML = liInnerHtml;
    ul.append(liItem);
})
ul.addEventListener("click",(e)=>{
    
    if(e.target.classList.contains("li-btn1")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
     
    }

    if(e.target.classList.contains("li-btn2")){
        e.target.parentNode.parentNode.remove();
       
    }
   
})