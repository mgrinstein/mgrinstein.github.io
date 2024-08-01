---
title: Building a GenAI Solution — Architecture & Development
published: 2024-07-14
description: "How to get started with a proof of concept GenAI project, including service architecture and code implementation."
image: "./cover.jpeg"
tags: ["Generative AI", "Software Architecture", "AWS"]
category: Guides
draft: false
---

As the world continues to advance rapidly in the realm of Artificial Intelligence, the implementation of Generative AI solutions is becoming a crucial aspect of modern software development.
This article aims to guide you through the process of architecting and developing a service that uses GenAI, specifically focusing on a product **description generator** case, and choosing AWS services to implement it.

---

## Architecting a service with GenAI
### The project
We are building a description generator service that leverages Generative AI to create detailed and contextually relevant descriptions for products based on provided images and metadata. The goal is to automate the process of generating high-quality product descriptions, which can be useful for e-commerce platforms, content creation, and digital marketing, amongst other applications.

### The solution flow
The implementation for the description generator case is composed of four steps:
1. Upload inputs: the image input and metadata corresponding to the description we need to generate are sent to the Machine Learning Platform;
2. Labels are detected from the image;
3. A text template is populated with the labels and metadata, and sent to prompt the Foundation Model, which returns a new description;
4. The response is propagated to the user.

[Image -- The solution flow]

### Writing the (pseudo)code
Here's a high-level outline of the system with Python-inspired pseudocode syntax:

1️⃣ Main
```
# 1 - Main function to coordinate all steps
def main(image_path, metadata):
    
    # 2 - Detect labels
    labels = detect_labels(image_path, MAX_LABELS, MIN_CONFIDENCE, DETECT_SETTINGS)
    
    # 3 - Create prompt and generate new description
    prompt = create_prompt(metadata, labels)
    description = generate_description(
      generate_settings,
      model_params,
      prompt
    )
    
    # 4 - Return description
    return description
```

2️⃣ Detect labels
```
def detect_labels(input_image_path, MAX_LABELS, MIN_CONFIDENCE, SETTINGS):

    # Initialize the image recognition client
    image_labeling_client = initialize_image_labeling_client(SETTINGS)
    
    # Read the image file in binary mode
    image_binary = read_image_file(input_image_path)
    
    # Call the image recognition service to detect labels
    response = image_labeling_client.detect_labels(
        Image={ "Bytes": image_binary },
        MAX_LABELS,
        MIN_CONFIDENCE
    )
    
    # Return the detected labels from the response
    return response['Labels']
```

3️⃣ Create prompt
```
def create_prompt(metadata, labels):
    return f"""
Human: Write me a description for a new product called {metadata["name"]}.
It is aimed at those interested in {metadata["interest"]}.
The product contains the following elements: {labels}.
Assistant:
    """
```

4️⃣ Prompt the Foundation Model
```
def generate_description(settings, model_params, prompt):
 
  # Initialize the GenAI managed service client:
    genai_client = initialize_genai_client(settings)
    
  # Instantiate the text generation model with specified parameters
    text_generation_model = FoundationModel(
        initialize_genai_client,
        model_params
    )
  
  # Prompt the model
    return text_generation_model(prompt)
```

### Implementation on AWS
I used the following AWS services to create a demo for this project:

[Image -- Using AWS services]

**Amazon SageMaker:** AWS' fully managed Machine Learning service. By creating a SageMaker notebook instance, you will have a Machine Learning compute instance running the Jupyter Notebook App, whilst SageMaker manages the instance creation and related resources. It is where you can develop and run your solution.

**Amazon Rekognition:** a service for image recognition and video analysis. For my use case, it detected objects and concepts on the image provided by the user and returned labels with information on what was detected and with what level of confidence.

**Amazon Bedrock:** provides a standardized API to several Foundation Models, simplifying integrations, operations, and model version upgrades.

_💡 **Tip:** AWS also offers various samples on their GitHub page using Bedrock. They include composing emails, summarizing text, answering questions, building chatbots, and creating images, and you can easily adapt the code to your needs:_
::github{repo="aws-samples/amazon-bedrock-workshop"}

## 📖 On a personal note
I am currently a back-end engineer, but on my first full-time job, I worked with data analysis and business-related tasks. I really wanted to write code though, so when AI's "first wave", with data science as the propulsor, I started studying it too to see what was possible for my department.

This is when I first used services such as SageMaker and Rekognition, which have been here for a while (Rekognition was launched in 2016, and SageMaker in 2017), and built personal projects that I am quite fond of up until this day, and that I use as inspiration for current ones.
As we ride AI's "second wave", with the launch of Bedrock in 2023 for instance, it might be the case that you are in the same boat, navigating the challenges of a new technology with business contexts in mind. My main advice is to outline your projects thoroughly before starting to code.

It is tempting to start with trial and error when building applications using new tools and technologies. However, one such approach might create a recurring need to revisit your implementation if the concept is not complete and you're dynamically adapting your service to your discovery of the tools' possibilities. Drawing it all up allows you to understand your requirements, build a complete solution, outline its smaller, self-contained components, and reflect on the interfaces between those.

[Image -- Photo by Kelly Sikkema on Unsplash]

Having this method as a rule allows me to come up with a final solution that is clean, trivial, and free from the noise that other draft ideas could have introduced. I don't have to spend a lot of time refactoring code or investigating bugs. **Breaking your design down into manageable chunks that you comprehend thoroughly, and eliminating the 'nice-to-haves' that don't fit in the category of essential features will allow you to get a project across the finishing line.** Then you will have the time and clarity of mind to deliver any extra feature that builds upon it.


## Make it your own
The flexibility of this architecture allows for a wide range of applications beyond product descriptions. With a few adjustments, you can tailor it to various creative and functional purposes. For instance, it could generate a story that matches an illustration or a haiku to accompany your vacation photos. It could also include a narration module using a text-to-speech service. The sky is the limit!

You can find other content related to this topic, plus Backend and Cloud articles, on my [Medium page](https://medium.com/@grinsteinmonique).
