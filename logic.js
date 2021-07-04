// for getting the numberand operators in displaybox
function number(num){
    let result = document.getElementById('input');
    result.value += num;   

}
   
//for getting the result

function result(){
    let result = document.getElementById('input');
    result.value = eval(result.value);
}
//for clear the result

function clearResult(){
    let result = document.getElementById('input');
    result.value = "";
    
}

//for removing singal number

function deleteNum(){
    let number = document.getElementById('input'); 
    let remove = number.value;
    remove = remove.slice(0,-1);
    number.value = remove;
}
