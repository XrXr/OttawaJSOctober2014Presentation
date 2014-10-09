function replaceText () {
    let walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    let node;

    while((node = walker.nextNode())) {
        if (node.parentElement.nodeName == "SCRIPT") {
            continue;
        }
        node.textContent = node.textContent.replace(/\bForce/g, "Horse");
        node.textContent = node.textContent.replace(/\bforce/g, "horse");
    }
}

replaceText();