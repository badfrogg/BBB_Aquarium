import Adafruit_BBIO.GPIO as GPIO
import Adafruit_BBIO.PWM as PWM
from time import time

PWM.start("P8_13", 50, 2000, 1)
EnA = ("P8_08", 0.0)

print("Enter Sun Rise: ")

SunRise = bool(raw_input(time))
Hour = 6.15

if Hour > 6.15:
    sunRise = (6.15 + EnA) + ((SunRise - 6.15) * (Hour * 1))

else:
    sunRise = SunRise >= Hour
print("sunRise: " +  str(sunRise))
