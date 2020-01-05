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
* Debian GNU/Linux: 9.9 (Stretch)
* Debian Image:     2019-08-03
* Linux BeagleBone: 4.14.108-ti-r113
* Architecture:     arm

Preliminary Code is running in Node.js with the BoneScript library
* Dependencies are socket.io

## Setup Environment

I am providing these instructions mainly to myself as record. This also puts all the steps that are scattered across the web in one place for me.

* Burn the BeagleBone Black image ```Debian 9.9 2019-08-03 4GB SD IoT``` to SD card.
Insert the card and power on the BeagleBone Black (BBB). Browse to the IP address of the BBB to enter into the Cloud 9 IDE.
* (Optional) To flash the image to the eMMC edit the /boot/uEnv.txt

```cd /boot```

```sudo nano uEnv.txt```

Uncomment the line at the end ```cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh``` and reboot. The flash process is automatic and you know it was successful after 10 minutes when the BBB has shutdown on its own. Remove the SD card before powering back on.
* Update distribution components:

```/var/lib/cloud9$ sudo apt update```

```/var/lib/cloud9$ sudo apt upgrade```

```/var/lib/cloud9$ sudo apt install -y ti-tidl mjpg-streamer-opencv-python```

* Update examples in the Cloud9 IDE workspace:

```/var/lib/cloud9$ git pull```

* Update the boot-up scripts and Linux kernel:

```/var/lib/cloud9$ cd /opt/scripts```

```/opt/scripts$ git pull```

```/opt/scripts$ sudo tools/update_kernel.sh```

* Shutdown and reboot

```/opt/scripts$ sudo shutdown -r now```

* Test installed versions

```/var/lib/cloud9$ sudo /opt/scripts/tools/version.sh```



## Installation
PWM_Server.js and PWM.html need to be copied to the same directory in the BeagleBone Black. The dependency "socket.io should be installed already by the BeagleBone image.

Download files from GitHub to the BeagleBone Black:

````sh
cd /var/lib/cloud9
git clone git://github.com/badfrogg/BBB_Aquarium
````


## Usage
Run  ```node PWM_Server.js``` and then browse to your BeagleBone Black IP address, include port :8085.

Example -``` http://192.168.1.103:8085/ ```

### Credits
I have studied and copied code from the following repositories in this project:
* https://github.com/simonmonk/prog_bbb

![Pin Map](https://github.com/badfrogg/BBB_Aquarium/blob/master/beaglebone_black_pinmap.png)
