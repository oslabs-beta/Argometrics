# Argometrics

# README

SET-UP
-------
port prometheus forward to 9090
port grafana forward to 9091
backend server is on port 3000

useful helm & K8 commands
--------------------------
    - helm list
    - helm repo list
    - kubectl --namespace default get pods -l "release=prometheus"
    - kubectl get secret --namespace {namespace} {podname} -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
    - kubectl port-forward -n default prometheus-prometheus-kube-prometheus-prometheus-0 9090
        - kubectl port-forward -n default {prometheus podname} 
    - kubectl port-forward -n default prometheus-grafana-85978cf69c-dxrqf 9091
        - kubectl port-forward -n default {grafana podname} 

//removed from start: 