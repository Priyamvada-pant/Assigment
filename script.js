
$(document).click(function (event) {
    console.log("event.target", event.target.parentElement)
    event.target.parentElement.parentElement.removeChild(event.target.parentElement)
});

function shuffle(divs, iterations) {
    debugger;
    console.log("divs", divs)

    for (var i = iterations; i > 0; i--) {
        var div1 = divs[Math.floor(Math.random(12))],
            div2 = divs[Math.floor(Math.random(12))];
        var savedLeft = div1.css("left"),
            savedTop = div1.css("top");

        div1.css("left", div2.css("left"));
        div1.css("top", div2.css("top"));
        div2.css("left", savedLeft);
        div2.css("top", savedTop);
    }
};
