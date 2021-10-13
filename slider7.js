console.log('VIDEO 3 TEST')
var playerData = {
    accountId: "6260450541001",
    playerId: "default",
    videoId: "6276482491001"
};

// var me = document.currentScript;
// var children = me.parentElement.children
// for (var i = 0; i < children.length; i++) {
//     if (!children[i].classList.contains("noremove")) {
//         console.log('REMOVE IN DUPLICATE')
//         children[i].remove();
//     }
// }

playerHTML =
    '<video-js data-video-id="' +
    playerData.videoId +
    '"  data-account="' +
    playerData.accountId +
    '" data-player="' +
    playerData.playerId +
    '" data-embed="default" class="vjs-fluid vjs-4-3" data-muted="" loop></video-js>';
// Inject the player code into the DOM
var par = document.currentScript.parentElement
console.log(par)
par.innerHTML = playerHTML
// Add and execute the player script tag
var s = document.createElement("script");
s.src =
    "https://players.brightcove.net/" +
    playerData.accountId +
    "/" +
    playerData.playerId +
    "_default/index.min.js";
// Add the script tag to the document
document.body.appendChild(s);
