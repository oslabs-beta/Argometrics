# Argometrics

# README

SET-UP
-------
port prometheus forward to 9090
port grafana forward to 3000
backend server is on port 6000

useful helm & K8 commands
--------------------------
    - helm list
    - helm repo list
    - kubectl --namespace default get pods -l "release=prometheus"
    - kubectl get secret --namespace {namespace} {podname} -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
    - kubectl port-forward -n default prometheus-prometheus-kube-prometheus-prometheus-0 9090
        - kubectl port-forward -n default {prometheus podname} 
    - kubectl port-forward -n default prometheus-grafana-6649cd5967-x8qts 3000
        - kubectl port-forward -n default {grafana podname} 

kubectl patch ds prometheus-prometheus-node-exporter --type "json" -p '[{"op": "remove", "path" : "/spec/template/spec/containers/0/volumeMounts/2/mountPropagation"}]'
