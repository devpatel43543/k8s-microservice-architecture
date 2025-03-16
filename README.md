# k8s-microservice-architecture
# 📦 k8s-microservice-architecture

A cloud-native microservice architecture built using Docker, Kubernetes (GKE), and Google Cloud Platform (GCP) services. This project features two microservices interacting with each other, deployed via a CI/CD pipeline, and connected to a shared persistent volume.

## 🛠️ Tech Stack

- **Docker**: Containerize microservices.
- **Kubernetes (GKE)**: Deploy and manage services.
- **Google Cloud Build**: Automate build and deployment.
- **Artifact Registry**: Store Docker images.
- **Cloud Source Repositories**: Manage source code.
- **kubectl**: Interact with the Kubernetes cluster.

## 🚀 Architecture Overview


- **Containerization**: Packaging microservices using Docker.
- **CI/CD Pipeline**: Automating deployment using GCP's Cloud Build.
- **Kubernetes Deployment**: Managing and scaling services using Google Kubernetes Engine (GKE).
- **Persistent Volumes**: Sharing data between services using Kubernetes Persistent Volumes.
  
   <img width="658" alt="Screenshot 2025-03-07 at 5 35 45 PM" src="https://github.com/user-attachments/assets/ab07a160-b6ed-499d-852e-8f53ccb07e07" />

## 📌 Features

- Two microservices communicating via REST APIs.
- Automated CI/CD pipeline with Cloud Build.
- Persistent Volume for shared data storage.
- Kubernetes manifests for deployment.

