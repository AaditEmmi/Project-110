prediction_1 =""
prediction_2 =""

Webcam.set({
    width:350,
    height:300,
    imageformat:'png',
    png_quality:90
}) 

camera=document.getElementById("camera");
Webcam.attach('#camera')

function takesnapshot(){ 
    Webcam.snap(function(data_uri){
        document.getElementById("camera2").innerHTML='<img id="captured_image" src="'+data_uri+'">';

    })
}
console.log('ml5 version',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_3Ml8ueHj/model.json',modelLoaded);

function modelLoaded(){
    console.log('model Loaded')
}

function speak(){
    synth=window.speechSynthesis;
    speek_data_1="the first prediction is "+prediction_1;
    speek_data_2="the second prediction is "+prediction_2;
    var utterthis=new SpeechSynthesisUtterance(speek_data_1+speek_data_2);
    synth.speak(utterthis);
}

function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img,gotresult)
    
}

function gotresult(error,results){
    if(error){
        console.error(error);
        
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        speak();
        if(results[0].label=="chesse"){
            document.getElementById("update_emoji").innerHTML="&#9996;";

        }
        if(results[0].label=="Thumbs-up"){
            document.getElementById("update_emoji").innerHTML="&#128077;";

        }
        if(results[0].label=="High-five"){
            document.getElementById("update_emoji").innerHTML="&#9995;";

        }
        if(results[0].label=="Hi"){
            document.getElementById("update_emoji").innerHTML="&#128075;";

        }

        if(results[0].label=="Nice"){
            document.getElementById("update_emoji").innerHTML="&#128076;";

        }
        if(results[1].label=="chesse"){
            document.getElementById("update_emoji2").innerHTML="&#9996;";

        }
        if(results[0].label=="Thumbs-up"){
            document.getElementById("update_emoji2").innerHTML="&#128077;";

        }
        if(results[0].label=="High-five"){
            document.getElementById("update_emoji2").innerHTML="&#9995;";

        }
        if(results[0].label=="Hi"){
            document.getElementById("update_emoji2").innerHTML="&#128075;";

        }

        if(results[0].label=="Nice"){
            document.getElementById("update_emoji2").innerHTML="&#128076;";

        }
        
    }
    
}

