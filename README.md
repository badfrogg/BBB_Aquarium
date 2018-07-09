## Preface
I am using this project as a personal learning exorcise as much as it is a real project with an end goal of being a fully functional device. I have very little experience with Linux, ARM processor architecture, and Node.js or JavaScript. This is also my first Git repository and I am also learning that as well.
For anyone whom may come across this project please feel free to join in, offer advice or if you fine that you know even less that I do, It would be my pleasure to offer you whatever knowledge I can.

Thanks! Adam. aka, badfrogg

# BBB_Aquarium
Aquarium Automation with BeagleBoneBlack

Initial goals:
1. Control LED lighting using BBB PWM pins. LED are driven with CAT4101TV−T75 Constant-Current LED Driver. PWM frequency must be above the audible range (>20kHz) to avoid ringing sound from LED driver circuit.
2. Create JavaScript web based UI with button to turn LED on/off and a slider to control brightness (PWM duty cycle controls brightness).
3. Create program on BBB to automatically run at bootup to retrieve current time from NTP server and to turn LED on/off with a ramp time up and down of brightness at specified times.

The overall goal will be to expand the above scope to include multiple channels of lighting for sunrise and sunset effect along with moon phases and synced with real word sunrise/sunset, moonrise/moonset times.


## Platform

Hardware and software environment is:
* BeagleBone Black Ver. C
* Linux 9 (Stretch)
* Debian Image 2018-06-17
* Linux BeagleBone 4.14.52-ti-r60

Preliminary Code is running in Node.js with the BoneScript library
* Dependencies are socket.io
