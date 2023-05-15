export type Cluster = {
    // id of user
    userId: string,
    // name of cluster
    clusterName: string,
    // grafana host url
                // ex output: "http://localhost:3000/"
    url: string,
    // 
    dashboards: DashboardUIds
}


export type DashboardUIds = {
  // these are the dashboards on our grafana local host that have been imported from grafana
  apiServerUId: {
    dashboardUIDKey: string,
    grafanaLinkDText: string
  },
  kubeStateMetricUId: {
    dashboardUIDKey: string,
    grafanaLinkDText: string
  },
  kubePrometheusUId: {
    dashboardUIDKey: string,
    grafanaLinkDText: string
  },
  nodeExporterUId: {
    dashboardUIDKey: string,
    grafanaLinkDText: string
  },
}

export type DBUIds = {
  // here is where we will save each dashboard UID ex: wAfgtlsOl
  apiServerUId?: string,
  kubeStateMetricUId?: string,
  kubePrometheusUId?: string,
  nodeExporterUId?: string,
};
// example of what link should be generated for each iframe
//<iframe src="http://localhost:3000/
//             d-solo/               -> single panel only
//             wAfgtlsOl/            -> dbUId
//             kubestatemetrics?     -> dashboard name ( in grafana local host)
//             orgId=1&              -> org id = 1 (only 1 org set up in grafana)
//             from=now-1h
//             to=now
//             panelId=4" width="450" height="200" ></iframe>