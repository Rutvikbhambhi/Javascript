

https://code.jquery.com/jquery-3.4.1.min.js

$("input#pwd").on("focus keyup", function () {

});

$("input#pwd").blur(function () {

});
$("input#pwd").on("focus keyup", function () {
    var score = 0;
    var a = $(this).val();
    var desc = new Array();

    // strength desc
    desc[0] = "Too short"
    desc[1] = "Weak"
    desc[2] = "Good"
    desc[3] = "Strong"
    desc[4] = "Best"
});

$("input#pwd").blur(function () {

});
$("input#pwd").on("focus keyup", function () {
    var score = 0;
    var a = $(this).val();
    var desc = new Array();

    // strength desc
    desc[0] = "Too short";
    desc[1] = "Weak";
    desc[2] = "Good";
    desc[3] = "Strong";
    desc[4] = "Best";

// password length
if (a.length >= 6) {
    $("#length").removeClass("invalid").addClass("valid");
    scrore++;
} else {
    $("#length").removeClass("valid").addClass("invalid")
}

// at least 1 digit in password
if (a.match(/\d/)) {
    $("#pnum").removeClass("invalid").addClass("valid");
    score++;
} else {
    $("#pnum").removeClass("valid").addClass("invalid");
}

// at least 1 capital & lower letter in password
if (a.match(/[A-Z]/) && a.match(/[a-z]/)){
    $("#capital").removeClass("invalid").addClass("valid")
    score++;
} else {
    $("#capital").removeClass("valid").addClass("invalid");
}

// at least 1 special character in password
if ( a.match(/.[!,@,#,$,%,^,&,*,?,_,-,~,`,(,)]/) ) {
    $("#apchar").removeClass("invalid").addClass("valid");
         
        score++;
} else {
    $("#spchar").removeClass("valid").addClass("invalid");
}

if(a.length > 0) {
    // show strength text 
    $("#passwordDescription").text(desc[scrore]);
    // show indicator
    $("#passwordStrength").removeClass().addClass("strength"+score);
} else {
    $("#passwordDescription").text("password not entered");
    $("#passwordStrength").removeClass().addClass("stremgth"+score);
}

});

$("input#pwd").blur(function () {
    $("#pwd_strength_wrap").fadeOut(400);
});
