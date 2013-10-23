var highlighter = new ElementHighlighter();

$(highlighter.selectableElements).mouseover(function (event)
{
    event.stopPropagation();
    highlighter.mouseOverHandler(this,event);
});

$(highlighter.selectableElements).mouseleave(function (event)
{
    highlighter.mouseLeaveHandler(this,event);
});


function ElementHighlighter()
{
    this.selectableElements = "p, div, h1, h2, h3, h4, ul, li, a, span, strong, code";

    this.mouseOverHandler = function (element, event)
    {
        // Ensure the highlight is removed from everything before reapplying to current item
        $(this.selectableElements).removeClass("highlight-element");
        $(element).addClass("highlight-element");

        // Remove the legend before recreating it
        $('#highlight-legend').remove();
        $('.highlight-element').append("<div id=\"highlight-legend\">" + element.tagName + "</div>");
    }

    this.mouseLeaveHandler = function (element, event)
    {
        // Remove the highlight and legend
        $(element).removeClass("highlight-element");
        $('#highlight-legend').remove();
    }
}