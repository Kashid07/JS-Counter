let counter = 9999;

const Display = document.getElementById('display')

function PaddingAtStart(originalstring , desiredlength , padchar){
    const originalstringlength = originalstring.length;
    const remainingspace = desiredlength - originalstringlength;
    if (remainingspace >= 0){
        let newstring = originalstring;
        for(let i=0 ; i<remainingspace ; i++){
            newstring = padchar + newstring;
        }return newstring;
    }return originalstring;
}

function updatedisplay(){
    const spanelements = Display.children;
    let numbertostring = counter.toString()
    let paddedstring = PaddingAtStart(numbertostring,4,0);
    for (let i=0 ; i< paddedstring.length ; i++){
        spanelements[i].innerText = paddedstring[i];
    }
}

function addbox(){
    const span = document.createElement('span');
    span.classList.add('box');
    span.innerText= 0;
    Display.append(span);
}

function removeBox() {
    const boxes = document.querySelectorAll('.box');
    
    if (boxes.length > 0) {
        const lastBox = boxes[boxes.length - 1];
        Display.removeChild(lastBox);
    }
}
function increment(){

    // increase counter by 1;
    counter++;
    const boxcount = Display.children.length;
    if(counter.toString().length === 5 && boxcount === 4) {
        addbox();
    } else if(counter.toString().length === 6 && boxcount === 5) {
        addbox();
    }else if(counter.toString().length > 6) {
        return;
    }
    updatedisplay();
}

function decrement(){
    if(counter === 0) {
        return
    };
    counter--;
    updatedisplay();
}

function reset(){
    counter =0;
    updatedisplay();
}

updatedisplay();