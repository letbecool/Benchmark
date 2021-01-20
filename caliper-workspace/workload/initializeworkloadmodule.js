// async initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext) {
//     await super.initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext);

//     for (let i=0; i<this.roundArguments.assets; i++) {
//         const assetID = `${this.workerIndex}_${i}`;
//         console.log(`Worker ${this.workerIndex}: Creating asset ${assetID}`);
//         const request = {
//             contractId: this.roundArguments.contractId,
//             contractFunction: 'CreateAsset',
//             invokerIdentity: 'User1',
//             contractArguments: [assetID,'blue','20','penguin','500'],
//             readOnly: false
//         };

//         await this.sutAdapter.sendRequests(request);
//     }
// }