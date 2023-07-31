# README

# Argometrics
![image info](./public/argo-logo-full.png)
![image info](./public/apiServer.gif)
![image info](./public/KubeStateMetrics.gif)
![image info](./public/nodeExporter.gif)

Argometrics is an open source product that allows users togit  visualize the health of their local kubernetes clusters. With Prometheus and Grafana scraping and displaying metrics from our cluster, our application visualizes key metrics such as pod and container health, prometheus health, and performance and usage from the cluster in real time!

# PREREQUISITE
- our application works with local kubernetes clusters. Please have a local cluster configured with some type of Kuberenetes implementation (Docker Desktop recommended)

- please install helm as well
    - you can install on brew using "brew install helm"

# SET-UP
- `helm install prometheus prometheus-community/kube-prometheus-stack`
    - this command deploys prometheus and grafana on said local cluster

- `kubectl patch ds prometheus-prometheus-node-exporter --type "json" -p '[{"op": "remove", "path" : "/spec/template/spec/containers/0/volumeMounts/2/mountPropagation"}]'`
    - this command is for users running on Docker Desktop


# USEFUL HELM AND K8 COMMANDS
- `helm list`
- `helm repo list`
- `kubectl --namespace default get pods -l "release=prometheus"`
- `kubectl get secret --namespace {namespace} {podname} -o jsonpath="{.data.admin-password}" | base64 --decode ; echo`



# PORTING FORWARD
- `kubectl port-forward -n default {prometheus podname} {port}`
    - ex: `kubectl port-forward -n default prometheus-prometheus-kube-prometheus-prometheus-0 9090`
- `kubectl port-forward -n default {grafana podname} {port}`
    - ex: `kubectl port-forward -n default prometheus-grafana-85978cf69c-29dw9 3000`

# HOW TO CHANGE GRAFANA SETTINGS VIA GRAFANA CONFIG
- use kubectl get deployment
    - find the deployment associated with prometheus and grafana

- kubectl edit configmap {deployment}
    - opens up vi file of prometheus/grafana configmap
    - add this code under grafana.ini
         ```
        [security]
        allow_embedding: true
        [auth.anonymous]
        enabled: true
        ```
        * HELPFUL VI COMMANDS
            - `i` -> to edit the file ( you will see 'INSERT' at bottom )
            - `ESC` -> escape edit mode back to command mode
            - common commands in command mode
                - `:wq` -> write quit ( when you make an update )
                - `:q!` -> force quit without saving changes
    - restart docker desktop or whatever virtualization software is being used
    - forward your ports again and the changes to grafana.ini should be reflected in settings tab

# ADDING DASHBOARDS
- port forward your grafana pod and open up the dashboards page
    - there should be an option to import dashboards
    - inside of the dashboardJson folder in our application, we have precofigured graphs to import simply copy paste into the import

# CONTRIBUTIONS
We are always looking for improvement and are welcome to feedback. If you had a feature suggestion, please fork and clone this repo and make a pull request with your new branch

- fork our repo
- clone it to your local machine
- `git checkout -b newFeatureBranch` in terminal to enter a new branch
- add and commit your changes once the modifications have been made
- `git push origin newFeatureBranch`
- make a pull request from the newFeatureBranch

# PlANNED/DESIRED FEATURES
- built in cli
- KEDA integration with our application
- cloud cluster compatibility
- setting up ingress to stabilize the cluster connection

# Authors

- Ryan Sun - [Github](https://github.com/ryansun222) | [LinkedIn](https://www.linkedin.com/in/ryansun792/)
- Taylor Ball - [Github](https://github.com/tb1121) | [LinkedIn](https://www.linkedin.com/in/taylorball5/)
- Joey Schwartz - [Github]() | [LinkedIn]()
- Alex Yam - [Github](https://github.com/alexyam0) | [LinkedIn](https://www.linkedin.com/in/alex-yam/)
- Jake Crawford - [Github](https://github.com/jake-up-0517) | [LinkedIn]()