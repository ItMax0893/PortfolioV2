var $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

let cont1 = document.querySelector('.contacts')
let cont2 = document.querySelector('.contacts_block')

if (screen.width < 1201) {
    cont1.removeAttribute('id')
    cont2.setAttribute('id', 'contacts')
}

