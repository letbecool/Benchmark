// async cleanupWorkloadModule() {
//     for (let i=0; i<this.roundArguments.assets; i++) {
//         const assetID = `${this.workerIndex}_${i}`;
//         console.log(`Worker ${this.workerIndex}: Deleting asset ${assetID}`);
//         const request = {
//             contractId: this.roundArguments.contractId,
//             contractFunction: 'DeleteAsset',
//             invokerIdentity: 'User1',
//             contractArguments: [assetID],
//             readOnly: false
//         };

//         await this.sutAdapter.sendRequests(request);
//     }
// }