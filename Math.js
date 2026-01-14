const random=Math.floor(Math.random()*20)
console.log(random)


function MakeRandomcolor() {
    let r=Math.floor(Math.random()*256);
    g=Math.floor(Math.random()*256);
    b=Math.floor(Math.random()*256);

        

    const Amoscolor = `rgb(${r},${g},${b})`
    document.getElementById("Code").innerHTML=Amoscolor
    document.body.style.backgroundColor = Amoscolor;
}
