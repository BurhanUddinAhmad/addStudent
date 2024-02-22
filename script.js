const addBtn = document.getElementById('btn');
addBtn.addEventListener('click', function(e){
    e.preventDefault();
   
    const stID = document.getElementById('sid');
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const course = document.getElementById('course');

    const tr = document.createElement('tr');
    const container = document.getElementById('student-list');
    
    if (stID.value == '' || name.value == '' || phone.value == '' || course.value == '') {
        alert('Please enter the value');
        return;
    }

    // addValue(stID.value);
    // addValue(name.value);
    // addValue(phone.value);
    // addValue(course.value);

    const td1 = document.createElement('td');
    td1.innerText = stID.value;
    tr.appendChild(td1);    
    
    const td2 = document.createElement('td');
    td2.innerText = name.value;
    tr.appendChild(td2);

    const td3 = document.createElement('td');
    td3.innerText = phone.value;
    tr.appendChild(td3);

    const td4 = document.createElement('td');
    td4.innerText = course.value;
    tr.appendChild(td4);
    container.appendChild(tr);

    stID.value = '';
    name.value = '';
    phone.value = '';
    course.value = '';
});

// function addValue(value) {
//     let td = document.createElement('td');
//     td.innerText = value;
//     const tr = document.createElement('tr');
//     tr.appendChild(td);
//     const container = document.getElementById('student-list');
//     container.appendChild(tr);
// }
