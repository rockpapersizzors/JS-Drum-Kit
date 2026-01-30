Audio caching : 
All sounds files are preloded into audiocache object 
new audio(url) 
Event listeners : 
There are a total of two event listeners . 
1. key down  : activates when a key is pressed
2. transitioned  : activates once the CSS transform animation completes 

key down function  acts as the Main Controller for the drum kit; 
it listens for any keypress, converts the key to lowercase to find the matching sound in the audiocache, 
and uses audio.currentTime = 0 to allow for rapid-fire replaying without waiting for the track to finish.
Once the sound starts, it loops through the "boxes" on the screen to find the one matching the pressed key and adds  .playing class to trigger a visual CSS animation. 
Crucially, the e.repeat check prevents the sound from "stuttering" if a user holds a key down, ensuring a clean, single hit every time.


The removeTransition function is a cleanup mechanism that listens for the moment a CSS animation (specifically the transform) finishes on a box.
 it waits for the browser to signal that the transition is over and then removes the .playing class, 
 which resets the box to its original state. 
 This ensures the visual "glow" or "pop" effect perfectly matches your CSS duration without the risk of the class getting stuck if the user presses keys too quickly.
