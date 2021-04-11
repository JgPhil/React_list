let n = 0;

function numberFormat(n) {
    return n.toString().padStart(2, '0')
}

function render() {
    const items = [
        'Tache 1',
        'Tache 2',
        'Tache 3',
    ]
    
    const title = <div>
        <h1 className='title' id={'title' + n}>
            Bonjour les gens <span>{numberFormat(n)}</span>
        </h1>
        <ul>{items.map((item, key)=> <li key={key} >{item}</li>)}</ul>
    </div>


    ReactDOM.render(title, document.querySelector('#app'));
}

render()

window.setInterval(() => {
    n++
    render();
}, 500)