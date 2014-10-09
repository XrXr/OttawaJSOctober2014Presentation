const PageMod = require("sdk/page-mod").PageMod;
const data = require("sdk/self").data;
const sPrefs = require("sdk/simple-prefs");

PageMod({
    include: "*",
    contentScriptFile: data.url("replace.js"),
    onAttach: worker => worker.port.emit("doReplace", getReplaceGroup())
});

function getReplaceGroup () {
    let pattern = sPrefs.prefs.pattern.split("|");
    let result = sPrefs.prefs.result.split("|");
    return pattern.map((elem, index) => {
        return [elem, result[index]];
    });
}