async function getData() {
    const user = await fetch("https://gnews.io/api/v4/top-headlines?token=b2fee55386b4bda44e126fa53bb6374a&lang=en", {
        method: "GET"
    });
    const data = await user.json();

    const news = document.createElement("div");
    news.classList.add("container");

    data.articles.forEach(el => {
        const container = document.createElement("div");
        container.classList.add("grid");
        let date = new Date(el.publishedAt);
        container.innerHTML =
            `
            <img src="${el.image}" class="img">
            <h3>${el.title}</h3>
            <div>${el.description}</div>
            <p>${el.content}</p>
            <a href="${el.url}" target="_blank" class="site">Click here for more information</a>
            <div><i>Published on : ${date.toDateString()}</i></div>
            `;
        news.append(container);
    });
    document.body.append(news);
}
getData();