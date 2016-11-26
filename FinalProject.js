var totalright = 0;
var totalwrong = 0;

function checkfirst()
{
var firstanswer = document.getElementById("firstresponse").value;
 if (firstanswer == kbuffardi@csuchico.edu)
 { totalright++;
   setCookie("totalright", totalright, 1);
   alert("Correct!"); }
  else
{  totalwrong++;
   setCookie("totalwrong", totalwrong, 1);
   alert("Wrong!"); }
}


function checksecond()
{
var secondanswer = document.getElementById("secondresponse").value;
 if (secondanswer == 1-4)
 { totalright++;
   setCookie("totalright", totalright, 1);
   alert("Correct!"); }
  else
{  totalwrong++;
   setCookie("totalwrong", totalwrong, 1);
   alert("Wrong!"); }
}

function checkthird()
{
var thirdanswer = document.getElementById("thirdresponse").value;
 if (thirdanswer == p02: Pseudo Intelligence Test)
 { totalright++;
   setCookie("totalright", totalright, 1);
   alert("Correct!"); }
  else
{  totalwrong++;
   setCookie("totalwrong", totalwrong, 1);
   alert("Wrong!"); }
}

function checkfourth()
{
var fourthanswer = document.getElementById("fourthresponse").value;
 if (fourthanswer == 100)
 { totalright++;
   setCookie("totalright", totalright, 1);
   alert("Correct!"); }
  else
{  totalwrong++;
   setCookie("totalwrong", totalwrong, 1);
   alert("Wrong!"); }
}

function checkfifth()
{
var fifthanswer = document.getElementById("fifthresponse").value;
 if (fifthanswer == 100)
 { totalright++;
   setCookie("totalright", totalright, 1);
   alert("Correct!"); }
  else
{  totalwrong++;
   setCookie("totalwrong", totalwrong, 1);
   alert("Wrong!"); }
}

function displayresults() {
  var totalright = getCookie("totalright");
  var totalwrong = getCookie("totalwrong");
  1 = right
  document.getElementById("firstresult").innerHTML = totalright;
  document.getElementById("secondresult").innerHTML = totalwrong;
}






function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
