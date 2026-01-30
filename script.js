const objectmap_drumkit = {
    a : "sound\\asset_sounds_clap.wav"  ,
    b :  "sound\\asset_sounds_hihat.wav"  ,
    c : "sound\\asset_sounds_kick.wav",
    d : "sound\\asset_sounds_openhat.wav",
    e : "sound\\asset_sounds_ride.wav",
    f : "sound\\asset_sounds_snare.wav",
    g:  "sound\\asset_sounds_tink.wav",
    h : "sound\\asset_sounds_tom.wav",
    i : "sound\\asset_sounds_boom.wav",

}
const audiocache = {} ;
for( const key in objectmap_drumkit){
    audiocache[key] = new Audio(objectmap_drumkit[key]) ;
}

const box = document.querySelectorAll(".box") ; 
box.forEach(key => key.addEventListener('transitionend', removeTransition));


document.addEventListener("keydown",(e)=>{
    console.log("pressed : " , e.key );
   const  audio = audiocache[e.key.toLowerCase()] ;
   if(e.repeat) return ;
   if (!audio) return;
   audio.currentTime = 0;
   audio.play() ;
   box.forEach((box,index) => {
   if (box.classList.contains(e.key.toUpperCase())) {
            box.classList.add("playing");
        }
   })  ;
   
});
function removeTransition(event) {
    console.log(event);
    console.log("The transition finished!");
    console.log("The property that finished was:", event.propertyName); 
    if (event.propertyName !== 'transform') return; 
    if(this.classList.contains("playing")) {
        console.log("Playing class is present ");
    }else
    {
        console.log("Playing class is absent ");
    }
    this.classList.remove('playing');
}



