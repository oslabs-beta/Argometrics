# README

# Technologies
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) 
  ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
  ![OAUTH](https://img.shields.io/badge/OAUTH2.0-black?style=for-the-badge&logo=JSON%20web%20tokens)
  ![Electron.js](https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white)
  ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
  ![kubernetes](https://img.shields.io/badge/Kubernetes-100000?style=for-the-badge&logo=Kubernetes&logoColor=white&labelColor=000000&color=black)
  ![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white) 
  ![Grafana](https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
  ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
  ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
  ![K6](https://img.shields.io/badge/-K6-white?style=for-the-badge&logo=k6)
  ![Keda](https://img.shields.io/badge/-KEDA-darkblue?style=for-the-badge&logo=lightning&logoColor=white)
  ![Bcrypt](https://img.shields.io/badge/BCRYPT-grey?style=for-the-badge&logo=letsencrypt)
  ![Javascript](https://img.shields.io/badge/javascript-yellow?style=for-the-badge&logo=javascript)
  ![reactdnd](https://img.shields.io/badge/REACT%20DND-blue?style=for-the-badge&logo=react&logocolor=red)
  ![passport](https://img.shields.io/badge/PASSPORT-black?style=for-the-badge&logo=passport)
  ![node](https://img.shields.io/badge/nodejs-forestgreen?style=for-the-badge&logo=nodedotjs&logoColor=black)
# Argometrics
Argometrics is an open source product that allows users to visualize the health of their local Kubernetes clusters. With Prometheus and Grafana scraping and displaying metrics from our cluster, our application visualizes key metrics such as pod and container health, prometheus health, and performance and usage from the cluster in real time. Argometrics allows users to change between clusters at the click of a button, making it easy to monitor all clusters in one location.

![landingPage](./public/landingPage.gif)
![addingClusters](./public/addingClusters.gif)
![apiServer](./public/apiServer.gif)
![kubeStateMetrics](./public/kubeStateMetrics.gif)
![nodeExporter](./public/nodeExporter.gif)

# Prerequisites
- Our application works with local kubernetes clusters. Be sure to have a local cluster configured with some type of Kuberenetes implementation (Docker Desktop recommended)

- Install helm
    - You can install on brew using `brew install helm`.

# Set-Up
- `helm install prometheus prometheus-community/kube-prometheus-stack`.
    - This command deploys Prometheus and Grafana on your local cluster.

- `kubectl patch ds prometheus-prometheus-node-exporter --type "json" -p '[{"op": "remove", "path" : "/spec/template/spec/containers/0/volumeMounts/2/mountPropagation"}]'`
    - This command is for users running on Docker Desktop.

# Porting Forward
- `kubectl port-forward -n default {prometheus podname} {port}`
    - ex: `kubectl port-forward -n default prometheus-prometheus-kube-prometheus-prometheus-0 9090`
- `kubectl port-forward -n default {grafana podname} {port}`
    - ex: `kubectl port-forward -n default prometheus-grafana-85978cf69c-29dw9 3000`

# How To Change Grafana Settings Via Grafana Config
- `kubectl get deployment`
    - Find the deployment associated with Prometheus and Grafana

- `kubectl edit configmap {deployment}`
    - Opens up vi file of Prometheus/Grafana configmap
    - add this code under grafana.ini
         ```
        [security]
        allow_embedding: true
        [auth.anonymous]
        enabled: true
        ```
        * HELPFUL VI COMMANDS
            - `i` -> To edit the file ( you will see 'INSERT' at bottom )
            - `ESC` -> Escape edit mode back to command mode
            - Common commands in command mode
                - `:wq` -> Write quit ( when you make an update )
                - `:q!` -> Force quit without saving changes
    - Restart docker desktop or whatever virtualization software is being used
    - Forward your ports again and the changes to grafana.ini should be reflected in settings tab

# Adding Dashboards
- Port forward your grafana pod and open up the dashboards page
    - There should be an option to import dashboards on the righthand side.
    - Inside of the dashboardJson folder in our application, we have precofigured graphs. Simply copy paste into the import.
 
# Useful Helm AND K8 Commands
- `helm list`
- `helm repo list`
- `kubectl --namespace default get pods -l "release=prometheus"`
- `kubectl get secret --namespace {namespace} {podname} -o jsonpath="{.data.admin-password}" | base64 --decode ; echo`

# Launching the app
- To launch Argometrics
  - Create a .env file in the root directory with the following variables
     - `ATLAS_URI = {your MongoDB URI}`
     - `GOOGLE_CLIENT_ID = {Google Client ID}`
     - `GOOGLE_CLIENT_SECRET = {Google Client Secret}`
  - `npm install`
  - `npm run dev`
  - `npm electron-start`

# Contributions
We are always looking for improvement and are open to feedback. If you had a feature suggestion, please fork and clone this repo and make a pull request with your new branch. 

- Fork our repo
- Clone it to your local machine
- `git checkout -b newFeatureBranch` in terminal to enter a new branch
- Add and commit your changes once the modifications have been made
- `git push origin newFeatureBranch`
- Make a pull request from the newFeatureBranch

# Potential Features for Iteration
- Built in CLI
- KEDA integration with our application
- Cloud cluster compatibility
- Setting up ingress to stabilize the cluster connection

We originally planned to deploy our application with KEDA and give the user the ability to choose metrics to scale by. Our command line interface would allow the user to add loads to their cluster and the user could test how their cluster health performed under different environments and different scaled objects. Additionally, port-forwarding is currently being used to make our cluster available to our application. We did not know at the time but this causes many instability issues. Moving forward, either making our application compatible with cloud clusters and/or using an ingress instead of porting forward to connect the cluster with our application are things to consider when iterating.

# Authors

- Ryan Sun - [Github](https://github.com/ryansun222) | [LinkedIn](https://www.linkedin.com/in/ryansun792/)
- Taylor Ball - [Github](https://github.com/tb1121) | [LinkedIn](https://www.linkedin.com/in/taylorball5/)
- Joey Schwartz - [Github](https://github.com/joeyschwartz) | [LinkedIn](linkedin.com/in/joey-schwartz-7605621a7)
- Alex Yam - [Github](https://github.com/alexyam0) | [LinkedIn](https://www.linkedin.com/in/alex-yam/)
- Jake Crawford - [Github](https://github.com/jake-up-0517) | [LinkedIn](https://www.linkedin.com/in/jakecrawford512/)


# Technologies Icon Reference
Technology icons by <a target="_blank" href="https://shields.io">shields.io</a>
