// this function is for treat the errors
const handleError = (err) => console.log(`Request failed: ${err}`)

// this is a asynchronous function that obtains a article with the id that it sends as parameter
async function getArticle(id) {
	url = "https://vpet-api.herokuapp.com/blog/articles/" + id + '/' // api url
	try {
		const response = await fetch(url) // await process that make a fetch to url
		const article = await response.json() // await const is asigned with json response value
		const responseAuthor = await fetch(article.author)
		const author = await responseAuthor.json()
		await console.log(article)
		await console.log(author)
		await document.write(`El articulo "${article.title}" fue escrito por "${author.name}"`)
	} catch(err) {
		handleError(err) // if try is not successful catch an error
	}
}

getArticle(1)