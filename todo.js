var ul =  document.querySelector("#list")
var input  = document.querySelector("#input");
var li;
var checkbox;
var label;
var textInput = "";

var addButton = document.getElementById('add')
var removeButton = document.querySelector("#remove")

addButton.addEventListener('click' , addItem);
removeButton.addEventListener('click' , removeItem);


function addItem (){
    textInput = input.value;
    if (textInput !== ""){
        // create li element
        li = document.createElement('li')

        // create input type = checkbox
        checkbox = document.createElement('input')
        checkbox.type = "checkbox"
        checkbox.className = "check"
        checkbox.setAttribute("id" ,  ul.children.length + 1)

        // create label
        label = document.createElement('label')
        label.setAttribute('for' , ul.children.length + 1)
        label.appendChild(document.createTextNode(textInput))

        //add Elements to the DOM
        li.appendChild(checkbox)
        li.appendChild(label)
        ul.insertBefore(li , ul.children[0])

        // animation of the new todo created
        setTimeout( () => { li.className = 'visual' }, 2 )

        // reinitialize the input value to nil
        input.value = " "
    }
}

function removeItem (){
    var items = ul.children;
    for (let i = 0 ; i < items.length ; i++){
        while( items[i] && items[i].children[0].checked ){
            ul.removeChild( items[i] )
        }
    }
}