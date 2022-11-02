let createTaskJs = document.getElementById('create-task');
let totalNumOfTasks = [];
let tableContentJs = document.getElementById('table-contents');

var buttonJs = document.getElementById('create-task-button').addEventListener('click',createTaskJsTaskFunction = () =>{
        let taskNameJs = document.getElementById('task-name').value;
        let tr1 = document.createElement('tr');
        tr1.classList.add('trRow')
        let tdName = document.createElement('td')
        tdName.innerHTML = taskNameJs;
        console.log(tdName);
        tr1.appendChild(tdName);
        console.log(tr1);
        tableContentJs.appendChild(tr1);

        let descriptionJs = document.getElementById('description').value;
        let tdDescription = document.createElement('td')
        tdDescription.innerHTML = descriptionJs;
        tr1.appendChild(tdDescription)
        console.log(tdDescription)
        tableContentJs.appendChild(tr1);

    //counting remaining number of days
        let dueDateJS = new Date( `${document.getElementById('due-date').value}`)
        let due =  Math.round((dueDateJS.getTime()-new Date().getTime())/(1000*60*60*24))
        let tdDue = document.createElement('td');
        tdDue.innerHTML = due
        tr1.appendChild(tdDue)
        tableContentJs.appendChild(tr1);

        let priorityJs = document.getElementById('priority').value
        let tdPriority = document.createElement('td')
        tdPriority.innerHTML = priorityJs
        console.log(tdPriority)
        tr1.appendChild(tdPriority)
        tableContentJs.appendChild(tr1)

        let taskStatusJs = document.getElementById('task-status').value
        let tdtaskStatus = document.createElement('td')
        tdtaskStatus.innerHTML = taskStatusJs
        console.log(tdtaskStatus)
        tr1.appendChild(tdtaskStatus)
        tableContentJs.appendChild(tr1)

        sortArrayFunction()

})
    const sortArrayFunction=() =>{
    const tStatus =[]
    const tPriority = []
    const tDue =[]
    const totalArray=[]
    let taskArray = document.querySelectorAll('.trRow').forEach(tr =>{
        // tStatus.push(tr.children[4].textContent);
        // tPriority.push(tr.children[3].textContent);
        // tDue.push(tr.children[2].textContent);
        // console.log(tStatus+tPriority+tDue)
        for(i=0;i<5;i++){
            // tStatus[i]=tr.children[i].textContent;
            tStatus.push(tr.children[i].textContent)
            
        }
        console.log(tStatus)
        totalArray.concat(tStatus)
        console.log(totalArray)
    });
    
    

    }
  

