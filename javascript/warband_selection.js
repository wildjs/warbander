function toWarbandSelection() {
    fileHandle = undefined;

    const header = createTag('h1');
    header.innerHTML = 'Warband Selection';
    main.appendChild(header);

    const open = createTag('div');
    open.innerHTML = 'Open from File';
    open.addEventListener('click', () => {
        openHandle();
    });
    main.appendChild(open);

    const create = createTag('div');
    create.innerHTML = 'Create Warband';
    create.addEventListener('click', () => {
        createHandle();
    });
    main.appendChild(create);

}

async function openHandle() {
    const options = {
        types: [
            {
                description: "JSON File",
                accept: { "application/json": [".json"] },
            },
        ],
    };
    fileHandle = await window.showOpenFilePicker(options);
    if (fileHandle) {
        route('warband');
    }
}

async function createHandle() {
    const options = {
        suggestedName: 'my_warband.json',
        types: [
            {
                description: "JSON File",
                accept: { "application/json": [".json"] },
            },
        ],
    };
    fileHandle = await window.showSaveFilePicker(options);
    if (fileHandle) {
        route('warband');
    }
}

async function toDisk(asString) {
    console.log(asString);
    let filestream = undefined;
    if (fileHandle) {
        console.log('Already Exists');
        fileStream = await fileHandle.createWritable();
    } else {
        fileHandle = await window.showSaveFilePicker();
        fileStream = await fileHandle.createWritable();
    }
    await fileStream.write(new Blob([asString], {type: "text/plain"}));
    await fileStream.close();
}