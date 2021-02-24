function fetchData () {
    fetch("https://xkcd.now.sh/?comic=latest")
    .then(response => response.json())
    .then(data => {
        let imgDiv = document.getElementById("imgDiv")
        imgDiv.innerHTML = `<h2 id="title">${data.title}</h2> <img id="img" src="${data.img}"/>`;
    })
    .catch(error => console.log(error))
}
fetchData();