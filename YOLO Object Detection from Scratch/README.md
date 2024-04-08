# YOLO Object Detection from Scratch

This project implements a You Only Look Once (YOLO) object detection system from scratch using TensorFlow. The model is trained on the VOC 2012 Kaggle dataset and tested on the COCO 2017 dataset. The network architecture is based on EfficientNetB1 with additional convolutional and dense layers added to extend the network depth. The project includes features for handling XML annotations, visualizing results, training with data augmentation to reduce overfitting, and utilizing callbacks for training management.

## Architecture
![Architecture du modèle](https://github.com/HaykelBargouguy/Projects/assets/98351985/2cb1aaa3-b618-42be-8c5a-f2e7190023f7)

## Features

- XML File Annotation: The project supports handling XML annotation files for training data.
- Data Preprocessing: Images and their annotations are processed to be ready for use in the object detection network.
- Model Training: The YOLO model is trained on the VOC 2012 dataset using EfficientNetB1 as the base with additional layers.
- Evaluation on COCO Dataset: The trained model is evaluated on the COCO 2017 dataset to assess its performance.
- Custom Loss Function: Implements the YOLO loss function as described in the paper [You Only Look Once: Unified, Real-Time Object Detection](https://pjreddie.com/media/files/papers/yolo_1.pdf).
- Utilization of Callbacks: Callbacks are used to adjust learning rate and save the best models during training.
- Data Augmentation: To reduce overfitting, data augmentation techniques are employed during training.
- Results Visualization: Functions are provided to draw bounding boxes and visualize object detection results.

## Results 

![66bb0e5d-39ac-4807-a6d3-6c1dbe66eca5](https://github.com/HaykelBargouguy/Projects/assets/98351985/0510ff7a-08f8-41cd-a2a4-aafedc8d446c)
![80011b84-6953-4319-b6c2-9fd4e38c777a](https://github.com/HaykelBargouguy/Projects/assets/98351985/0386ab67-3276-407a-9194-70d52b9853a8)
![4e23bc44-b345-4eb9-8836-c55d6c0a5755](https://github.com/HaykelBargouguy/Projects/assets/98351985/bdf1de76-ec64-4b01-b25c-7791dc37cef5)


## Installation

1. Clone this repository:

```bash
git clone https://github.com/YourUsername/YOLO-Object-Detection.git
