var totalright = 0;
var totalwrong = 0;

function hellouser()
    {
      var user = prompt("Enter your first and last name", "");
      if (user != null) {
      document.getElementById("usersname").innerHTML = "Hello, " + user + "! Welcome to Cesar's final project!";
    }
}

function timedfunction()
{
    setTimeout(hellouser, 5000);
}

var firstresponse;
function checkq1() {
q1 = document.getElementById("firstresponse").value;
if ( ( q1.match(/javascript/i) ) && (q1.length == 10 ) )
{
  document.getElementById("a1").innerHTML = "right";
  console.log("q1 is correct");
  $(document).ready(function(){
  $("#firstresponse").after('<img src="http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-hi.png" alt="Green Check Mark" width="20" height="20"/>');
                              });
}
else
{
  document.getElementById("a1").innerHTML = "wrong";
  console.log("q1 is incorrect");
  $(document).ready(function(){
  $("#firstresponse").after('<img src="http://www.drodd.com/images15/red-x4.png" alt="Red X Mark" width="20" height="20"/>');
                              });
}
                    }
        var secondresponse;
        function checkq2() {
        q2 = document.getElementById("secondresponse").value;
        if ( q2 == 4 )
        {
          document.getElementById("a2").innerHTML = "right";
          console.log("q2 is correct");
          $(document).ready(function(){
          $("#secondresponse").after('<img src="http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-hi.png" alt="Green Check Mark" width="20" height="20"/>');
                                      });
        }
        else
        {
          document.getElementById("a2").innerHTML = "wrong";
          console.log("q2 is incorrect");
          $(document).ready(function(){
          $("#secondresponse").after('<img src="http://www.drodd.com/images15/red-x4.png" alt="Red X Mark" width="20" height="20"/>');
                                      });
        }
                            }
var thirdresponse;
function checkq3() {
q3 = document.getElementById("thirdresponse").value;
if ( ( q3.match(/marvin minsky/i) )  || (q3.match(/marvin/i) && (q3.length == 6)) || (q3.match(/minsky/i) && q3.length == 6) )
{
  document.getElementById("a3").innerHTML = "right";
  console.log("q3 is correct");
  $(document).ready(function(){
  $("#thirdresponse").after('<img src="http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-hi.png" alt="Green Check Mark" width="20" height="20"/>');
                              });
}
else
{
  document.getElementById("a3").innerHTML = "wrong";
  console.log("q3 is incorrect");
  $(document).ready(function(){
  $("#thirdresponse").after('<img src="http://www.drodd.com/images15/red-x4.png" alt="Red X Mark" width="20" height="20"/>');
                              });
}
                    }

        var fourthresponse;
        function checkq4() {
        q4 = document.getElementById("fourthresponse").value;
        if ( q4 == 100 )
        {
          document.getElementById("a4").innerHTML = "right";
          console.log("q4 is correct");
          $(document).ready(function(){
          $("#fourthresponse").after('<img src="http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-hi.png" alt="Green Check Mark" width="20" height="20"/>');
                                      });
        }
        else
        {
          document.getElementById("a4").innerHTML = "wrong";
          console.log("q4 is incorrect");
          $(document).ready(function(){
          $("#fourthresponse").after('<img src="http://www.drodd.com/images15/red-x4.png" alt="Red X Mark" width="20" height="20"/>');
                                      });
        }
                            }

var fifthresponse;
function checkq5() {
q5 = document.getElementById("fifthresponse").value;
if ( q5 == 2016 )
{
  document.getElementById("a5").innerHTML = "right";
  console.log("q5 is correct");
  $(document).ready(function(){
  $("#fifthresponse").after('<img src="http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-hi.png" alt="Green Check Mark" width="20" height="20"/>');
                              });
}
else
{
  document.getElementById("a5").innerHTML = "wrong";
  console.log("q5 is incorrect");
  $(document).ready(function(){
  $("#fifthresponse").after('<img src="http://www.drodd.com/images15/red-x4.png" alt="Red X Mark" width="20" height="20"/>');
                              });
}
                    }

        var sixthresponse;
        function checkq6() {
        q6 = document.getElementById("sixthresponse").value;
        if ( q6 == 110 )
        {
          document.getElementById("a6").innerHTML = "right";
          console.log("q6 is correct");
          $(document).ready(function(){
          $("#sixthresponse").after('<img src="http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-hi.png" alt="Green Check Mark" width="20" height="20"/>');
                                      });
        }
        else
        {
          document.getElementById("a6").innerHTML = "wrong";
          console.log("q6 is incorrect");
          $(document).ready(function(){
          $("#sixthresponse").after('<img src="http://www.drodd.com/images15/red-x4.png" alt="Red X Mark" width="20" height="20"/>');
                                      });
        }
                            }

var seventhresponse;
function checkq7() {
q7 = document.getElementById("seventhresponse").value;
if ( q7 == 220 )
{
  document.getElementById("a7").innerHTML = "right";
  console.log("q7 is correct");
  $(document).ready(function(){
  $("#seventhresponse").after('<img src="http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-hi.png" alt="Green Check Mark" width="20" height="20"/>');
                              });
}
else
{
  document.getElementById("a7").innerHTML = "wrong";
  console.log("q7 is incorrect");
  $(document).ready(function(){
  $("#seventhresponse").after('<img src="http://www.drodd.com/images15/red-x4.png" alt="Red X Mark" width="20" height="20"/>');
                              });
}
                  }


        var eighthresponse;
        function checkq8() {
        q8 = document.getElementById("eighthresponse").value;
        if ( q8 == 3 )
        {
          document.getElementById("a8").innerHTML = "right";
          console.log("q8 is correct");
          $(document).ready(function(){
          $("#eighthresponse").after('<img src="http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-hi.png" alt="Green Check Mark" width="20" height="20"/>');
                                      });
        }
        else
        {
          document.getElementById("a8").innerHTML = "wrong";
          console.log("q8 is incorrect");
          $(document).ready(function(){
          $("#eighthresponse").after('<img src="http://www.drodd.com/images15/red-x4.png" alt="Red X Mark" width="20" height="20"/>');
                                      });
        }
                            }

var ninthresponse;
function checkq9() {
q9 = document.getElementById("ninthresponse").value;
if ( q9 == 40 )
{
  document.getElementById("a9").innerHTML = "right";
  console.log("q9 is correct");
  $(document).ready(function(){
  $("#ninthresponse").after('<img src="http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-hi.png" alt="Green Check Mark" width="20" height="20"/>');
                              });
}
else
{
  document.getElementById("a9").innerHTML = "wrong";
  console.log("q9 is incorrect");
  $(document).ready(function(){
  $("#ninthresponse").after('<img src="http://www.drodd.com/images15/red-x4.png" alt="Red X Mark" width="20" height="20"/>');
                              });
}
                  }

        var tenthresponse;
        function checkq10() {
        q10 = document.getElementById("tenthresponse").value;
        if ( q10 == 29 )
        {
          document.getElementById("a10").innerHTML = "right";
          console.log("q10 is correct");
          $(document).ready(function(){
          $("#tenthresponse").after('<img src="http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-hi.png" alt="Green Check Mark" width="20" height="20"/>');
                                      });
        }
        else
        {
          document.getElementById("a10").innerHTML = "wrong";
          console.log("q10 is incorrect");
          $(document).ready(function(){
          $("#tenthresponse").after('<img src="http://www.drodd.com/images15/red-x4.png" alt="Red X Mark" width="20" height="20"/>');
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
