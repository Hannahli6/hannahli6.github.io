var current_tab = 0
// display default tab
onTabPress(current_tab)

var photos = [
    {
        "name": "campfire.jpg",
        "type": "illustration"
    },
    {
        "name": "donut_coffee.jpg",
        "type": "3d-art"
    },
    {
        "name": "fanart.jpg",
        "type": "3d-art"
    },
    {
        "name": "fries_pin.jpg",
        "type": "illustration"
    },
]

displayAllImages()

function displayAllImages() {
    for (var i = 0; i < photos.length; i++) {
        var photo = photos[i]
        // Create a <div class="media"><img scr="/images/" + campfire.jpg /></div>
        // console.log("/images/" + photos[i].name)
        console.log(i % 3)
    }
}


// 0: artwork, 1: about, 2: contact
function onTabPress(index) {
    console.log("Button index: ", index)
    hideAllTabs()
    if (index == 0) {
        $('#artwork').css({
            "display": "block"
        })
    } else if (index == 1) {
        $('#about').css({
            "display": "block"
        })
    } else if (index == 2) {
        $('#contact').css({
            "display": "block"
        })
    }
    current_tab = index
}

function hideAllTabs() {
    $('#artwork').css({
        "display": "none"
    })
    $('#about').css({
        "display": "none"
    })
    $('#contact').css({
        "display": "none"
    })
}
