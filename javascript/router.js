window.addEventListener("popstate", (event) => {
    const search = event.target.location.search;
    const params = new URLSearchParams(search);
    const page = params.get('page');
    openPage(page);
});

function openPage(page) {
    main.innerHTML = '';
    switch(page) {
        case 'warband': {
            toWarband();
            break;
        }
        default: {
            main.innerHTML = '';
            toWarbandSelection();
            break;
        }
    }
}

function route(page) {
    history.pushState({}, page, `?page=${page}`);
    openPage(page);
}

main.innerHTML = '';
toWarband();