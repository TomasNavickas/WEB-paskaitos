$.get('/script/menu.json', renderMenu);


function renderMenu(meniu) {
    var links = '';
    for (var i = 0; i < meniu.length; i++) {
        links += '<a href="' + meniu[i].url + '">' + meniu[i].title + '</a>';

    }
    $('nav.top').html(links);
};

