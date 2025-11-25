//gpa calculator
function enter() {
    var sub = document.getElementById("sub").value;
    var cal = document.getElementById("cal");
    document.getElementById("sub").value = "";

    for (count = 1; count <= sub; count++) {

       var title = document.createElement("h3");
        title.innerText = "Subject " + count;
        title.className = "sub-title"
        cal.appendChild(title);

        var grade = document.createElement("input");
        grade.type = "text";
        grade.placeholder = "Enter your credit";
        grade.className = "grade-cred";
        cal.appendChild(grade);

        var point = document.createElement("input");
        point.type = "number";
        point.placeholder = "Enter grade points";
        point.className = "grade-points";
        cal.appendChild(point);

        cal.appendChild(document.createElement("br"));
        cal.appendChild(document.createElement("br"));
        var calci = document.getElementById("btns");
        calci.style.display="block";

    }  
    
}
 function res(){
        var credit = document.getElementsByClassName("grade-cred");
        var points = document.getElementsByClassName("grade-points");
        var qp =0;
        var totc =0;
        for(count = 0; count<credit.length;count++){
            var c = Number(credit[count].value);
            var p = Number(points[count].value);
            qp += c*p;
            totc += c;
        }
        var gpa = qp/totc;
        gpa = gpa.toFixed(2);
        var perc = (gpa * 9.5).toFixed(2);

        var disp = document.getElementById("disp");
        disp.innerHTML = "Your GPA is " + gpa + "<br>Percentage: " + perc + "%";
        
    }

    //cgpa calculator
function enterc() {
    var sub = document.getElementById("subc").value;
    var cal = document.getElementById("calc");
    document.getElementById("subc").value = "";

    for (count = 1; count <= sub; count++) {

       var title = document.createElement("h3");
        title.innerText = "Sem " + count;
        title.className = "sub-title"
        cal.appendChild(title);

        var grade = document.createElement("input");
        grade.type = "text";
        grade.placeholder = "Enter your  Sem credit";
        grade.className = "grade-cred";
        cal.appendChild(grade);

        var point = document.createElement("input");
        point.type = "number";
        point.placeholder = "Enter GPA";
        point.className = "grade-points";
        cal.appendChild(point);

        cal.appendChild(document.createElement("br"));
        cal.appendChild(document.createElement("br"));
        var calci = document.getElementById("btns");
        calci.style.display="block";

    }  
    
}
function resc(){
        var credit = document.getElementsByClassName("grade-cred");
        var points = document.getElementsByClassName("grade-points");
        var qp =0;
        var totc =0;
        for(count = 0; count<credit.length;count++){
            var c = Number(credit[count].value);
            var p = Number(points[count].value);
            qp += c*p;
            totc += c;
        }
        var gpa = qp/totc;
        gpa = gpa.toFixed(2);
        var perc = (gpa * 9.5).toFixed(2);

        var disp = document.getElementById("dispc");
        disp.innerHTML = "Your CGPA is " + gpa + "<br>Percentage: " + perc + "%";
        
    }

