---
title: "Transfer Learning"
subject: "COMPUTER VISION"
module: "Module 3: Machine Learning for  Computer Vision :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c3b1"
status: "completed"
scrapedAt: "2026-05-20T17:03:17.280Z"
---
# Computer Vision: Module 3: Machine Learning for Computer Vision

## Topic: Transfer Learning

---

### 1. Introduction to Transfer Learning

*   **Definition:** Transfer learning is a machine learning technique where a model trained on one task is repurposed on a second, related task. Instead of training a new model from scratch, we leverage the knowledge gained from a pre-trained model.

*   **Why Transfer Learning?**
    *   **Reduces Training Time:** Training deep neural networks from scratch can be computationally expensive and time-consuming, requiring massive datasets. Transfer learning significantly speeds up this process.
    *   **Requires Less Data:** For many real-world computer vision tasks, acquiring large annotated datasets is difficult and costly. Transfer learning allows us to achieve good performance with smaller datasets.
    *   **Improves Performance:** Pre-trained models have learned general features (e.g., edges, textures, shapes) from large, diverse datasets, which can be highly beneficial for new tasks, leading to better accuracy and generalization.

*   **Core Idea:** The intuition behind transfer learning is that models trained on large datasets (like ImageNet) learn hierarchical representations of visual data. Lower layers learn generic features (edges, corners), while higher layers learn more complex, task-specific features (object parts, specific objects). We can reuse these generic features for new tasks.

---

### 2. Key Concepts and Definitions

*   **Source Task/Domain:** The task or dataset on which the original model was trained.
    *   *Example:* Training a model on the ImageNet dataset for image classification (identifying thousands of object categories).

*   **Target Task/Domain:** The new task or dataset on which we want to apply the pre-trained model.
    *   *Example:* Classifying different types of medical images (e.g., X-rays showing pneumonia vs. no pneumonia).

*   **Pre-trained Model:** A model that has already been trained on a large dataset for a related task.
    *   *Examples:* VGG, ResNet, Inception, MobileNet, EfficientNet (often trained on ImageNet).

*   **Feature Extraction:** Using the pre-trained model as a fixed feature extractor. The convolutional layers of the pre-trained model are kept, and their weights are frozen. A new classifier (typically fully connected layers) is added on top and trained on the target dataset.

*   **Fine-tuning:** Taking a pre-trained model and further training some or all of its layers on the target dataset. This allows the model to adapt its learned features to the specific characteristics of the new task.

*   **Freezing Layers:** Disabling the training of certain layers in the pre-trained model. This is typically done for the earlier layers that have learned generic features, preventing them from being drastically altered by the new, smaller dataset.

*   **Unfreezing Layers:** Enabling the training of certain layers, usually the later layers or all layers, in the pre-trained model to adapt them to the target task.

---

### 3. Strategies for Transfer Learning

There are several common strategies for applying transfer learning, depending on the size of the target dataset and its similarity to the source dataset:

#### 3.1. Using the Pre-trained Model as a Feature Extractor

*   **When to use:**
    *   Target dataset is small.
    *   Target dataset is similar to the source dataset.

*   **How it works:**
    1.  Load a pre-trained model (e.g., ResNet50) without its final classification layer.
    2.  Freeze the weights of all layers in the pre-trained model.
    3.  Add new, trainable classification layers (e.g., a few fully connected layers) on top of the pre-trained convolutional base.
    4.  Train only these new layers on the target dataset. The pre-trained part acts as a fixed feature extractor.

*   **Example:**
    *   **Source:** ImageNet (1000 classes)
    *   **Target:** Classifying images of cats vs. dogs (2 classes)
    *   Load a ResNet50 pre-trained on ImageNet.
    *   Remove the final 1000-class softmax layer.
    *   Add a new classifier with 2 output neurons and a softmax activation.
    *   Freeze all ResNet50 layers.
    *   Train the new classifier on your cat/dog dataset.

#### 3.2. Fine-tuning the Pre-trained Model

*   **When to use:**
    *   Target dataset is moderate to large.
    *   Target dataset is similar to the source dataset, or slightly different.

*   **How it works:**
    1.  Load a pre-trained model.
    2.  Replace the final classification layer with a new one suited to the target task.
    3.  Unfreeze some of the later layers of the pre-trained model (e.g., the last few convolutional blocks) or all layers.
    4.  Train the entire model (or the unfrozen layers and the new classifier) on the target dataset with a **low learning rate**. This prevents drastic changes to the pre-learned weights.

*   **Example:**
    *   **Source:** ImageNet
    *   **Target:** Classifying different types of flowers (e.g., roses, sunflowers, tulips).
    *   Load VGG16 pre-trained on ImageNet.
    *   Replace the final classification layer with a 3-class output.
    *   Unfreeze the last few convolutional blocks of VGG16.
    *   Train the unfrozen blocks and the new classifier on the flower dataset with a low learning rate.

#### 3.3. Fine-tuning with Different Degrees of Unfreezing

The decision of how many layers to unfreeze is crucial.

*   **Strategy 1: Train only the classifier:** Freeze all pre-trained layers. (Covered in Feature Extraction)
*   **Strategy 2: Train the classifier and the last block:** Freeze earlier blocks, unfreeze the last block and train.
*   **Strategy 3: Train the classifier and the last two blocks:** Freeze earlier blocks, unfreeze the last two blocks and train.
*   **Strategy 4: Train all layers:** Unfreeze all pre-trained layers and train the entire network.

*   **General Rule of Thumb:**
    *   **Small Dataset, Similar Task:** Use Feature Extraction (Strategy 1).
    *   **Moderate Dataset, Similar Task:** Fine-tune the last few blocks (Strategies 2 or 3).
    *   **Large Dataset, Similar Task:** Fine-tune most or all layers (Strategies 3 or 4).
    *   **Small Dataset, Different Task:** Start with Feature Extraction, then consider gradually unfreezing layers if performance is poor.
    *   **Large Dataset, Different Task:** Fine-tune most or all layers, but be cautious with very early layers.

---

### 4. Popular Pre-trained Models for Computer Vision

These models are trained on the ImageNet dataset, which contains millions of images across 1000 object categories.

*   **VGG (e.g., VGG16, VGG19):** Known for its simple architecture with small (3x3) convolutional filters stacked deeply. Good feature extractors but can be computationally expensive.
*   **ResNet (e.g., ResNet50, ResNet101, ResNet152):** Introduces residual connections (skip connections) to address the vanishing gradient problem in very deep networks, allowing for much deeper architectures.
*   **Inception (e.g., InceptionV3, GoogLeNet):** Uses "Inception modules" that perform convolutions with different filter sizes in parallel, capturing features at multiple scales efficiently.
*   **MobileNet (e.g., MobileNetV1, MobileNetV2):** Designed for mobile and embedded devices. Uses depthwise separable convolutions to significantly reduce the number of parameters and computations.
*   **EfficientNet:** A family of models that systematically scales model width, depth, and resolution using a compound scaling method, achieving state-of-the-art accuracy with fewer parameters.

---

### 5. Implementing Transfer Learning (Conceptual Steps using a deep learning framework like Keras/TensorFlow or PyTorch)

Let's illustrate with a conceptual example using Keras:

```python
# Assume you have a dataset with 'train_generator' and 'validation_generator'

# 1. Load a pre-trained model (e.g., ResNet50) without the top classification layer
from tensorflow.keras.applications import ResNet50
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D

base_model = ResNet50(weights='imagenet', include_top=False, input_shape=(224, 224, 3))

# 2. Freeze the base model layers (for feature extraction)
for layer in base_model.layers:
    layer.trainable = False

# 3. Add new classification layers
x = base_model.output
x = GlobalAveragePooling2D()(x) # Pool features into a vector
x = Dense(1024, activation='relu')(x) # Add a dense layer
predictions = Dense(num_classes, activation='softmax')(x) # Final output layer for your classes

# 4. Create the new model
model = Model(inputs=base_model.input, outputs=predictions)

# 5. Compile the model
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# 6. Train the model (only the new layers are trained)
history_feature_extraction = model.fit(
    train_generator,
    steps_per_epoch=train_generator.samples // train_generator.batch_size,
    epochs=10,
    validation_data=validation_generator,
    validation_steps=validation_generator.samples // validation_generator.batch_size
)

# --- Optional: Fine-tuning ---

# 7. Unfreeze some layers of the base model (e.g., the last block)
# For ResNet50, layers from index ~140 onwards are typically the last block
for layer in base_model.layers[140:]:
    layer.trainable = True

# 8. Re-compile the model with a VERY LOW learning rate
from tensorflow.keras.optimizers import Adam
model.compile(optimizer=Adam(learning_rate=0.00001), loss='categorical_crossentropy', metrics=['accuracy'])

# 9. Continue training the model (fine-tuning)
history_fine_tuning = model.fit(
    train_generator,
    steps_per_epoch=train_generator.samples // train_generator.batch_size,
    epochs=10, # Train for more epochs to allow fine-tuning
    validation_data=validation_generator,
    validation_steps=validation_generator.samples // validation_generator.batch_size
)
```

---

### 6. When Transfer Learning Might Not Be Ideal

*   **Task Dissimilarity:** If the source task/domain is extremely different from the target task/domain, the pre-trained features might not be relevant or even detrimental.
    *   *Example:* Using a model trained on natural images (ImageNet) for financial time-series analysis.
*   **Very Large Target Dataset:** If you have a massive dataset for your target task, training a model from scratch might yield better or comparable results and give you more control over the architecture.
*   **Novel Domains:** For entirely new or niche domains with unique data characteristics not seen in large datasets, transfer learning might require extensive fine-tuning or may not be beneficial.

---

### 7. Practice Questions and Exercises

**Question 1:**
Which of the following is NOT a primary benefit of using transfer learning?
a) Reduced training time
b) Improved performance with smaller datasets
c) Eliminates the need for any data annotation
d) Leverages learned features from a related task

**Question 2:**
You have a small dataset of X-ray images to classify pneumonia. You have access to a powerful model pre-trained on the ImageNet dataset. Which transfer learning strategy would you most likely choose and why?
a) Feature Extraction: Freeze all pre-trained layers and train a new classifier.
b) Fine-tuning: Unfreeze all pre-trained layers and train the entire model with a high learning rate.
c) Feature Extraction: Unfreeze all pre-trained layers and train a new classifier.
d) Fine-tuning: Freeze all pre-trained layers and train the entire model.

**Question 3:**
What is the main difference between "Feature Extraction" and "Fine-tuning" in the context of transfer learning?

**Question 4 (Conceptual Exercise):**
Imagine you are building a system to classify different types of cheese from images. You have a dataset of 500 cheese images per class. You are considering using a ResNet50 model pre-trained on ImageNet.
1.  What would be a good initial approach?
2.  If your initial approach does not yield satisfactory results, what could be your next step?

---

### 8. Answers to Practice Questions

**Answer 1:**
c) Eliminates the need for any data annotation.
*   **Explanation:** While transfer learning reduces the *amount* of data annotation needed, it doesn't eliminate it entirely. You still need labeled data for your target task.

**Answer 2:**
a) Feature Extraction: Freeze all pre-trained layers and train a new classifier.
*   **Explanation:** For a small dataset, training the entire network can lead to overfitting. Freezing the pre-trained layers and training only a new, small classifier on top is a safer and more effective approach, as it leverages the general features learned from ImageNet without corrupting them with limited target data.

**Answer 3:**
The main difference lies in which parts of the pre-trained model are trained on the new dataset:
*   **Feature Extraction:** Only the newly added layers (typically the classifier) are trained. The weights of the pre-trained model are frozen, and it acts as a fixed feature extractor.
*   **Fine-tuning:** Some or all of the layers of the pre-trained model are unfrozen and trained along with the new classifier, usually with a low learning rate, to adapt the learned features to the target task.

**Answer 4 (Conceptual Exercise):**
1.  **Initial Approach:** Given a dataset of 500 images per class (which is relatively small for training from scratch but can be managed), a good initial approach would be **Feature Extraction**.
    *   Load a ResNet50 model pre-trained on ImageNet.
    *   Remove its top classification layer.
    *   Freeze all layers of the ResNet50 model.
    *   Add a new classifier (e.g., Dense layers) suited for the number of cheese classes.
    *   Train only these new classifier layers on the cheese dataset.
    *   This approach prevents overfitting on the limited cheese data by relying on the powerful, general features learned by ResNet50.

2.  **Next Step if Unsatisfactory:** If the initial feature extraction approach doesn't yield satisfactory results, the next step would be to try **Fine-tuning**.
    *   **Option A (Gradual Fine-tuning):** Unfreeze the last few convolutional blocks of the ResNet50 model (e.g., the last block or the last two blocks). Keep the earlier layers frozen as they capture more generic features. Train these unfrozen layers along with the new classifier using a very low learning rate. This allows the model to adapt the more task-specific, higher-level features to distinguish between different cheeses.
    *   **Option B (Full Fine-tuning):** If Option A doesn't improve performance significantly, you could consider unfreezing all layers of the ResNet50 model and training the entire network with a very low learning rate. However, this carries a higher risk of overfitting if the dataset is not sufficiently large or diverse.

---

### 9. Important Points to Remember

*   **Dataset Size and Similarity:** The choice between feature extraction and fine-tuning (and how many layers to fine-tune) is heavily dependent on the size of your target dataset and its similarity to the dataset the pre-trained model was trained on.
*   **Learning Rate:** When fine-tuning, always use a **low learning rate** to avoid destroying the pre-trained weights. A common practice is to use a learning rate 10-100 times smaller than what you would use for training from scratch.
*   **Data Preprocessing:** Ensure your target data is preprocessed in the same way as the data used to train the original model (e.g., image resizing, normalization, color channel order).
*   **Experimentation:** Transfer learning is often an empirical process. You may need to experiment with different pre-trained models, different numbers of unfrozen layers, and different learning rates to find the best strategy for your specific task.
*   **Overfitting:** Be mindful of overfitting, especially when fine-tuning on small datasets. Techniques like data augmentation and early stopping are crucial.
*   **Domain Adaptation:** Transfer learning is a core technique in domain adaptation, where knowledge is transferred from a source domain to a target domain.

---
