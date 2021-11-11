const getData = () =>{
    //fetch('https://published-node-js.herokuapp.com/api/tutorials')
    fetch('https://published-node-js.herokuapp.com/api/tutorials')
    .then(
        (req)=>{
            return req.json();
        }
    )
    .then(
        (data) => {
            //console.log(data);
            let ulUsers = document.querySelector('ul');
            ulUsers.innerHTML = '';
            data.forEach((item)=>{
                ulUsers.innerHTML += `
                <li>${item.title} and ${item.description}</li>
                `
            })
        }
    )
    .catch( 
        err =>{
            console.log(err);
        }
        
        )
}

getData();


const postData = () => {
    const inputName = document.querySelector('#title').value;
    const descrName = document.querySelector('#descr').value;

    fetch('https://published-node-js.herokuapp.com/api/tutorials',
    {
        method: 'POST',
        body: JSON.stringify(
            {
                "title": inputName,
                "description": descrName 
            }
        ),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    }).then(
        (response) => {
            return response.json();
        }
    ).then(
        (data)=>{
            console.log(data);
        }
    )
}

document.querySelector('form').addEventListener('submit', (e) => {
    postData();
    setTimeout(getData, 100);
    e.preventDefault();
})