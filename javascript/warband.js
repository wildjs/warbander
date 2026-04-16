async function toWarband() {
    const h1 = createTag('h2');
    h1.innerHTML = warband.name;
    main.appendChild(h1);

    const container = createTag('section', 'warband');
    main.appendChild(container);

    for (const unit of warband.units) {
        renderUnit(container, unit);
    }
}

function renderUnit(parent, unit) {
    const color = unit.type === 'hero' ? 'purple' : 'blue';
    const quantity = unit.quantity <= 1 ? '' : unit.quantity;
    const html = `
<div class="unit-header ${color}">${unit.name} <span>${quantity}<span></div>
<div class="stats">
    <div class="bright">Adv</div>
    <div class="bright">Mar</div>
    <div class="bright">Dis</div>
    <div class="bright">Rat</div>
    <div class="bright">Upk</div>
    <div class="bright">Lvl</div>

    <div>${unit.stats.adv}</div>
    <div>${unit.stats.mar}</div>
    <div>${unit.stats.dis}</div>
    <div>${unit.stats.rat}</div>
    <div>${unit.stats.upk}</div>
    <div>${unit.stats.lvl}</div>

    <div class="bright">HP</div>
    <div class="bright">Def</div>
    <div class="bright">Rest</div>
    <div class="bright">Arm</div>
    <div class="bright"></div>
    <div class="bright"></div>
    <div>${unit.stats.hp}</div>
    <div>${unit.stats.def}</div>
    <div>${unit.stats.res}</div>
    <div>${unit.stats.arm}</div>
    <div></div>
    <div></div>

    <div class="bright">Att</div>
    <div class="bright">Off</div>
    <div class="bright">Str</div>
    <div class="bright">AP</div>
    <div class="bright">Agi</div>
    <div class="bright">Aim</div>

    <div>${unit.stats.att}</div>
    <div>${unit.stats.off}</div>
    <div>${unit.stats.str}</div>
    <div>${unit.stats.ap}</div>
    <div>${unit.stats.agi}</div>
    <div>${unit.stats.aim}</div>
</div>
    `;
    const unitContainer = createTag('div', 'unit');
    unitContainer.innerHTML = html;
    parent.appendChild(unitContainer);
}