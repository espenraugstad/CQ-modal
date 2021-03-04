//Elements
const toc = document.getElementById('toc');
const tocBtn = document.getElementById('tocBtn');

const tocHtml = `
<div id="tocHeader"><h2>Innholdsfortegnelse</h2> <span id="tocClose">X</span></div>    

    <h3>KAPITTEL 1 - Introduksjon til programmering</h3>
    <ul>
        <li><a href="#">Læringsmål Introduksjon</a></li>
        <li><a href="#">Hva er programmering?</a></li>
        <li><a href="#">Programmeringsspråk</a></li>
    </ul>

    <h3>KAPITTEL 2 - Variabler</h3>
    <ul>
        <li><a href="#">Læringsmål Variabler</a></li>
        <li><a href="#">Dataprogram</a></li>
        <li><a href="#">Hva er en variabel?</a></li>
    </ul>
`;

tocBtn.addEventListener('click', () => {
    toc.innerHTML = tocHtml;
    const tocClose = document.getElementById('tocClose');
    tocClose.addEventListener('click', ()=>{
        toc.innerHTML = '';
    });
});