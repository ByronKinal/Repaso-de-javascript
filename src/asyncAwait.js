function obtenerPost(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.error(`Error fetching post:`, err));
}

/*obtenerPost(1).then(post => {
    console.log("post obtenida: ", post)
});*/

const obtenerDatos = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await response.json();
    return data;
}

obtenerDatos(2).then(post => {
    console.log("post obtenido: ", post);
});
