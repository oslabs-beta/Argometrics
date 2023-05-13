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
  prometheusExporterUId: {
    dashboardUIDKey: string,
    grafanaLinkDText: string
  },
}

export type DBUIds = {
  apiServerUId?: string,
  kubeStateMetricUId?: string,
  kubePrometheusUId?: string,
  nodeExporterUId?: string,
  prometheusExporterUId?: string,
}

// /d
// /e2b85478-a60a-4c29-be54-8d4ed0d950b2/
// prometheus
// ?orgId=1"