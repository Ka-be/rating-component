const starContainer = document.querySelector('.star-container');
const stars = document.querySelectorAll('.star');
const textBox = document.querySelector('.comment-container_text');
const emojiBox = document.querySelector('.comment-container_emoji');
const comments = {
    text: [
        "Plus plat qu'un escargot écrasé.",
        "Aussi utile qu'un parapluie en carton.",
        "Dans la moyenne cosmique, mais avec une touche d'ennui interstellaire.",
        "Un pur plaisir galactique, mais pas encore assez pour un voyage en vaisseau spatial.",
        "Aussi épique qu'une licorne dansant sous une pluie de paillettes stellaires."
    ],
    emoji:[
        "🐌",
        "☔️",
        "🔭",
        "🚀",
        "🦄"
    ]
}

stars.forEach((star, index) => {
    star.setAttribute("id", index + 1);

    star.addEventListener("mouseover", () => {
        stars.forEach((star, i) => {
            if (i <= index) {
                star.style.fill = "#C3DDFD";
                star.style.filter = "drop-shadow(0px 0px 5px #A4CAFE)"
                star.querySelector("path").setAttribute("stroke", "#C3DDFD");
				textBox.innerHTML = comments.text[i];
                emojiBox.innerHTML = comments.emoji[i];
								
            } else {
                star.style.fill = "";
                star.style.filter = ""
                star.querySelector("path").setAttribute("stroke", "#4B5563");
            }
        });
    });

    starContainer.addEventListener("mouseout", () => {
        stars.forEach((star, i) => {
            if (i > index) {
                star.style.fill = "";
                star.querySelector("path").setAttribute("stroke", "#4B5563");
            }
        });
    });
});

