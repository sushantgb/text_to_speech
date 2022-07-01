 //for speech synthesis
 let speech = new SpeechSynthesisUtterance();
 speech.lang = "en"; //default language
 let langInput = document.getElementById('lang');

 //variable calls
 let textVal = document.querySelector("#txt-val");
 let speechBtn = document.querySelector(".play");
 let pauseBtn = document.querySelector(".pause");
 let cancelBtn = document.querySelector(".cancel");
 let resumeBtn = document.querySelector(".resume");

 //for voices
 let voiceSelection = []; //global array
 let voiceInput = document.getElementById("voices");

 //for text display
 let heading = document.querySelector("h3");

 //for volume control
 let volControl = document.getElementById('vol');
 let pitchControl = document.getElementById('pitch');
 let rateControl = document.getElementById('rate');
 let volumeSpan = document.getElementById("vol-control");
 let pitchSpan = document.getElementById("pitch-control");
 let rateSpan = document.getElementById("rate-control");

 //for displaying voice options
 window.speechSynthesis.onvoiceschanged = () => {
     voiceSelection = window.speechSynthesis.getVoices(); //adding voice in global array
     speech.voice = voiceSelection[0];
     voiceSelection.forEach(voiceOptions);  //calling inside the array for each option         
     function voiceOptions(voice, i) {
         (voiceInput.options[i] = new Option(voice.name, i));
     }
 };

 //to read text
 speechBtn.addEventListener('click', () => {
     speech.text = textVal.value;
     window.speechSynthesis.speak(speech);
 });

 //to change voice
 voiceInput.addEventListener('change', () => {
     speech.voice = voiceSelection[voiceInput.value];
     console.log(voiceInput.value);
 });

 //to change language
 langInput.addEventListener('change', () => {
     console.log(langInput.value);
     switch (langInput.value) {
         case 'english':
             speech.lang = 'en';
             break;
         case 'hindi':
             speech.lang = 'hi';
             heading.innerHTML = "हिन्दी में भाषण के लिए पाठ";
             textVal.setAttribute('placeholder', 'अपना पाठ सुनने के लिए यहाँ  लिखें');
             break;
     }
 });

 //to control volume | pitch | rate
 volControl.addEventListener('input', () => {
     speech.volume = volControl.value;
     volumeSpan.innerHTML = volControl.value;
 });
 pitchControl.addEventListener('input', () => {
     speech.pitch = pitchControl.value;
     pitchSpan.innerHTML = pitchControl.value;
 });
 rateControl.addEventListener('input', () => {
     speech.rate = rateControl.value;
     rateSpan.innerHTML = rateControl.value;
 });

 //button controls
 //pause-play
 pauseBtn.addEventListener('click', ()=>{
     window.speechSynthesis.pause();
 })
 resumeBtn.addEventListener('click', ()=>{
     window.speechSynthesis.resume();
 })
 cancelBtn.addEventListener('click', ()=>{
     window.speechSynthesis.cancel();
 })