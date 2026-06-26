document
.getElementById("generate")
.addEventListener("click",generatePrompt);

function generatePrompt(){

const subject=
document.getElementById("subject").value;

const pose=
document.getElementById("pose").value;

const background=
document.getElementById("background").value;

const lighting=
document.getElementById("lighting").value;

const style=
document.getElementById("style").value;

const ratio=
document.getElementById("ratio").value;

const platform=
document.getElementById("platform").value;

const prompt=
`${subject}, ${pose}, ${background}, ${lighting}, ${style}, aspect ratio ${ratio}, optimized for ${platform}, ultra realistic, highly detailed, no text, no watermark`;

document
.getElementById("output")
.value=prompt;

}

document
.getElementById("copy")
.addEventListener("click",function(){

navigator.clipboard.writeText(

document
.getElementById("output")
.value

);

alert("Prompt copied.");

});
