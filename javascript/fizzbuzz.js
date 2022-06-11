

document.getElementById("mButton").onclick = function(){	
	const para = document.createElement("h2");

	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			const paramini = document.createElement("h6");
			/*paramini.setAttribute("id", "FB");
			document.getElementById("FB").style.color = "#00300a";*/
			const node = document.createTextNode("FizzBuzz ");
			paramini.appendChild(node);	
			para.appendChild(paramini);
			const element = document.getElementById("contain");
			element.appendChild(para);
		} else if (i % 3 == 0) {
			const paramini2 = document.createElement("h5");
			const node = document.createTextNode("Fizz ");
			paramini2.appendChild(node);	
			para.appendChild(paramini2);
			const element = document.getElementById("contain");
			element.appendChild(para);
		} else if (i % 5 == 0) {
			const paramini3 = document.createElement("h4");
			const node = document.createTextNode("Buzz ");
			paramini3.appendChild(node);	
			para.appendChild(paramini3);
			const element = document.getElementById("contain");
			element.appendChild(para);
		} else {
			const node = document.createTextNode(i + " ");	
			para.appendChild(node);	
			const element = document.getElementById("contain");
			element.appendChild(para);
		}
		/*const node = document.createTextNode(i + " ");
		para.appendChild(node);	
		const element = document.getElementById("contain");
		element.appendChild(para);*/
	}

	
}

