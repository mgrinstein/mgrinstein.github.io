---
title: GenAI Made Easy for Devs - with AWS CDK Constructs
published: 2024-07-14
description: "How to get started with AWS CDK and deploy infrastructure for a GenAI app. These are resources from my talk "GenAI Made Easy for Devs - with AWS CDK Constructs"."
image: "./images/getting-started/buildings.jpeg"
tags: ["AWS CDK", "GenAI", "IaC"]
category: CDK
draft: false
---

## GenAI Made Easy for Devs - with AWS CDK Constructs
### Getting started with CDK
[**AWS CDK Immersion Day Workshop**](https://catalog.us-east-1.prod.workshops.aws/workshops/10141411-0192-4021-afa8-2436f3c66bd8/en-US) <br>

If you never used CDK, I recommend starting here. You can choose to follow this tutorial in TypeScript, Python, or Go. If you also don't have an AWS account or never used the AWS CLI, the "Prerequisites" tab has tutorial links for those.
<br>

### Deploying official CDK examples from AWS

[**AWS Samples - AWS CDK Samples**](https://github.com/aws-samples/aws-cdk-examples)
Various examples of the CDK implemenatation of common services and architecture patterns. <br>

[**AWS Samples - Generative AI CDK Construct Samples**](https://github.com/aws-samples/generative-ai-cdk-constructs-samples) <br>
Specific examples of Generative AI stacks built using AWS Generative AI CDK Constructs.
I recommend starting with the [SageMaker JumpStart Model](https://github.com/aws-samples/generative-ai-cdk-constructs-samples/tree/main/samples/sagemaker_jumpstart_model), which looks like this:
![SageMaker JumpStart Model - Architecture](./images/getting-started/architecture.png)

### CDK Constructs for GenAI

[**AWS Generative AI CDK Constructs**](https://github.com/awslabs/generative-ai-cdk-constructs)
This is the library containing CDK Constructs for common Generative AI application patterns. If you're building stacks that contain GenAI services (or leveraging the sample ones from AWS), you'll be importing said services from this library. <br>