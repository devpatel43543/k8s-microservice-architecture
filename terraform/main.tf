provider "google" {
  project = "kubernetes-a3-453021"
  region  = "us-central1"
  zone    = "us-central1-c"
}

resource "google_container_cluster" "primary" {
  name     = "a3-cluster"
  location = "us-central1-c"

  remove_default_node_pool = true
  initial_node_count       = 1


  addons_config {
    http_load_balancing {
      disabled = false
    }
  }

}

resource "google_container_node_pool" "primary_nodes" {
  name       = "primary-node-pool"
  location   = "us-central1-c"
  cluster    = google_container_cluster.primary.name
  node_count = 1

  node_config {
    machine_type = "e2-standard-2"


    preemptible = true

    image_type = "cos_containerd"

    disk_type    = "pd-standard"
    disk_size_gb = 10

    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform"
    ]

    metadata = {
      disable-legacy-endpoints = "true"
    }
  }
}

output "kubernetes_cluster_name" {
  value = google_container_cluster.primary.name
}

output "kubernetes_cluster_host" {
  value = google_container_cluster.primary.endpoint
}

terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 4.0"
    }
  }
}
