
//The function to make the favicon.
function makeFavicon(letters, color, backgroundColor, fontSizeInPixels, x, y) {
    // ideas influenced by:
    // https://stackoverflow.com/users/906658/bengt
    // https://stackoverflow.com/questions/12809144/how-to-create-a-favicon-in-javascript
    //
    //put this in head of html document
    //<link id="favicon-link" rel="icon" type="image/x-icon" href="">
    let canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;

    let ctx = canvas.getContext('2d');
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, 16, 16);

    let ctx2 = canvas.getContext("2d");
    ctx2.fillStyle = color;
    ctx2.font = "bold "+fontSizeInPixels.toString()+"px Arial";
    ctx2.fillText(letters, x, y);

    let link = document.getElementById("favicon-link");
    link.href = canvas.toDataURL("image/x-icon");
}
//Call the function to make the favicon
makeFavicon("Yo", "white", "blue", 12, 1, 12);