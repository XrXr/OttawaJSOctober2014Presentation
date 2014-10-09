function replaceText (groups) {
    let walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    let node;

    groups = groups.map(group => [new RegExp("\\b"+group[0]), group[1]]);

    while((node = walker.nextNode())) {
        if (node.parentElement.nodeName == "SCRIPT") {
            continue;
        }
        groups.map(group => node.textContent = node.textContent.replace(group[0], group[1]));
        // node.textContent = node.textContent.replace(/\bForce/g, "Horse");
        // node.textContent = node.textContent.replace(/\bforce/g, "horse");
    }
}

self.port.on("doReplace", replaceText);