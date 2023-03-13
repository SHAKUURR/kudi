"use strict";
// const nodeButton = document.querySelector(".button.node");
// const javaButton = document.querySelector(".button.java");
// const pythonButton = document.querySelector(".button.python");
// const nodeCode = document.querySelector(".code.node");
// const javaCode = document.querySelector(".code.java");
// const pythonCode = document.querySelector(".code.python");

// nodeButton.addEventListener("click", function () {
// 	nodeCode.style.display = "block";
// 	javaCode.style.display = "none";
// 	pythonCode.style.display = "none";
// });

// // javaButton.addEventListener("click", function () {
// // 	nodeCode.style.display = "none";
// // 	javaCode.style.display = "block";
// // 	pythonCode.style.display = "none";
// // });

// pythonButton.addEventListener("click", function () {
// 	nodeCode.style.display = "none";
// 	javaCode.style.display = "none";
// 	pythonCode.style.display = "block";
// });

const nodeButton = document.querySelector(".button.node");
const javaButton = document.querySelector(".button.Java");
const pythonButton = document.querySelector(".button.python");

const nodeCode = document.getElementById("nodeText");
const javaCode = document.getElementById("javaText");
const pythonCode = document.getElementById("pythonText");

javaButton.addEventListener("click", function () {
	javaCode.style.display = "block";
	nodeCode.style.display = "none";
	pythonCode.style.display = "none";
	javaButton.classList.add("active");
	nodeButton.classList.remove("active");
	pythonButton.classList.remove("active");
});

pythonButton.addEventListener("click", function () {
	pythonCode.style.display = "block";
	javaCode.style.display = "none";
	nodeCode.style.display = "none";
	javaButton.classList.remove("active");
	nodeButton.classList.remove("active");
	pythonButton.classList.add("active");
});

nodeButton.addEventListener("click", function () {
	pythonCode.style.display = "none";
	javaCode.style.display = "none";
	nodeCode.style.display = "block";
	javaButton.classList.remove("active");
	nodeButton.classList.add("active");
	pythonButton.classList.remove("active");
});

// /////SLIDER IMAGE

// const btn = document.querySelectorAll(".slider");

// const slide = document.getElementById("slide");

// btn[0].onclick = function () {
// 	slide.style.transform = "translateX(0px)";
// };

// btn[1].onclick = function () {
// 	slide.style.transform = "translateX(-400px)";
// };

// btn[2].onclick = function () {
// 	slide.style.transform = "translateX(-800px)";
// };

// btn[3].onclick = function () {
// 	slide.style.transform = "translateX(-1200px)";
// };

const mainMenu = document.querySelector(".nav-item");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu = document.querySelector(".menu");
const menu_items = document.querySelectorAll(".nav-link");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
	menu.style.display = "block";
	// mainMenu.style.display = "flex";
	// mainMenu.style.top = "0";
}
function close() {
	menu.style.display = "none";
}

menu_items.forEach((item) => {
	item.addEventListener("click", function () {
		close();
	});
});

menu_items.forEach((item) => {
	item.addEventListener("click", function () {
		close();
	});
});
