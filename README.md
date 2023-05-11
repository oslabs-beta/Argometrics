# Argometrics

# README

PREREQUISITE
------------

SET-UP
-------
- helm install prometheus prometheus-community/kube-prometheus-stack  

- kubectl patch ds prometheus-prometheus-node-exporter --type "json" -p '[{"op": "remove", "path" : "/spec/template/spec/containers/0/volumeMounts/2/mountPropagation"}]'

port prometheus forward to 9090
port grafana forward to 3000
backend server is on port 6000

USEFUL HELM AND K8 COMMANDS
--------------------------
- helm list
- helm repo list
- kubectl --namespace default get pods -l "release=prometheus"
- kubectl get secret --namespace {namespace} {podname} -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
- kubectl port-forward -n default prometheus-prometheus-kube-prometheus-prometheus-0 9090
    - kubectl port-forward -n default {prometheus podname} 
- kubectl port-forward -n default prometheus-grafana-85978cf69c-29dw9 3000
    - kubectl port-forward -n default {grafana podname} 



HOW TO CHANGE GRAFANA SETTINGS VIA GRAFANA CONFIG
--------------------------------------------------------
- use kubectl get deployment
    - find the deployment associated with prometheus and grafana

- kubectl edit configmap {deployment}
    - opens up vi file of prometheus/grafana configmap
    - add this code under grafana.ini
        - [security]
          allow_embedding: true
          [auth.anonymous]
          enabled: true
          [dataproxy]
          timeout: 600
            - this will allow us to embed grafana dashboards to our application via an iframe
            - iframe points to grafana instance running in our container
        * HELPFUL VI COMMANDS
            - i -> to edit the file ( you will see 'INSERT' at bottom )
            - ESC -> escape edit mode back to command mode
            - common commands in command mode
                - :wq -> write quit ( when you make an update )
                - :q! -> force quit without saving changes
    - restart docker desktop or whatever virtualization software is being used
    - forward your ports again and the changes to grafana.ini should be reflected in settings tab

