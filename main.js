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

//let getDoc = document.getElementById("carousle-cell")
mapData = data.map(dataItem => {
    return displayCarousel(dataItem.image,dataItem.head,dataItem.summary)}
)

//console.log(mapData)


document.getElementById("learnSec").innerHTML = mapData

/* function hideText(id) {
    console.log(id)
    document.get
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("hide-btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
} */
