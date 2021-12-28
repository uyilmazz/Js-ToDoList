const ulDOM = document.querySelector('#list');
const addButton = document.querySelector('#liveToastBtn');
const inputValue = document.querySelector('#task');

addButton.addEventListener('click',addTodo);
ulDOM.addEventListener('click',todoListFunctions);


function addTodo(e){
    e.preventDefault();
    if(inputValue.value == "" || !inputValue.value){
        showMessage('error');
    }else{
        let liDOM = document.createElement('li');
        liDOM.innerHTML = inputValue.value;
        liDOM.classList.add('list-group-item','d-flex','justify-content-between','align-items-center');
        let buttonDOM = document.createElement('button');
        buttonDOM.classList.add('btn','btn-danger');
        buttonDOM.innerText = 'Delete';
        liDOM.append(buttonDOM);
        ulDOM.append(liDOM);
        inputValue.value = "";
        showMessage('success');
    }
}

function todoListFunctions(e){
    let clickTarget = e.target;
    if(clickTarget.classList.contains('btn-danger')){
        clickTarget.parentElement.remove();
    }else if(clickTarget.classList.contains('list-group-item')){
        clickTarget.classList.toggle('checked');      
    }
}

function showMessage(name){
    if(name === 'success'){
        let successToast = document.querySelector('.success');
        if(document.querySelector('.error').classList.contains('show')){
            document.querySelector('.error').classList.remove('show');
        }
        successToast.classList.add("show");
        setTimeout(() => {
            successToast.classList.remove("show");
        },4000);
    }else if(name === 'error'){
        let errorToast = document.querySelector('.error');
        if(document.querySelector('.success').classList.contains('show')){
            document.querySelector('.success').classList.remove('show');
        }
        errorToast.classList.add("show");
        setTimeout(() => {
            errorToast.classList.remove("show");
        },4000);
    }
}

