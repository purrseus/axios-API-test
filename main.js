// EVENT LISTENER
document.getElementById('get').addEventListener('click', get);
document.getElementById('post').addEventListener('click', post);
document.getElementById('put/patch').addEventListener('click', put);
document.getElementById('delete').addEventListener('click', remove);

// Function Request
function get() { // Get request
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => render(response));
}

function post() { // Post request (add)
    axios.post('https://jsonplaceholder.typicode.com/users', {
        name: 'Thien',
        age: 20,
        male: true
    })
    .then(response => render(response));
}

function put() { // Put or patch request (update) --url/ + id number
    axios.put('https://jsonplaceholder.typicode.com/users/1', {
        name: 'Thien',
        age: 20,
        male: true
    })
    .then(response => render(response));
}

function remove() { // Delete request --url/ + id number
    axios.delete('https://jsonplaceholder.typicode.com/users/1')
    .then(response => render(response));
}

// Render Function
function render(res) {
    document.getElementById('render').innerHTML = `
    <div>
        <h5>Status: ${res.status}</h5>
        <hr />
    </div>
    
    <div>
        <div>
            <h5>Headers</h5>
        </div>
        <div>
            <pre>${JSON.stringify(res.headers, null, 2)}</pre>
        </div>
        <hr />
    </div>
    
    <div>
        <div>
            <h5>Data</h5>
        </div>
        <div>
            <pre>${JSON.stringify(res.data, null, 2)}</pre>
        </div>
        <hr />
    </div>

    <div>
        <div>
            <h5>Config</h5>
        </div>
        <div>
            <pre>${JSON.stringify(res.config, null, 2)}</pre>
        </div>
        <hr />
    </div>
    `;
}