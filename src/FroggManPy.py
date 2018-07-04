import Adafruit_BBIO.GPIO as GPIO
import Adafruit_BBIO.PWM as PWM
import time

PWM.start("P8_13", 50.0, 2000, 0)
EnA = "P8_8"

GPIO.setup(EnA, GPIO.OUT)

GPIO.output(EnA, GPIO.HIGH)

print("Enter Sun Rise: ")

SunRise = float(raw_input())
localtime = time.asctime(time.localtime(time.time()))
Hour = 6.15
print("local time: ", localtime)

if Hour >= 6.15:
    SunRise = "SunRise and Daytime"

else:
    SunRise <= 6.14
    print("Before SunRise")

print("SunRise: " +  str(SunRise))