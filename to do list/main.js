let addinput = document.getElementById('input');
let addbutton = document.getElementById('addbutton');
let task = document.getElementById('task');

addbutton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    var editButton = document.createElement('button');
    var deleteButton = document.createElement('button');
    paragraph.innerText = addinput.value;
    editButton.innerText = 'Edit';
    deleteButton.innerText = 'Delete';
    paragraph.classList.add('para');
    task.appendChild(paragraph);
    buttons.appendChild(editButton);
    buttons.appendChild(deleteButton);
    editButton.classList.add('editButton');
    editButton.classList.add('deleteButton');

    deleteButton.addEventListener('click', function(){
        task.removeChild(paragraph);
        buttons.removeChild(editButton);
        buttons.removeChild(deleteButton);
    })

    editButton.addEventListener('click',function(){
        var oldvalue = paragraph.innerText;
        console.log(oldvalue);
        
        var inputtag = document.createElement('input');
        var updateButton = document.createElement('button');
        updateButton.innerText='Update';
        
        inputtag.value = oldvalue;
        task.appendChild(inputtag);
        buttons.appendChild(updateButton);
        updateButton.addEventListener('click', function(){
            paragraph.innerText = inputtag.value;
            task.removeChild(inputtag);
            buttons.removeChild(updateButton);
            // paragraph.removeChild(inputtag);
            

        })


    })
    
    addinput.value = "";
})