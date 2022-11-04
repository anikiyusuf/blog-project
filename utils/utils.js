const readingTime = (article) =>{
    const numOfWords = article.split( ' ').length
    const wordsPerMinute = numOfWords  / 250
    return Math.round(wordsPerMinute) === 0 ? 1 : Math.round(wordsPerMinute)
}


module.exports = {readingTime}