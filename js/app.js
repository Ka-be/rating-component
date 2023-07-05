const starContainer = document.querySelector('.star-container');
const stars = document.querySelectorAll('.star');
const commentBox = document.querySelector('.comment-container');
const comments = [
	"A chier",
	"Bof",
	"C'est juste",
	"On kiffe",
	"C'est du génie"
]

stars.forEach((star, index) => {
    star.setAttribute("id", index + 1);

    star.addEventListener("mouseover", () => {
        stars.forEach((star, i) => {
            if (i <= index) {
                star.style.fill = "#F3F4F6";
                star.querySelector("path").setAttribute("stroke", "#F3F4F6");
								commentBox.innerHTML = comments[i];
								
            } else {
                star.style.fill = "";
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

