const btn = document.getElementById("btn");
const colorRGB = document.getElementById("color-rgb");
const colorHEX = document.getElementById("color-hex");
const copyBtn = document.querySelectorAll(".copy");
const alert = document.getElementById("alert");
console.log(alert.classList)
style = document.getElementById('alert').classList
console.log(style);
copyBtn.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const test = e.currentTarget.parentElement.querySelector("input");
		console.log(test.value);

        // test.setSelectionRange(0, 99999); //para mobile
        navigator.clipboard.writeText(test.value);
        alert.classList.add("alert-show");
        setTimeout(() => {
            console.log('teste')
            alert.classList.remove("alert-show");
        }, 500);

        console.log(alert);
        
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

	console.log(rgb);
	let hex = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    hex = hex.toUpperCase()
    
    console.log(hex);
	document.body.style.backgroundColor = rgb;
	colorRGB.value = rgb;
	colorHEX.value = hex;
});
