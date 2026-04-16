const main = document.querySelector('main');
let warband = {
    name: 'My Warband',
    units: [
        {
            name: 'Captain',
            type: 'hero',
            quantity: 1,
            stats: {
                adv: 5,
                mar: 10,
                dis: 6,
                rat: 5,
                upk: 3,
                lvl: 8,
                hp: 6,
                def: 4,
                res: 3,
                arm: 0,
                att: 1,
                off: 4,
                str: 3,
                ap: 0,
                agi: 6,
                aim: 4,
            },
        },
        {
            name: 'Chicka',
            type: 'henchman',
            quantity: 7,
            stats: {
                adv: 5,
                mar: 10,
                dis: 10,
                rat: 10,
                upk: 10,
                lvl: 10,
                hp: 6,
                def: 4,
                res: 3,
                arm: 0,
                att: 1,
                off: 4,
                str: 3,
                ap: 0,
                agi: 6,
                aim: 14,
            },
        },
    ],
};
let fileHandle = undefined;

function createTag(
    tag,
    classNames
) {
    const element = document.createElement(tag);
    if (classNames) {
        const splits = classNames.split(' ');
        for (const split of splits) {
            if (split) {
                element.classList.add(split);
            }
        }
    }
    return element;
}

async function persist(warband) {
    if (!warband) {
        return;
    }
    if (!fileHandle) {
        return;
    }
    const asString = JSON.stringify(warband);
    const fileStream = await fileHandle.createWritable();
    await fileStream.write(new Blob([asString], {type: "text/plain"}));
    await fileStream.close();
}