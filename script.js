function change( elemID, image){
    document.getElementById(elemID).src = image;

}

function reveal(elemID) {
    const element = document.getElementById(elemID);
    element.style.visibility = 'hidden';
    
    setTimeout(() => {
        element.style.visibility = 'visible';
    }, 2000);
}


