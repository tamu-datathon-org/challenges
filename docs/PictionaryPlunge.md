---
sidebar_position: 3
---
# Pictionary Plunge

**Introduction, Presence**

Pictionary Plunge is based on the "Quick, Draw!" game developed by Google Researchers in November 2016. The initial premise of the venture is for a neural network trained by Google to learn how to identify objects from human-drawn doodles. The game quickly became a viral sensation, peaking in player count in early 2017. Google published its dataset and their paper summarizes the results of Google's model. Fast forward to 2023, and machine learning has come a long way. You'll now be working on a problem that top researchers worked on back in 2017! In this hackathon, you'll dive into a fascinating world of doodles, sketches, and artistic intelligence.

**Objective**

Essentially, it's like playing a game of pictionary.

Build a machine learning model that, given a stream of stroke data, can predict what a player is drawing based on the strokes they've made so far, as fast as possible.

**Dataset**

You will be working with a dataset similar to the QuickDraw dataset tailored for this datathon challenge. Some of the data provided may not be categories as seen. You will begin the challenge without knowledge of the data which will be used for final testing, and as time progresses we will release more samples of the types of sketches we will be testing.

For any given drawing, the drawing can be represented as a multidimensional array with at least one stroke, defined as one continuous line where the pen does not lift. Each stroke contains two values: an array of x values and an array of y values.

```json
[
  [  // First stroke
    [x0, x1, x2, x3, ...],
    [y0, y1, y2, y3, ...],
  ],
  [  // Second stroke
    [x0, x1, x2, x3, ...],
    [y0, y1, y2, y3, ...],
  ],
  ... // Additional strokes
]
```

**Submission**

The challenge begins as soon as it is announced during the opening ceremony of TAMU Datathon, on 28 October. You will have approximately 24 hours to complete this challenge and get it submitted. The deadline for submission is 11:00 AM on 29 October, unless stated otherwise. You will submit to Devpost, where you are expected to provide all relevant files and a brief demo video of your project.

After we release the data, we will also release our grading platform where you must submit to see your ranking.

**Evaluation Criteria**

You will be graded primarily on the accuracy and speed of your completed model. A high accuracy means that your model should be able to correctly predict the values of drawings it has not seen before. A high speed means that your model will be awarded a higher score if it is able to identify the drawing in a fewer number of strokes.

**Hints/Resources**

Your model should ideally contain the following:

- A train/fit function: takes in at least two parameters - a list with JSON sketches, and a list with the corresponding drawing categories.
- A predict function: take in one parameter - a list with JSON sketches; returns a list with the predicted drawing categories.

There are many different approaches to solving this problem, but a neural network is recommended for this problem.

**Useful Resources:**

- [The "Quick, Draw" Dataset - Github](https://github.com/googlecreativelab/quickdraw-dataset)
- ["A Neural Representation of Sketch Drawings" - Research Paper](https://arxiv.org/pdf/1704.03477.pdf)
- [Quick Draw: The World's Largest Doodle Dataset - Towards Data Science](https://towardsdatascience.com/quick-draw-the-worlds-largest-doodle-dataset-823c22ffce6b)
- [QuickDraw Data: large CNNs and GANs](https://www.nbi.dk/~petersen/Teaching/ML2021/Projects/FinalProject21_MarieMartinKasper_QuickDrawWithGANs.pdf)
- [The Basics of Neural Networks (Neural Network Series) - Towards Data Science](https://towardsdatascience.com/the-basics-of-neural-networks-neural-network-series-part-1-4419e343b2b)

**Prizes**

- iPad 9th Generation
- Bokigibi Drone with 1080P HD FPV Camera
- $50 Gift Card