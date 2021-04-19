import '../style/style.css';
import './component/c19-header.js';
import './component/c19-footer.js';
import './component/c19-item.js';

const url = 'https://covid19.mathdro.id/api/countries/Indonesia/';

const data = () => {
    fetch(url)
        .then(response => response.json())
        .then(results => {
            const _confirmed = document.querySelector('[data-description="Confirmed"]');
            _confirmed.dataTitle = results.confirmed.value;
            const _recovered = document.querySelector('[data-description="Recovered"]');
            _recovered.dataTitle = results.recovered.value;
            const _deaths = document.querySelector('[data-description="Deaths"]');
            _deaths.dataTitle = results.deaths.value;
        })
        .catch((e) => {
            console.log(e);
            alert('failed to fetch data');
        });
};

data();