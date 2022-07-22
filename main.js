let data = [{   
    head: "Term of the Week - Stochastic Oscillator",
    summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum, rerum quaerat praesentium laboriosam nihil
    quod tenetur! Rem, aliquid? Animi fugit exercitationem maxime ab reiciendis, voluptatem similique et a in!`,
    image: "blog 2.png"
},
{   
    head: "Divergence Trading - An introduction for Traders",
    summary: `Olumo Rock is a mountain in south-western Nigeria. It is located in the city of Abeokuta, Ogun State,
    and was normally used as a natural fortress during inter-tribal warfare in the 19th century. Its patron spirit is venerated in the Yoruba
    religion as an orisha.The name olumo is the combination of two words- 'olu' which means god/deity, and 'mo' which means moulded.`,
    image: "blog 1.png",
},
{   
    head: "Term of the Week - Stochastic Oscillator",
    summary: `officially the Republic of Maldives, is an archipelagic country in the Indian subcontinent of Asia,
                  situated in the Indian Ocean. It lies southwest of Sri Lanka and India`,
    image: "blog 3.png"
},
{   
    head: "Eiffel tower",
    summary: `lorem ipsum went outside to kiss a fellow and ny mistake she kissed a snake how many does she need to survive  not being dead.`,
    image: "blog 2.png"
},
{   
    head: "Burjh khalifa",
    summary: `officially the Republic of Maldives, is an archipelagic country in the Indian subcontinent of Asia,
                  situated in the Indian Ocean. It lies southwest of Sri Lanka and India`,
    image: "blog 1.png"
}
]

function displayCarousel(image,head,summary) {
    
    return (`
        <div class="swiper-slide card">
            <div class="card-content">
            <div class="image">
                <img src="./image/${image}" alt="">
            </div>

            <div class="Lcard">
                <h3>${head}</h3>
                <p>${summary}</p>
                <p class="hide-txt" id="hide-btn" onclick="hideText(02)" >READ MORE</p>    
            </div>
            </div>
        </div>
    `)
}

mapData = data.map(dataItem => displayCarousel(dataItem.image,dataItem.head,dataItem.summary))
console.log(mapData)

document.getElementById("swipper-wrapper-content").innerHTML += mapData
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
