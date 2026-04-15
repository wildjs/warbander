window.addEventListener("popstate", (event) => {
    console.log(event)
    openPage(undefined);
});

function createTag(
    tag,
    classNames
) {
    const element = document.createElement(tag);
    element.class = classNames;
    return element;
}