function create(date){
    let input =document.getElementById('text');
    let time=`${date.getFullYear()}/${date.getMonth()}/${date.getDate()} (${date.getHours()}:${date.getMinutes()}:${date.getSeconds()})`;
    if(input.value.trim()!==""){
        todo(time,input.value)
        input.value="";
    }else{
        alert('bad')
    }
};
function todo(date,value){
    let parents=document.querySelector('.values_contianer');
    let div =document.createElement('div');
    div.className="todo";
    let div2=document.createElement('div');
    div2.className="todo_text";
    let b= document.createElement('b');
    b.innerHTML=`<span>${date}</span><i class="fa-solid fa-calendar-days"></i>`;
    let p=document.createElement('p');
    p.textContent=value;
    div2.appendChild(b);
    div2.appendChild(p);
    let div3=document.createElement('div');
    div3.className="crud_button";
    let button1 =document.createElement('button');
    button1.innerHTML='<i class="fa-solid fa-trash"></i>';
    button1.addEventListener('click',()=>{
        parents.removeChild(div);
    });
    let button2 =document.createElement('button');
    button2.innerHTML='<i class="fa-solid fa-check"></i>';
    button2.addEventListener('click',()=>{
        if(button2.innerHTML=='<i class="fa-solid fa-check"></i>'){
            button2.style.backgroundColor="red";
            button2.innerHTML='<i class="fa-solid fa-x"></i>';
            div2.classList.add("nice");
        }
        else{
            button2.innerHTML='<i class="fa-solid fa-check"></i>';
            button2.style.backgroundColor="#2bff00";
            div2.classList.remove("nice");
        }
    });
    let button3 =document.createElement('button');
    button3.innerHTML='<i class="fa-solid fa-pen-to-square"></i>';
    button3.addEventListener('click',function(){
        let edit=document.querySelector('.edit');
        let edit_text=edit.querySelector('textarea');
        if(edit.style.display=="none"){
            edit.style.display="";
            edit_text.value=p.textContent;
            disabled();
            edit.querySelector('button').onclick=()=>{
                indisabled();
                p.textContent=edit_text.value;
                edit_text.value="";
                edit.style.display="none";
            }
        }else{
            edit.style.display=""; 
        }

    });
    div3.appendChild(button1);
    div3.appendChild(button2);
    div3.appendChild(button3);
    div.appendChild(div2);
    div.appendChild(div3);
    parents.appendChild(div);
};
function disabled(){
    document.querySelector('.todo_list').style.pointerEvents= "none";
};
function indisabled(){
    document.querySelector('.todo_list').style.pointerEvents= "";
};