//
//             ,dPYb,              ,dPYb,
//             IP'`Yb              IP'`Yb
//             I8  8I              I8  8I
//             I8  8'              I8  8'          d88b            d88b
//     ,gggg,  I8 dPgg,    ,ggg,   I8 dP         d8b  d8b        d8b  d8b
//    dP"  "Yb I8dP" "8I  i8" "8i  I8dP          Y8P  Y8P        Y8P  Y8P
//   i8'       I8P    I8  I8, ,8I  I8P
//   d8,_    _,d8     I8, `YbadP' ,d8b,_     ,      d8b,          ,d8b
//    "Y8888PP88P     `Y8888P"Y888PI8"8888888"         '"Y888888P"`
//                                 I8 `8,
//                                 I8  `8,
//                                 I8   8I
//                                 I8   8I
//                                 I8, ,8'
//                                  "Y8P'
//
//-------------------------------------.
// Ingredients -                        `
//     garnish : CSS Stylesheet          |
//     main    : Javascript Payload      |
//     base    : jQuery required        `
//-------------------------------------`
window.ingredients =
{
    garnish : 'garnish.css',
    main : 'main.js',
    base : 'http://code.jquery.com/jquery-1.4.2.min.js'
}

//-------------------------------------.
// Serve(ingredients) -                 `
//     Processes the files passed via    |
//     the ingredients, and adds the     |
//     to the current page              `
//-------------------------------------`
function serve(ingredients)
{
    // Add JQuery package to the page
    var base = document.createElement('script');
    base.src =  ingredients.base;
    base.type = 'text/javascript';

    // Once JQuery has been loaded...
    base.onload = function()
    {
        // Attach the stylesheet to the page
        $('<link>').attr(
            {
                href: ingredients.garnish,
                rel: 'stylesheet'
            }
        ).appendTo('head');

        // Attach the payload to the page
        var main = document.createElement('script');
        main.src =  ingredients.main;
        main.type = 'text/javascript';
        document.body.appendChild(main);
    };

    document.body.appendChild(base);
}

//                 _ _ _
//                  )__(
// Serve the order ( ^-^).~~
serve(window.ingredients);