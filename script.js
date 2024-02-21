const addBtn = document.getElementById('btn');
addBtn.addEventListener('click', function(e){
    e.preventDefault();
   
    const stID = document.getElementById('sid');
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const course = document.getElementById('course');

    const container = document.getElementById('student-list');
    const tr = document.createElement('tr');

    // addValue(td1, stID.value);
    // addValue(td2, name.value);
    // addValue(td3, phone.value);
    // addValue(td4, course.value);
    
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
});

// function addValue(id) {
//     let id = document.createElement('td');
//     id.innerText = value;
//     tr.appendChild(id);
// }