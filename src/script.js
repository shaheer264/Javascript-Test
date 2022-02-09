function myFunction() {
    var name= document.getElementById('name').value;
    var number= document.getElementById('number').value;
    var namlen=name.length;
    numlength=number.length;
    logic(name, number, namlen,numlength);
}
function logic(name,number,namelength,numlength) {
    number = number*1;
    if (isNaN(number)) {
        document.getElementById('form2').innerHTML= '<label for="number">Enter Number</label>\
        <input type="text" id="number" class="number1" name="number"><br>\
        <label id="error">*Only enter the Phone number*</label><br>';
    }
    else if (numlength==0) {
        document.getElementById('form2').innerHTML= '<label for="number">Enter Number</label>\
        <input type="text" id="number" class="number1" name="number"><br>\
        <label id="error">*This field is required*</label><br>';
    }
    else if (numlength!=10) {
        document.getElementById('form2').innerHTML= '<label for="number">Enter Number</label>\
        <input type="text" id="number" class="number1" name="number"><br>\
        <label id="error">*Enter complete Phone number*</label><br>';
    }
    else {
        document.getElementById('form2').innerHTML= '<label for="number">Enter Number</label>\
        <input type="text" id="number" class="number" name="number"><br>';
    }

    if (namelength==0) {
        document.getElementById('form1').innerHTML= '<label for="name">Enter Name</label>\
        <input type="text" id="name" class="name1" name="name"><br>\
        <label id="error">*This field is required*</label><br>';
    }
    else if (!isNaN(name)) {
        document.getElementById('form1').innerHTML= '<label for="name">Enter Name</label>\
        <input type="text" id="name" class="name1" name="name"><br>\
        <label id="error">*Enter name only*</label><br>'
    }
    else {
        document.getElementById('form1').innerHTML= '<label for="name">Enter Name</label>\
        <input type="text" id="name" class="name" name="name"><br>';
    }
}
