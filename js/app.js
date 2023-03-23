document.addEventListener('DOMContentLoaded', function () {
    const dice = document.getElementsByTagName('main');

    dice[0].children[3].addEventListener('click', () => {
        API();
    });

    function API() {
        fetch('https://api.adviceslip.com/advice', { cache: "reload" })
            .then(response => response.json())
            .then(data => {
                dice[0].children[0].textContent = `ADVICE #${data.slip.id}`;
                dice[0].children[1].textContent = `"${data.slip.advice}"`;
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
        }

        API();
    });