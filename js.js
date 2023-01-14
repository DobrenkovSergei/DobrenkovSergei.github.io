/* Это объявление переменной, мы наши кнопку по тегу */
var button = document.querySelector('.share-button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('🚀 READY FOR TEST 🚀')
})

const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons);
async function copyText(e) 
{
	//prevent button going to the site
	e.preventDefault()
	const link = this.getAttribute('link')
	console.log(link)
	try {await navigator.clipboard.writeText(link)
		alert("Copied the text:" + link)
		} 
		catch(err) {
		console.error(err)
			}

}

