## Preface
I am using this project as a personal learning exercise as much as it is a real project with an end goal of being a fully functional device. I have very little experience with Linux, ARM processor architecture, and Node.js or JavaScript. This is also my first Git repository and I am also learning that as well.
For anyone who may come across this project please feel free to join in, offer advice or if you find that you know even less that I do, It would be my pleasure to offer you whatever knowledge I have.

Thanks! Adam. aka, badfrogg

# BBB_Aquarium
Aquarium Automation with BeagleBoneBlack

Initial goals:
1. Control LED lighting using BBB PWM pins. LED are driven with CAT4101TV−T75 Constant-Current LED Driver. PWM frequency must be above the audible range (>20kHz) to avoid ringing sound from LED driver circuit.
2. Create JavaScript web based UI with button to turn LED on/off and a slider to control brightness (PWM duty cycle controls brightness).
3. Create program on BBB to automatically run at bootup to retrieve current time from NTP server and to turn LED on/off with a ramp time up and down of brightness at specified times.

The overall goal will be to expand the above scope to include multiple channels of lighting for sunrise and sunset effect along with moon phases and synced with real word sunrise/sunset, moonrise/moonset times.


## Platform / Environment

Hardware and software environment is:
* BeagleBone Black: Ver. C
* Debian GNU/Linux: 9.4 (Stretch)
* Debian Image:     2018-06-17
* Linux BeagleBone: 4.14.53-ti-r62
* Architecture:     arm

Preliminary Code is running in Node.js with the BoneScript library
* Dependencies are socket.io

## Installation
PWM_Server.js and PWM.html need to be copied to the same directory in the BeagleBone Black. The dependency "socket.io should be installed in this directory as well. "PWM_Server.js" may need to be run with ```$ sudo node PWM_Server.js``` I have seen it throw errors that the period could not be written sometimes.

Download files from GitHub to the BeagleBone Black:

````sh
cd /var/lib/cloud9
git clone git://github.com/badfrogg/BBB_Aquarium
````
Install Socket.IO:

````sh
cd /var/lib/cloud9/badfrogg/BBB_Aquarium/src
npm install socket.io
````

## Usage
Run  ```node PWM_Server.js``` and then browse to your BeagleBone Black IP address, include port :8085.

Example -``` http://192.168.1.103:8085/ ```

### Credits
I have studied and copied code from the following repositories in this project:
* https://github.com/simonmonk/prog_bbb

![Pin Map]https://github.com/badfrogg/BBB_Aquarium/blob/master/beaglebone_black_pinmap.png
