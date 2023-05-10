
function showDiv(toggle){
    const isDisplay = document.getElementById(toggle);
    if(isDisplay.style.display === "none") {
        isDisplay.style.display = "block";
    } else {
        isDisplay.style.display = "none";
    }
    // document.getElementById(toggle).style.display = 'block';
}




// function showDiv() {
//     const college_form =  document.getElementById("college-form");
//     if(college_form.style.display == "none") {

//     }
//     document.getElementById("college-form").style.display = "";
// }

// var fieldId = 0;
// function addElement(parentId, elementTag, elementId, html) {
//     var id = document.getElementById(parentId);
//     var newElement = document.createElement(elementTag);
//     newElement.setAttribute('id', elementId);
//     newElement.innerHTML = html;
//     id.appendChild(newElement);
// }

// function addField() {
//     fieldId++;
//     var html = '<input type="text" name="form[]" class="form-control" placeholder="Please enter here">';
//     addElement('forms', 'div', 'field-'+fieldId, html);
// }