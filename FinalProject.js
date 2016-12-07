var totalright = 0;
var totalwrong = 0;

var firstresponse;
function checkq1() {

  q1 = document.getElementById("firstresponse").value;

  if ( ( q1.match(/javascript/i) ) && (q1.length == 10 ) )
{
    document.getElementById("a1").innerHTML = "right";
    console.log("correct");

  $(document).ready(function(){
  $("#firstresponse").after('<img src="http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-hi.png" alt="Green Check Mark" width="20" height="20"/>');
  });
}
  else
      {
    document.getElementById("a1").innerHTML = "wrong";
    console.log("wrong");
$(document).ready(function(){
$("#firstresponse").after('<img src="http://www.drodd.com/images15/red-x4.png" alt="Red X Mark" width="20" height="20"/>');
});
      }
                   }

/*function checkfirst()
{
var firstanswer = document.getElementById("firstresponse").value;
 if (firstanswer == 1)
 { totalright++;
   setCookie("totalright", totalright, 1);
   alert("Correct!");
     (Hint: Format must be in "A-B" format)
   <input onchange="checksecond()" id="secondresponse"> </p>;}
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
*/

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
