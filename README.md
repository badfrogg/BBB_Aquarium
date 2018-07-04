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
