const articles = [
    {
        id: 1,
        title: "Test Article",
        cover: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        summary: "If a dog chews shoes whose shoes does he choose?"
    },
    {
        id: 2,
        title: "Using VueX",
        cover: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        summary: "If a dog chews shoes whose shoes does he choose?"
    },
    {
        id: 3,
        title: "Custom AI",
        cover: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        summary: "If a dog chews shoes whose shoes does he choose?"
    }
]

export const findArticleById = (articleId: string) => {
    const article = articles.find(article => article.id == parseInt(articleId));
    return new Promise((resolve) => {
        resolve(article);
    })
}