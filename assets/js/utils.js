function getMouseLocation(e){
    // retourner un objet avec les positions
    return {x: e.offsetX, y: e.offsetY};
}

export {getMouseLocation};