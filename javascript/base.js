const main = document.querySelector('main');
let warband = {
    name: 'My Warband',
    units: [
        {
            name: 'Captain'
        },
        {
            name: 'Chicka'
        },
    ],
};
let fileHandle = undefined;

function createTag(
    tag,
    classNames
) {
    const element = document.createElement(tag);
    element.class = classNames;
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