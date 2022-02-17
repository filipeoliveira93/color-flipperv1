const btn = document.getElementById("btn");
const colorRGB = document.getElementById("color-rgb");
const colorHEX = document.getElementById("color-hex");
const copyBtn = document.querySelectorAll(".copy");
const alert = document.getElementById("alert");

copyBtn.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const copycolor = e.currentTarget.parentElement.querySelector("input");

        navigator.clipboard.writeText(copycolor.value);
        alert.classList.add("alert-show");
        setTimeout(() => {
            alert.classList.remove("alert-show");
        }, 500);        
	});
});

function randomRGB() {
	let color = Math.floor(Math.random() * 256);
	color.length == 1 ? (color = "0" + color) : color;
	return color;
}

btn.addEventListener("click", () => {
	const r = randomRGB();
	const g = randomRGB();
	const b = randomRGB();
	let rgb = "rgb(" + r + ", " + g + ", " + b + ")";
	let hex = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    hex = hex.toUpperCase()
	document.body.style.backgroundColor = rgb;
	colorRGB.value = rgb;
	colorHEX.value = hex;
});
