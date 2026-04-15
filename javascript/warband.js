async function toWarband() {
    const h1 = createTag('h2');
    h1.innerHTML = warband.name;
    main.appendChild(h1);

    const container = createTag('section');
    main.appendChild(container);

    for (const unit of warband.units) {
        const unitContainer = createTag('div');
        unitContainer.innerHTML = unit.name;
        container.appendChild(unitContainer);
    }
}