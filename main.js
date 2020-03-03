var dataInput = document.querySelector('input[type="text"]');
var ulSpisok = document.getElementById('menu-list');
var spans = document.getElementsByTagName('span');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');
var textst = document.getElementsByTagName('p');
//addEventListener - обработчик события с вызовом возвращающего значение функции

function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.stopPropagation(); //перехват события

        })
    }
}

function loadTodo(){
    if(localStorage.getItem("TodoApp")){
        ulSpisok.innerHTML = localStorage.getItem('TodoApp');
    }
    deleteTodo();
}

function zch(){
    for(let p of textst){
        p.addEventListener('click', function(){
            if (p.style.textDecoration != 'line-through'){
                p.style.textDecoration = 'line-through'
            }
            else {
                p.style.textDecoration = 'none'
            }
            
        })
    }
}
dataInput.addEventListener('keypress', function(keyPressed){
        if(keyPressed.which === 13){
            check = this.value.trim();
            if(check != ''){
            var newLi = document.createElement('li');
            var newSpan = document.createElement('span');
            newSpan.innerHTML = "Delete";
            var currentDate = new Date();
            var newSpan2 = document.createElement('span');
            newSpan2.innerHTML = currentDate;
            var newItem = document.createElement('p');
            newItem.innerHTML = this.value ; // получение данных
            this.value = " "; //обнуление инпута
            ulSpisok.appendChild(newLi).append(newSpan, newItem, newSpan2);
    }}
    zch();
    deleteTodo();
})

saveBtn.addEventListener('click', function(){
    localStorage.setItem('TodoApp', ulSpisok.innerHTML);
    
})

clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = ' ';
    localStorage.setItem('TodoApp', ulSpisok.innerHTML);
})


deleteTodo();

loadTodo();

function about(){
    alert('Касперович Андрей Александрович');
}

zch();