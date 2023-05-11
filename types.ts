export type Cluster = {
    // id of user
    userId: string,
    // name of cluster
    clusterName: string,
    // url associated with the cluster
        // you can find this url using your cli
            // "kubectl cluster-info"
                // ex output: "Kubernetes control plane is running at https://127.0.0.1:6443"
    url: string,
    // 
    dashboards: string
}

