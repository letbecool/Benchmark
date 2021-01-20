// async submitTransaction() {
//     const randomId = Math.floor(Math.random()*this.roundArguments.assets);
//     const myArgs = {
//         contractId: this.roundArguments.contractId,
//         contractFunction: 'ReadAsset',
//         invokerIdentity: 'User1',
//         contractArguments: [`${this.workerIndex}_${randomId}`],
//         readOnly: true
//     };

//     await this.sutAdapter.sendRequests(myArgs);
// } 
