const PageMod = require("sdk/page-mod").PageMod;
const data = require("sdk/self").data;

PageMod({
    include: "*",
    contentScriptFile: data.url("replace.js")
});