function buttonClick(){
	one.value = one.value.replace(/\s+/g, "");
	two.value = two.value.replace(/\s+/g, "");
	

	if (one.value == "voidface(intx,int y)"){
		text1.innerHTML = "正解";
	}else{
		text1.innerHTML = "不正解　解答：void face(int x, int y)";
	}

	if (two.value == "translate(x,y);"){
		text2.innerHTML = "正解";
	}else{
		text2.innerHTML = "不正解　解答：translate(x, y);";
	}

	

}

//解答欄１
var textBox1 = document.getElementById("one");
const text1 = document.getElementById("text1");

//解答欄２
var textBox2 = document.getElementById("two");
const text2 = document.getElementById("text2");

let checkButton = document.getElementById("btn");
checkButton.addEventListener("click", buttonClick);