const noPaste = document.getElementById('no-paste');
const pasteAllowed = document.getElementById('paste-allowed');

//remove paste
noPaste.onpaste = (e) => {
    e.preventDefault();
    return false;
}

// re-enable paste 
document.addEventListener('paste', (e) => {
    e.stopImmediatePropagation();
    return true;
}
, true);
