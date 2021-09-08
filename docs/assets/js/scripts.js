//======= create functons ========//

// 1. dragNdrop(event)
function dragNdrop(e){
    let file_name       = URL.createObjectURL(e.target.files[0]); // will store file name with src
    let preview         = document.querySelector('#preview');   // the div where we will show image
    let previewImg      = document.createElement('img'); // creating new image tag
    previewImg.classList.add('shadow-lg');
    previewImg.setAttribute('src', file_name);  // setting attribute src of newly created "img" element to "filename"
    preview.innerHTML   = "";
    preview.appendChild(previewImg); // finally append "img" element to parent element "preview"
}

// 2. drag(event
function drag(e){
    // while dragging it will fire this function that will add the following class
    document.querySelector('.dragBox').classList.add('draging');
}

// 3. finally file drop(event)
function drop(e){
    document.querySelector('#uploadFile').parentNode.className = 'dragBox';
}