// Mapping through and rendering cards for the Learn Section Carousel.
let data = [{   
    head: "Term of the Week - Stochastic",
    summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum, rerum quaerat praesentium laboriosam nihil
    quod tenetur! Rem, aliquid? Animi.`,
    image: "blog 1.png"
},
{   
    head: "Divergence Trading - An introduction for Traders",
    summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum, rerum quaerat praesentium laboriosam nihil
    quod tenetur! `,
    image: "blog 2.png",
},
{   
    head: "Term of the Week - Stochastic",
    summary: `officially the Republic of Maldives, is an archipelagic country in the Indian subcontinent of Asia,
                  situated in the Indian Ocean. It lies southwest of Sri Lanka and India`,
    image: "blog 3.png"
},
{   
    head: "Eiffel tower",
    summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum, rerum quaerat praesentium laboriosam nihil
    quod tenetur! Rem, aliquid? Animi fugit exercitationem maxime.`,
    image: "blog 1.png"
},
{   
    head: "Burjh khalifa",
    summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum, rerum quaerat praesentium laboriosam nihil
    quod tenetur! Rem, aliquid? Animi fugit exercitationem maxime.`,
    image: "blog 1.png"
}
]

function displayCarousel(image,head,summary) {
    
    return (`
            <div class="card-content">
            <div class="image">
                <img src="./image/${image}" alt=""></img>
            </div>
            <div class="Lcard">
                <h3>${head}</h3>
                <p class='summary'>${summary}</p>
                    <p class="hide-txt" id="hide-btn" onclick="hideText(02)" >READ MORE</p>    
            </div>
            </div>
            `
    )
}

mapData = data.map(dataItem => {
    return displayCarousel(dataItem.image,dataItem.head,dataItem.summary)}
)

document.getElementById("learnSec").innerHTML = mapData
