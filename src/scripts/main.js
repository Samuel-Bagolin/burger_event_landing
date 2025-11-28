AOS.init();

const tab = document.getElementById('tab');
const aba = document.getElementById('aba');

tab.addEventListener('click', () => {
    aba.classList.toggle('show-off')
});

// Data do evento: 1 de Setembro de 2026
const dataFinal = new Date(2026, 8, 1, 12, 0, 0);
const dataFinal1 = dataFinal.getTime();

const timerFinal = setInterval(() => {
    const timer = document.getElementById('timer');

    const dataInicial = new Date();
    const dataInicial2 = dataInicial.getTime();
    let resto = 0;
    let MiliFinal = dataFinal1 - dataInicial2;

    const days = Math.floor(MiliFinal/(24*60*60*1000));
    resto = MiliFinal - days*24*60*60*1000;
    
    const hours = Math.floor(resto/(60*60*1000));
    resto = MiliFinal - days*24*60*60*1000 - hours*60*60*1000;

    const min = Math.floor(resto/(60*1000));
    resto = MiliFinal - days*24*60*60*1000 - hours*60*60*1000 - min*60*1000;

    const secs = Math.floor(resto/1000);

    if (dataFinal1 >= dataInicial2) {
        timer.textContent = `${days}d ${hours}h ${min}m ${secs}s`;
    } else {
        timer.textContent = 'O evento começou! 🎉';
        clearInterval(timerFinal);
    }

}, 1000);

// Adicionar smooth scroll para os links do menu
document.querySelectorAll('.info__list--item').forEach(item => {
    item.addEventListener('click', () => {
        aba.classList.remove('show-off');
        
        const text = item.textContent;
        if (text === 'Cardápio') {
            document.querySelector('.menu-preview').scrollIntoView({ behavior: 'smooth' });
        } else if (text === 'Localização') {
            document.querySelector('.location').scrollIntoView({ behavior: 'smooth' });
        } else if (text === 'Promoções') {
            document.querySelector('.highlights').scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Adicionar efeito de digitação no título
document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.header__title');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 1000);
});
