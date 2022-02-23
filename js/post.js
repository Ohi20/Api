function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(data){
    const postContainer = document.getElementById('post') 
    for(const element of data){
        console.log(element.title);
        const div = document.createElement('div');
        div.classList.add('post'); 
        div.innerHTML = `
        <h3>${element.title} </h3>
        <p> ${element.body}  </p>
        `;
        postContainer.appendChild(div);
        console.log(element.title)
    
    }
}