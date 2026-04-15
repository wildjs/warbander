function openPage(page) {
    switch(page) {
        case 'warband': {
            toWarband(main);
            break;
        }
        default: {
            console.log('Ahaaaawada')
            break;
        }
    }
}

function route(url) {
    history.pushState({ page: 1 }, 'Warband', '?page=warband');
    main.innerHTML = '';
    toWarband(main);
}