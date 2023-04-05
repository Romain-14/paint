import { getMouseLocation } from "./utils.js";

let ctx;

const state = {
    color: "blue",
    size: 3,
    currentPosition: {x: 0, y: 0},
    isDrawing: false,
}

// quand le clic de la souris est enclenché, on peut dessiner et on définit le point de départ du trait
function onMouseDown(e){
    state.isDrawing = true;
    state.currentPosition = getMouseLocation(e);
}

// quand on déplace la souris
function onMouseMove(e){
    // on récupère sa nouvelle position 
    const newPosition = getMouseLocation(e);
    // si on peut dessiner
    if(state.isDrawing){
        ctx.strokeStyle = state.color;
        ctx.lineWidth   = state.size;
        // on dessine
        ctx.beginPath();
        // le point de départ définit par la position ou était le curseur de la souris au moment l'appui sur le clic
        ctx.moveTo(state.currentPosition.x, state.currentPosition.y);
        // tracé jusqu'à la nouvelle position
        ctx.lineTo(newPosition.x, newPosition.y);
        // on part sur un nouveau trait 
        ctx.closePath();
        // appliquer le style
        ctx.stroke();
        // affecter la position de départ avec la position d'arrivé 
        // le point de départ devient le point d'arrivé et ainsi de suite afin de créer un "mouvement" tracé/dessiné
        state.currentPosition = newPosition;
    }
}

// au relâchement du clic ou à la sortie de la zone du canvas on ne peut plus dessiner !
function stopDrawing(){
    state.isDrawing = false;
}

function onClickColor(e){    
    state.color = e.target.dataset.color;
}

function onClickSize(e){
    state.size = e.target.parentNode.dataset.size;
}

function onClickClearSlate(){
    const canvas = document.getElementById("slate");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById("slate");
    ctx          = canvas.getContext("2d");

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    document.querySelectorAll(".pen-color")
        .forEach(btn => btn.addEventListener("click", onClickColor));

    document.querySelectorAll(".pen-size i")
        .forEach(btn => btn.addEventListener("click", onClickSize));

    clearSlate.addEventListener("click", onClickClearSlate);
});