function validate()
{
    var us=document.getElementById("username").value;
    var pa=document.getElementById("password").value;
    if(us=="l38985713@student.ua92.ac.uk" && pa=="test123")
    {
        alert("Signed In");
        return false;
    }
    else
    {
        alert("Please Try Again");
    }

}