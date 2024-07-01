# Tweets Sentiment Analysis with Transformers

## Introduction
This project explores sentiment analysis using the BERT model (Bidirectional Encoder Representations from Transformers), a leading architecture in NLP. The main focus is on understanding and enhancing transformer architectures. Development was done using the PyTorch framework to deepen expertise in advanced deep learning techniques.

## Hardware Setup
Experiments were conducted on Kaggle, utilizing the NVIDIA Tesla P100 GPU to ensure efficient training and testing of models.

## Data Preprocessing
The preprocessing steps included the removal of tags, hashtags, URLs, punctuation, multiple spaces, and numbers. Stop words were not removed to preserve sentiment context, e.g., the difference in sentiment between "not happy" and "happy". The dataset was divided into training (80%), testing (12%), and validation sets (8%).

## Text Analysis
The dataset includes "text" and "selected text" columns. A similarity analysis using BERT's tokenizer showed an average score of 0.72, leading to the decision to use full texts for better context preservation.

## Modeling
Three models were developed:
- **BERT**: Uses a pre-trained `bert-base-uncased` model with a simple neural network classifier.
- **BERTLSTM**: Incorporates LSTM layers with the BERT model to enhance memory retention and contextual understanding.
- **BERTGRU**: Combines GRU layers with BERT to manage long-range dependencies in text effectively.

## Loss Function and Optimization
The primary loss function used was cross-entropy. Attempts to use focal loss and weighted cross-entropy to address class imbalance did not yield satisfactory results, thus continuing with standard cross-entropy. The Adam optimizer was employed.

## Model Comparison and Results
- **BERT**: Achieved the highest accuracy of 0.78.
- **BERT-LSTM**: Reached an accuracy of 0.69.
- **BERT-GRU**: Recorded an accuracy of 0.71.

The standalone BERT model outperformed other versions, suggesting that additional recurrent layers do not significantly enhance performance for shorter sentences.

## Similar Work
Previously worked on a sentiment analysis project using the IMDB movies reviews dataset with TensorFlow, experimenting with various RNN and embedder combinations.

## Repository Link
[Sentiment Analysis with Pretrained Embedders and Recurrent NNs](https://github.com/HaykelBargouguy/Sentiment-Analysis-Pretrained-Embedders-and-Recurrent-NNs-combinations/tree/main)

## Model Performance Details
| Model Type    | Batch Size | Epochs | Learning Rate | Parameters (Millions) | GFLOPs | Train Accuracy | Test Accuracy | Inference Time (seconds) |
|---------------|------------|--------|---------------|-----------------------|--------|----------------|---------------|--------------------------|
| BERT          | 32         | 40     | 2e-5          | 109.52                | 82.16  | 0.99           | 0.78          | 0.012                    |
| BERT + LSTM   | 32         | 40     | 2e-5          | 113.16                | 82.16  | 0.75           | 0.69          | 0.013                    |
| BERT + GRU    | 32         | 40     | 2e-5          | 112.24                | 82.16  | 0.72           | 0.71          | 0.013                    |
