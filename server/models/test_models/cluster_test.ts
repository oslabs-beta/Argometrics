import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const clusterSchema = new Schema ({
    userId: { type: String, required: true },
    clusterName: { type: String, required: true },
    url: { type: String, required: true },
    dashboards: {
      apiServerUId: { type: String},
      kubeStateMetricUId: { type: String},
      kubePrometheusUId: { type: String},
      nodeExporterUId: { type: String},
      kedaUId: { type: String}
    }
});

export const Cluster_test = mongoose.model('Cluster_test', clusterSchema);