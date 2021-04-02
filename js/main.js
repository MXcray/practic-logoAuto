menu.onclick = function responseNav() {
    let nav = document.getElementById('myHeaderNav');
    if (nav.className === 'header__nav') {
        nav.className += ' responsive'
    } else {
        nav.className = 'header__nav'
    }
}