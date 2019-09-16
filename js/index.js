function pageScrollTo(destId) {
    const duration = 500
    var dest = $(`#${destId}`)[0];
    var to = dest.offsetTop 
    $('html, body').animate({scrollTop: to}, duration)
}

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

$(window).on('load', function(){
    let url = "https://www.instagram.com/_whitebunni__/?__a=1"
    let id = "9864203919"

    function addIGPhotos(nodes) {
        let frameBoxEl = $('.framebox')
        for (let node of nodes) {
            let url = node.node.display_url
            frameBoxEl.prepend(`
                <div class="row">
                    <div class="media">
                        <img src="${url}" alt=".">
                    </div>
                </div>
            `)
        }
    }

    $.get(url, function(data) {
        let mediaEdge = data.graphql.user.edge_owner_to_timeline_media
        addIGPhotos(mediaEdge.edges)
        let end_cursor = mediaEdge.page_info.end_cursor
        if (mediaEdge.page_info.has_next_page) {
            let url = "https://www.instagram.com/graphql/query/";
            let variables = encodeURIComponent('{"id":"' + id + '","first":100,"after":"' + end_cursor + '"}');
            url = url + "?query_hash=472f257a40c653c64c666ce877d59d2b&query_id=17888483320059182&variables=" + variables;
            let options = {
                url: url,
                headers: {
                    Cookie: "Cookie value which i copied from my logged in instagram browser window"
                }
            };
            $.get(url, options).done(function(result){
                let imageNodes = result.data.user.edge_owner_to_timeline_media.edges
                addIGPhotos(imageNodes)
            })
        }
    })
});