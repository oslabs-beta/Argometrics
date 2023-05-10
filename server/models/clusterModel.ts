import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const clusterSchema = new Schema ({
    userId: { type: String, required: true },
    clusterName: { type: String, required: true },
    url: { type: String, required: true },
    dashboards: {}
})

module.exports = mongoose.model('Cluster', clusterSchema);