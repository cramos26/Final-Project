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
    setTimeout(hellouser, 3000);
}


var firstresponse;
var array1 = [];
function checkq1() {
q1 = document.getElementById("firstresponse").value;
array1.push(q1);
document.getElementById("arrayfor1").innerHTML = array1;
if ( ( q1.match(/javascript/i) ) && (q1.length == 10 ) )
{
  totalright++;
  setCookie("totalright",totalright, 1);
  console.log("q1 is correct");
  $(document).ready(function(){
  $("#firstresponse").after('<img src="http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-hi.png" alt="Green Check Mark" width="20" height="20"/>');
                              });
}
else
{
  totalwrong ++;
  setCookie("totalwrong", totalwrong, 1);
  console.log("q1 is incorrect");
  $(document).ready(function(){
  $("#firstresponse").after('<img src="http://www.drodd.com/images15/red-x4.png" alt="Red X Mark" width="20" height="20"/>');
                              });
}
                    }
        var secondresponse;
        var array2 = [];
        function checkq2() {
        var totalright = getCookie("totalright");
        var totalwrong = getCookie("totalwrong")
        q2 = document.getElementById("secondresponse").value;
        array2.push(q2);
        document.getElementById("arrayfor2").innerHTML = array2;
        if ( q2 == 4 )
        {
          totalright++;
          setCookie("totalright",totalright, 1);
          console.log("q2 is correct");
          $(document).ready(function(){
          $("#secondresponse").after('<img src="http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-hi.png" alt="Green Check Mark" width="20" height="20"/>');
                                      });
        }
        else
        {
          totalwrong ++;
          setCookie("totalwrong", totalwrong, 1);
          console.log("q2 is incorrect");
          $(document).ready(function(){
          $("#secondresponse").after('<img src="http://www.drodd.com/images15/red-x4.png" alt="Red X Mark" width="20" height="20"/>');
                                      });
        }
                            }
var thirdresponse;
var array3 = [];
function checkq3() {
var totalright = getCookie("totalright");
var totalwrong = getCookie("totalwrong");
q3 = document.getElementById("thirdresponse").value;
array3.push(q3);
document.getElementById("arrayfor3").innerHTML = array3;
if ( ( q3.match(/marvin minsky/i) )  || (q3.match(/marvin/i) && (q3.length == 6)) || (q3.match(/minsky/i) && q3.length == 6) )
{
  totalright++;
  setCookie("totalright",totalright, 1);
  console.log("q3 is correct");
  $(document).ready(function(){
  $("#thirdresponse").after('<img src="http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-hi.png" alt="Green Check Mark" width="20" height="20"/>');
                              });
}
else
{
  totalwrong ++;
  setCookie("totalwrong", totalwrong, 1);
  console.log("q3 is incorrect");
  $(document).ready(function(){
  $("#thirdresponse").after('<img src="http://www.drodd.com/images15/red-x4.png" alt="Red X Mark" width="20" height="20"/>');
                              });
}
                    }

        var fourthresponse;
        var array4 = [];
        function checkq4() {
        var totalright = getCookie("totalright");
        var totalwrong = getCookie("totalwrong");
        q4 = document.getElementById("fourthresponse").value;
        array4.push(q4);
        document.getElementById("arrayfor4").innerHTML = array4;
        if ( q4 == 100 )
        {
          totalwrong ++;
          setCookie("totalwrong", totalwrong, 1);
          console.log("q4 is correct");
          $(document).ready(function(){
          $("#fourthresponse").after('<img src="http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-hi.png" alt="Green Check Mark" width="20" height="20"/>');
                                      });
        }
        else
        {
          totalwrong ++;
          setCookie("totalwrong", totalwrong, 1);
          console.log("q4 is incorrect");
          $(document).ready(function(){
          $("#fourthresponse").after('<img src="http://www.drodd.com/images15/red-x4.png" alt="Red X Mark" width="20" height="20"/>');
                                      });
        }
                            }

var fifthresponse;
var array5 = [];
function checkq5() {
var totalright = getCookie("totalright");
var totalwrong = getCookie("totalwrong");
q5 = document.getElementById("fifthresponse").value;
array5.push(q5);
document.getElementById("arrayfor5").innerHTML = array5;
if ( q5 == 2016 )
{
  totalright++;
  setCookie("totalright",totalright, 1);
  console.log("q5 is correct");
  $(document).ready(function(){
  $("#fifthresponse").after('<img src="http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-hi.png" alt="Green Check Mark" width="20" height="20"/>');
                              });
}
else
{
  totalwrong ++;
  setCookie("totalwrong", totalwrong, 1);
  console.log("q5 is incorrect");
  $(document).ready(function(){
  $("#fifthresponse").after('<img src="http://www.drodd.com/images15/red-x4.png" alt="Red X Mark" width="20" height="20"/>');
                              });
}
                    }

        var sixthresponse;
        var array6 = [];
        function checkq6() {
        var totalright = getCookie("totalright");
        var totalwrong = getCookie("totalwrong");
        q6 = document.getElementById("sixthresponse").value;
        array6.push(q6);
        document.getElementById("arrayfor6").innerHTML = array6;
        if ( q6 == 110 )
        {
          totalright++;
          setCookie("totalright",totalright, 1);
          console.log("q6 is correct");
          $(document).ready(function(){
          $("#sixthresponse").after('<img src="http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-hi.png" alt="Green Check Mark" width="20" height="20"/>');
                                      });
        }
        else
        {
          totalwrong ++;
          setCookie("totalwrong", totalwrong, 1);
          console.log("q6 is incorrect");
          $(document).ready(function(){
          $("#sixthresponse").after('<img src="http://www.drodd.com/images15/red-x4.png" alt="Red X Mark" width="20" height="20"/>');
                                      });
        }
                            }

var seventhresponse;
var array7 = [];
function checkq7() {
var totalright = getCookie("totalright");
var totalwrong = getCookie("totalwrong");
q7 = document.getElementById("seventhresponse").value;
array7.push(q7);
document.getElementById("arrayfor7").innerHTML = array7;
if ( q7 == 220 )
{
  totalright++;
  setCookie("totalright",totalright, 1);
  console.log("q7 is correct");
  $(document).ready(function(){
  $("#seventhresponse").after('<img src="http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-hi.png" alt="Green Check Mark" width="20" height="20"/>');
                              });
}
else
{
  totalwrong ++;
  setCookie("totalwrong", totalwrong, 1);
  console.log("q7 is incorrect");
  $(document).ready(function(){
  $("#seventhresponse").after('<img src="http://www.drodd.com/images15/red-x4.png" alt="Red X Mark" width="20" height="20"/>');
                              });
}
                  }


        var eighthresponse;
        var array8 = [];
        function checkq8() {
        var totalright = getCookie("totalright");
        var totalwrong = getCookie("totalwrong");
        q8 = document.getElementById("eighthresponse").value;
        array8.push(q8);
        document.getElementById("arrayfor8").innerHTML = array8;
        if ( q8 == 3 )
        {
          totalright++;
          setCookie("totalright",totalright, 1);
          console.log("q8 is correct");
          $(document).ready(function(){
          $("#eighthresponse").after('<img src="http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-hi.png" alt="Green Check Mark" width="20" height="20"/>');
                                      });
        }
        else
        {
          totalwrong ++;
          setCookie("totalwrong", totalwrong, 1);
          console.log("q8 is incorrect");
          $(document).ready(function(){
          $("#eighthresponse").after('<img src="http://www.drodd.com/images15/red-x4.png" alt="Red X Mark" width="20" height="20"/>');
                                      });
        }
                            }

var ninthresponse;
var array9 = [];
function checkq9() {
var totalright = getCookie("totalright");
var totalwrong = getCookie("totalwrong");
q9 = document.getElementById("ninthresponse").value;
array9.push(q9);
document.getElementById("arrayfor9").innerHTML = array9;
if ( q9 == 40 )
{
  totalright++;
  setCookie("totalright",totalright, 1);
  console.log("q9 is correct");
  $(document).ready(function(){
  $("#ninthresponse").after('<img src="http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-hi.png" alt="Green Check Mark" width="20" height="20"/>');
                              });
}
else
{
  totalwrong ++;
  setCookie("totalwrong", totalwrong, 1);
  console.log("q9 is incorrect");
  $(document).ready(function(){
  $("#ninthresponse").after('<img src="http://www.drodd.com/images15/red-x4.png" alt="Red X Mark" width="20" height="20"/>');
                              });
}
                  }

        var tenthresponse;
        var array10 = [];
        function checkq10() {
        var totalright = getCookie("totalright");
        var totalwrong = getCookie("totalwrong");
        q10 = document.getElementById("tenthresponse").value;
        array10.push(q10);
        document.getElementById("arrayfor10").innerHTML = array10;
        if ( q10 == 29 )
        {
          totalright++;
          setCookie("totalright",totalright, 1);
          console.log("q10 is correct");
          $(document).ready(function(){
          $("#tenthresponse").after('<img src="http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-hi.png" alt="Green Check Mark" width="20" height="20"/>');
                                      });
        }
        else
        {
          totalwrong ++;
          setCookie("totalwrong", totalwrong, 1);
          console.log("q10 is incorrect");
          $(document).ready(function(){
          $("#tenthresponse").after('<img src="http://www.drodd.com/images15/red-x4.png" alt="Red X Mark" width="20" height="20"/>');
                                      });
        }
                            }


function timestartingquiz() {
alert("Before you look at your results, remember you CAN go back and retake the test!");
                            }

function displayresults() {
  var totalright = getCookie("totalright");
  var totalrightparse = parseInt(totalright);
  console.log(totalrightparse);
  var totalwrong = getCookie("totalwrong");
  var totalwrongparse = parseInt(totalwrong);
  console.log(totalwrongparse);
  document.getElementById("totalrightpoints").innerHTML = totalrightparse;
  document.getElementById("totalwrongpoints").innerHTML = totalwrongparse;
  var allpoints = totalrightparse + totalwrongparse;
  var allpointsparse = parseInt(allpoints);
  console.log(allpointsparse);
  document.getElementById("totalposs").innerHTML = allpointsparse;
  var calculateperc = (totalrightparse/allpointsparse) * 100;
  var finalperc = calculateperc.toFixed(2) + "%";
  document.getElementById("calculation").innerHTML = finalperc;
  console.log(finalperc);
  document.getElementById("event").addEventListener("mousemove", timestartingquiz());
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
