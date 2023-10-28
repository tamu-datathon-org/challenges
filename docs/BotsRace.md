---
sidebar_position: 5
---
# Bots Race

## Introduction

Sensorimotor control is a major challenge in the area of robotics and artificial intelligence. It has parallels in the way children learn primary life skills and extends in applications to controlling the flight of airplanes. Understanding the way machines interact with and sense the environment will be a major field of study for years to come.

## Description

- You have a circular robot in a 2D plane environment with a track made up of many points.
- You control it using 2 inputs, each input is mapped to some application to motors on the robot, specifically the linear acceleration and the angular acceleration.
- The robot has a maximum linear speed, linear acceleration, angular speed, and angular acceleration.
- You have 4 vision sensors which indicate to you the amount of points on the track near your robot.
- Every turn, you receive as input the orientation of your robot and the inputs from each of your vision sensors, all normalized [0,1].
- The objective is to traverse the points on the track as fast as possible.

## Data

Data is passed in the form of a 5-dimensional vector:
1. The first dimension is the orientation of the robot, from a scale of 0 to 1, where 0 represents 0 radians, 0.5 represents π radians, etc.
2. The next four dimensions are the outputs of the vision sensors, which are also from 0 to 1 and correspond to how much of the track they see, i.e. the number of points in the sensor’s range divided by the total number of points in the track.

You are expected to provide two numbers as output to control the robot through the linear acceleration and angular acceleration, within a certain specified range.

Each turn consists of receiving an input vector, calculating a response, and sending back the numbers of the desired control.

## Quick Start

We provide a basic controller which applies a random action every turn, as well as example maps. You can work from our starter code to build an agent which can react to the inputs in new ways, as well as develop controllers for the different types of vehicles.

Be sure to check out the [code repo](https://drive.google.com/file/d/1pGS2YFI-P9238jiK4RM_mDmJPuDAi4pl/view?usp=sharing) for more information.

In our code repo, we provide some tracks to play around with in the environment_factory.py file. You may need to make more tracks to ensure your solution is robust.

## Submission

You will submit a program which listens for input and publishes output to the appropriate receiver, following the structure specified in our code repository.

We will open submissions to our grading platform, "attorney", which you can submit to and see your ranking.

Be sure to also make a submission to devpost with a brief description of your work.

## Judging

We will race your robot on a set of tracks and test how much of each track your robot was able to cover. The more points along the track your robot passed over, the higher your score. Furthermore, the faster your robot is able to reach the end of the track, the higher your score. If you veer off of the track for too long, your run is stopped and you are penalized.

## Resources

- [Reinforcement Learning](https://openai.com/research/openai-gym-beta)
- [PID Control](https://pidexplained.com/pid-controller-explained/)

## Prizes

- MNN Portable Monitor 15.6inch FHD 1080P
- Logitech G502 HERO Gaming Mouse
- $50 Gift Card