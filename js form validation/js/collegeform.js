
function validation() {
    var application_number = document.getElementById("application_number").value;
    if (application_number == "") {
        var userapplication = document.getElementById("userapplication");
        userapplication.innerHTML = "cannot be empty.";
        document.getElementById("application_number").classList.add("border");
        document.getElementById("application_number").classList.add("border-danger");
        
        return false;
    }

    var name = document.getElementById("name").value;
    if (name == "") {
        var username = document.getElementById("username");
        username.innerHTML = "cannot be empty.";
        document.getElementById("name").classList.add("border");
        document.getElementById("name").classList.add("border-danger");
        return false;
    }
    var regex_name = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
    if (!regex_name.test(name)) {
        var username = document.getElementById("username");
        username.innerHTML = "please enter valid field.";
        document.getElementById("name").classList.add("border");
        document.getElementById("name").classList.add("border-danger");
        return false;
    }



    var email = document.getElementById("email").value;
    if (email == "") {
        var useremail = document.getElementById("useremail");
        useremail.innerHTML = "cannot be empty.";
        document.getElementById("email").classList.add("border");
        document.getElementById("email").classList.add("border-danger");
        return false;
    }

    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!re.test(email)) {
        var useremail = document.getElementById("useremail");
        useremail.innerHTML = "please enter valid field.";
        document.getElementById("email").classList.add("border");
        document.getElementById("email").classList.add("border-danger");
        return false;
    }




    var contact = document.getElementById("contact").value;
    if (contact == "") {
        var usercontact = document.getElementById("usercontact");
        usercontact.innerHTML = "cannot be empty.";
        document.getElementById("contact").classList.add("border");
        document.getElementById("contact").classList.add("border-danger");
        return false;
    }
    var regex_contact = /^[7-9][0-9]{9}$/;
    if (!regex_contact.test(contact)) {
        var usercontact = document.getElementById("usercontact");
        usercontact.innerHTML = "please enter valid field.";
        document.getElementById("contact").classList.add("border");
        document.getElementById("contact").classList.add("border-danger");
        return false;
    }

    var dob = document.getElementById("dob").value;
    if (dob == "") {
        var userdob = document.getElementById("userdob");
        userdob.innerHTML = "cannot be empty.";
        document.getElementById("dob").classList.add("border");
        document.getElementById("dob").classList.add("border-danger");
        return false;
    }

    var gender = document.getElementById("gender").value;
    if (gender == "") {
        var usergender = document.getElementById("usergender");
        usergender.innerHTML = "cannot be empty.";
        document.getElementById("gender").classList.add("border");
        document.getElementById("gender").classList.add("border-danger");
        return false;
    }

    var aadhar = document.getElementById("aadhar").value;
    if (aadhar == "") {
        var useraadhar = document.getElementById("useraadhar");
        useraadhar.innerHTML = "cannot be empty.";
        document.getElementById("aadhar").classList.add("border");
        document.getElementById("aadhar").classList.add("border-danger");
        return false;
    }

    var fname = document.getElementById("fname").value;
    if (fname == "") {
        var userfname = document.getElementById("userfname");
        userfname.innerHTML = "cannot be empty.";
        document.getElementById("fname").classList.add("border");
        document.getElementById("fname").classList.add("border-danger");
        return false;
    }

    var mname = document.getElementById("mname").value;
    if (mname == "") {
        var usermname = document.getElementById("usermname");
        usermname.innerHTML = "cannot be empty.";
        document.getElementById("mname").classList.add("border");
        document.getElementById("mname").classList.add("border-danger");
        return false;
    }

    var category = document.getElementById("category").value;
    if (category == "") {
        var usercategory = document.getElementById("usercategory");
        usercategory.innerHTML = "cannot be empty.";
        document.getElementById("category").classList.add("border");
        document.getElementById("category").classList.add("border-danger");
        return false;
    }

    var religion = document.getElementById("religion").value;
    if (religion == "") {
        var userreligion = document.getElementById("userreligion");
        userreligion.innerHTML = "cannot be empty.";
        document.getElementById("religion").classList.add("border");
        document.getElementById("religion").classList.add("border-danger");
        return false;
    }

    var nationality = document.getElementById("nationality").value;
    if (nationality == "") {
        var usernationality = document.getElementById("usernationality");
        usernationality.innerHTML = "cannot be empty.";
        document.getElementById("nationality").classList.add("border");
        document.getElementById("nationality").classList.add("border-danger");
        return false;
    }

    var address = document.getElementById("address").value;
    if (address == "") {
        var useraddress = document.getElementById("useraddress");
        useraddress.innerHTML = "cannot be empty.";
        document.getElementById("address").classList.add("border");
        document.getElementById("address").classList.add("border-danger");
        return false;
    }

    var city = document.getElementById("city").value;
    if (city == "") {
        var usercity = document.getElementById("usercity");
        usercity.innerHTML = "cannot be empty.";
        document.getElementById("city").classList.add("border");
        document.getElementById("city").classList.add("border-danger");
        return false;
    }

    var pincode = document.getElementById("pincode").value;
    if (pincode == "") {
        var userpincode = document.getElementById("userpincode");
        userpincode.innerHTML = "cannot be empty.";
        document.getElementById("pincode").classList.add("border");
        document.getElementById("pincode").classList.add("border-danger");
        return false;
    }

    var regex_pincode = /^[1-9]{1}\d{5}$/;
    if (!regex_pincode.test(pincode)) {
        var userpincode = document.getElementById("userpincode");
        userpincode.innerHTML = "please enter valid field.";
        document.getElementById("pincode").classList.add("border");
        document.getElementById("pincode").classList.add("border-danger");
        return false;
    }


    var discipline = document.getElementById("discipline").value;
    if (discipline == "") {
        var userdiscipline = document.getElementById("userdiscipline");
        userdiscipline.innerHTML = "cannot be empty.";
        return false;
    }

    var programme = document.getElementById("programme").value;
    if (programme == "") {
        var userprogramme = document.getElementById("userprogramme");
        userprogramme.innerHTML = "cannot be empty.";
        return false;
    }

    var specialization = document.getElementById("specialization").value;
    if (specialization == "") {
        var userspecialization = document.getElementById("userspecialization");
        userspecialization.innerHTML = "cannot be empty.";
        return false;
    }

    var status10 = document.getElementById("status10").value;
    if (status10 == "") {
        var userstatus10 = document.getElementById("userstatus10");
        userstatus10.innerHTML = "cannot be empty.";
        return false;
    }

    var board10 = document.getElementById("board10").value;
    console.log(board10);
    if (board10 == "") {
        var userboard10 = document.getElementById("userboard10");
        userboard10.innerHTML = "cannot be empty.";
        console.log(userboard10);
        return false;
    }

    var percentage10 = document.getElementById("percentage10").value;
    if (percentage10 == "") {
        var userpercentage10 = document.getElementById("userpercentage10");
        userpercentage10.innerHTML = "cannot be empty.";
        return false;
    }

    var year10 = document.getElementById("year10").value;
    if (year10 == "") {
        var useryear10 = document.getElementById("useryear10");
        useryear10.innerHTML = "cannot be empty.";
        return false;
    }

    var subject10 = document.getElementById("subject10").value;
    if (subject10 == "") {
        var usersubject10 = document.getElementById("usersubject10");
        usersubject10.innerHTML = "cannot be empty.";
        return false;
    }


    var status12 = document.getElementById("status12").value;
    if (status12 == "") {
        var userstatus12 = document.getElementById("userstatus12");
        userstatus12.innerHTML = "cannot be empty.";
        return false;
    }

    var board12 = document.getElementById("board12").value;
    if (board12 == "") {
        var userboard12 = document.getElementById("userboard12");
        userboard12.innerHTML = "cannot be empty.";
        return false;
    }

    var percentage12 = document.getElementById("percentage12").value;
    if (percentage12 == "") {
        var userpercentage12 = document.getElementById("userpercentage12");
        userpercentage12.innerHTML = "cannot be empty.";
        return false;
    }

    var year12 = document.getElementById("year12").value;
    if (year12 == "") {
        var useryear12 = document.getElementById("useryear12");
        useryear12.innerHTML = "cannot be empty.";
        return false;
    }

    var subject12 = document.getElementById("subject12").value;
    if (subject12 == "") {
        var usersubject12 = document.getElementById("usersubject12");
        usersubject12.innerHTML = "cannot be empty.";
        return false;
    }

    var statusug = document.getElementById("statusug").value;
    if (statusug == "") {
        var userstatusug = document.getElementById("userstatusug");
        userstatusug.innerHTML = "cannot be empty.";
        return false;
    }

    var boardug = document.getElementById("boardug").value;
    if (boardug == "") {
        var userboardug = document.getElementById("userboardug");
        userboardug.innerHTML = "cannot be empty.";
        return false;
    }

    var percentageug = document.getElementById("percentageug").value;
    if (percentageug == "") {
        var userpercentageug = document.getElementById("userpercentageug");
        userpercentageug.innerHTML = "cannot be empty.";
        return false;
    }

    var yearug = document.getElementById("yearug").value;
    if (yearug == "") {
        var useryearug = document.getElementById("useryearug");
        useryearug.innerHTML = "cannot be empty.";
        return false;
    }

    var subjectug = document.getElementById("subjectug").value;
    if (subjectug == "") {
        var usersubjectug = document.getElementById("usersubjectug");
        usersubjectug.innerHTML = "cannot be empty.";
        return false;
    }




    // .................regx..................


}