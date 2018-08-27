var i = 0;
var j = 0;
var k = 0;
var m = 0;
var speed = 20;
var ps_txt1 = 'I am a third-year student at Victoria University seeking an entry-level position in Full Stack Development to apply the skills I have gained during my Computer Science degree. During my degree I have enjoyed implementing algorithms and problem solving. I would like to transfer that passion to a work environment where I can continue to strive for improvement and overcome challenges.';   
var ps_txt2 = 'I am always seeking new online courses to broaden my programming skills and I am confident that I can learn new languages and adapt to different tools. I am currently engaged in self-learning of HTML, CSS, and JavaScript. Using these tools, I am developing my own personal website.';
var ps_txt3 = 'In my spare time, I enjoy playing video games and going to the gym. I also enjoy studying Japanese and I plan on attaining a Certificate of Japanese-Language Proficiency Test Level N2.';
var ps_txt = ps_txt1 + ps_txt2 + ps_txt3;

function typeWriterPS(){ 
    if(i < ps_txt.length){
        if(i == ps_txt1.length){
            $("#ps-content").html($("#ps-content").html() + "<br><br>");
        }
        else if(i == ps_txt1.length + ps_txt2.length){
            $("#ps-content").html($("#ps-content").html() + "<br><br>");
        }

        $("#ps-content").html($("#ps-content").html() + ps_txt.charAt(i));
        
        i++;
        setTimeout(typeWriterPS, speed);
    }
}

var sa_txt1 = "I am currently studying a Bachelor of Science majoring in Computer Science, specialising in Artificial Intelligence and Computer Graphics at Victoria University. Through my study, I have learned and implemented many algorithms such as K-Nearest Neighbour and Decision Tree in the COMP 307 course. The objectives of these algorithms are to train a classifier with a training dataset, and evaluate the performance with a test dataset. After implementing them, my classifier could identify 80-90% of unknown data correctly. By implementing these algorithms, I improve my competency in Java and C++.";
var sa_txt2 = "A passion of mine is problem solving and discovering ways to solve a problem. During my studies, I have encountered many errors while completing my assignments and projects. When I face an unfamiliar error, I look for the underlying cause of the error and attempt to fix the issue by myself. If I am having difficulty solving the issue, I consult my friends to see if they have come across the issue before. On the other hand, I help my friends when they ask for help regarding a problem I am familiar with. By persistently tackling these problems, I eventually find a solution which results in the completion of my assignments.";
var sa_txt3 = "Previously as a Kitchen Hand, communication skills were necessary to ensure the kitchen and front-of-house worked effectively together. During peak hours where there are many customer orders, I communicate with other kitchen staff to coordinate the timing of food and drink orders and I communicate with the front-of-house staff to ensure that completed orders are delivered to the customers promptly.";
var sa_txt = sa_txt1 + sa_txt2 + sa_txt3;

function typeWriterSA(){ 
    if(j+k+m < sa_txt.length){
        if(j < sa_txt1.length){
            $("#sa-content-1").html($("#sa-content-1").html() + sa_txt1.charAt(j));
            j++;
        }
        else if(k < sa_txt2.length){
            $("#sa-content-2").html($("#sa-content-2").html() + sa_txt2.charAt(k));
            k++;
        }
        else if(m < sa_txt3.length){
            $("#sa-content-3").html($("#sa-content-3").html() + sa_txt3.charAt(m));
            m++;
        }
        
        setTimeout(typeWriterSA, speed);
    }
}

// navigation click events
$(document).ready(function(){
    $("#ps").click(function(){
    	$("#content").show();
    	$("#personal_statement").show();
    	$("#skills_abilities").hide();
    	$("#technical").hide();
    	$("#education").hide();
    	$("#work_experience").hide();

    	$("#ps").addClass("active_button");
    	$("#sa").removeClass("active_button");
    	$("#tech").removeClass("active_button");
    	$("#edu").removeClass("active_button");
    	$("#work").removeClass("active_button");
        typeWriterPS();
    });
});

$(document).ready(function(){
    $("#sa").click(function(){
    	$("#content").show();
    	$("#personal_statement").hide();
    	$("#skills_abilities").show();
    	$("#technical").hide();
    	$("#education").hide();
    	$("#work_experience").hide();

    	$("#ps").removeClass("active_button");
    	$("#sa").addClass("active_button");
    	$("#tech").removeClass("active_button");
    	$("#edu").removeClass("active_button");
    	$("#work").removeClass("active_button");
        typeWriterSA();
    });
});

$(document).ready(function(){
    $("#tech").click(function(){
    	$("#content").show();
    	$("#personal_statement").hide();
    	$("#skills_abilities").hide();
    	$("#technical").show();
    	$("#education").hide();
    	$("#work_experience").hide();
    	
    	$("#ps").removeClass("active_button");
    	$("#sa").removeClass("active_button");
    	$("#tech").addClass("active_button");
    	$("#edu").removeClass("active_button");
    	$("#work").removeClass("active_button");
    });
});

$(document).ready(function(){
    $("#edu").click(function(){
    	$("#content").show();
    	$("#personal_statement").hide();
    	$("#skills_abilities").hide();
    	$("#technical").hide();
    	$("#education").show();
    	$("#work_experience").hide();

    	$("#ps").removeClass("active_button");
    	$("#sa").removeClass("active_button");
    	$("#tech").removeClass("active_button");
    	$("#edu").addClass("active_button");
    	$("#work").removeClass("active_button");
    });
});

$(document).ready(function(){
    $("#work").click(function(){
    	$("#content").show();
    	$("#personal_statement").hide();
    	$("#skills_abilities").hide();
    	$("#technical").hide();
    	$("#education").hide();
    	$("#work_experience").show();

    	$("#ps").removeClass("active_button");
    	$("#sa").removeClass("active_button");
    	$("#tech").removeClass("active_button");
    	$("#edu").removeClass("active_button");
    	$("#work").addClass("active_button");
    });
});

$(document).ready(function(){
    $("#work").click(function(){
        $("#content").show();
        $("#personal_statement").hide();
        $("#skills_abilities").hide();
        $("#technical").hide();
        $("#education").hide();
        $("#work_experience").show();

        $("#ps").removeClass("active_button");
        $("#sa").removeClass("active_button");
        $("#tech").removeClass("active_button");
        $("#edu").removeClass("active_button");
        $("#work").addClass("active_button");
    });
});

$(document).ready(function(){
    $(".table2016").click(function(){
        $("#yr2018-table").hide();
        $("#yr2017-table").hide();
        $("#yr2016-table").show();
    });
});

$(document).ready(function(){
    $(".table2017").click(function(){
        $("#yr2018-table").hide();
        $("#yr2017-table").show();
        $("#yr2016-table").hide();
    });
});

$(document).ready(function(){
    $(".table2018").click(function(){
        $("#yr2018-table").show();
        $("#yr2017-table").hide();
        $("#yr2016-table").hide();
    });
});
