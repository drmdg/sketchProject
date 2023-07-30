
let container=document.getElementsByClassName("container");
let btnresize;
let gridSize=16;

btnresize=document.getElementById("resize");
btnresize.addEventListener('click',()=>{
    gridSize=prompt("Escolha o tamanho do grid, Insira um valor entre 1 e 100!");
    if(gridSize>0 && gridSize<=100){
        gerarQuadro();
    }
});

function gerarQuadro(){
    container[0].innerHTML="";
    wid=800/gridSize;
    hei=800/gridSize;
    for(let i=0;i<gridSize*gridSize;i++){
        let newdiv= document.createElement('div')
        newdiv.addEventListener('mouseover',colorgrid)
        newdiv.style.cssText=`width:${wid}px;height:${hei}px;`;
        newdiv.classList.add("box");
        container[0].appendChild(newdiv);
    }
}

function colorgrid(){
    this.classList.remove("box");
    this.classList.add("active");
}

function runSystem(){
    
}

gerarQuadro();
runSystem();


