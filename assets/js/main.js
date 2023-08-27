async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=4');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}
async function showData() {
    const data = await getData();
    const row = document.querySelector(".row");
    row.innerHTML = data
        .map(item=> {
            return `
            <div class="card">
                <img src="${item.url}" alt="${item.id}">
                <div class="card-content">
                    <h3>${item.title}</h3>
                    <p>This is the content of card ${item.id}</p>
                </div>
            </div>
                `;
        })
        .join("");
}
showData();
