import '../css/styles.css';

function fetchInformation()
{
    fetch('https://api.api-ninjas.com/v1/quotes', {
        method: 'GET',
        headers: 
        {
            'X-Api-Key': '18eh49sdeClTOGU+bnh/hA==qvY5ICmxswDZSWHL'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const quote = data[0]; // API returns an array
            iOHandle.$quoteInsertion.innerHTML = `<p>${quote.quote} — ${quote.author}</p>`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
        });


}

class IOHandle
{
    $randomQuoteButton;
    $quoteInsertion;

    constructor()
    {
        this.$randomQuoteButton = document.getElementById("rQButton");
        this.$quoteInsertion = document.getElementById("quoteInsertion");

        this.clickHandle = this.clickHandle.bind(this);

        this.buttonActivation();
    }

    buttonActivation()
    {
        this.$randomQuoteButton.onclick = this.clickHandle;
    }

    clickHandle()
    {
        fetchInformation();
    }
}

const iOHandle = new IOHandle();

window.onload = () => {iOHandle};
