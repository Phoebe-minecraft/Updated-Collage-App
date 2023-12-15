var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = ""
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if(Content=="take my selfie"){
        speak()

    }
    
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking Your Selfie In 10 Seconds"
    var speakthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(speakthis);
    Webcam.attach(camera)


    setTimeout(function(){
      takesnapshot()
      save()
    },10000)
}

Webcam.set({
    width:350,
    height:250,
    image_format:"png",
    png_quality:100
});

camera = document.getElementById("camera");

function takesnapshot(){
    Webcam.snap(function(dataURI){
        document.getElementById("result").innerHTML = "<img id='selfie_img' src='"+dataURI+"'>"
        

    
    })
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.href = image;
    link.click()

}

