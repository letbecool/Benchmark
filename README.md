# Benchmark
 
gopal@gopal:~/workspace/newcalliper/caliper-workspace$ npx caliper launch manager --caliper-workspace ./ --caliper-networkconfig networks/networkConfig.yaml --caliper-benchconfig benchmarks/myAssetBenchmark.yaml --caliper-flow-only-test --caliper-fabric-gateway-enabled
2021.01.20-09:58:38.478 info  [caliper] [cli-launch-manager]    Set workspace path: /home/gopal/workspace/newcalliper/caliper-workspace
2021.01.20-09:58:38.480 info  [caliper] [cli-launch-manager]    Set benchmark configuration path: /home/gopal/workspace/newcalliper/caliper-workspace/benchmarks/myAssetBenchmark.yaml
2021.01.20-09:58:38.480 info  [caliper] [cli-launch-manager]    Set network configuration path: /home/gopal/workspace/newcalliper/caliper-workspace/networks/networkConfig.yaml
2021.01.20-09:58:38.481 info  [caliper] [cli-launch-manager]    Set SUT type: fabric
2021.01.20-09:58:39.023 info  [caliper] [benchmark-validator]   No observer specified, will default to `none`
2021.01.20-09:58:39.023 info  [caliper] [caliper-engine]        Starting benchmark flow
2021.01.20-09:58:43.994 info  [caliper] [fabric-connector]      Initializing gateway connector compatible with installed SDK: 2.2.3
2021.01.20-09:58:44.104 info  [caliper] [IdentityManager]       Adding User1 (admin=false) as User1 for organization Org1MSP
2021.01.20-09:58:44.106 info  [caliper] [caliper-engine]        Skipping start commands due to benchmark flow conditioning
2021.01.20-09:58:44.106 info  [caliper] [caliper-engine]        Skipping initialization phase due to benchmark flow conditioning
2021.01.20-09:58:44.106 info  [caliper] [caliper-engine]        Skipping install smart contract phase due to benchmark flow conditioning
2021.01.20-09:58:44.140 info  [caliper] [monitor.js]    No resource monitors specified
2021.01.20-09:58:44.162 info  [caliper] [default-observer]      Observer interval set to 5000 seconds
2021.01.20-09:58:44.175 info  [caliper] [round-orchestrator]    Preparing worker connections
2021.01.20-09:58:44.176 info  [caliper] [worker-orchestrator]   Launching worker 1 of 2
2021.01.20-09:58:44.185 info  [caliper] [worker-orchestrator]   Launching worker 2 of 2
2021.01.20-09:58:44.190 info  [caliper] [worker-orchestrator]   Messenger not configured, entering configure phase...
2021.01.20-09:58:44.191 info  [caliper] [worker-orchestrator]   No existing workers detected, entering worker launch phase...
2021.01.20-09:58:44.192 info  [caliper] [worker-orchestrator]   Waiting for 2 workers to be connected...
2021.01.20-09:58:44.755 info  [caliper] [cli-launch-worker]     Set workspace path: /home/gopal/workspace/newcalliper/caliper-workspace
2021.01.20-09:58:44.757 info  [caliper] [cli-launch-worker]     Set benchmark configuration path: /home/gopal/workspace/newcalliper/caliper-workspace/benchmarks/myAssetBenchmark.yaml
2021.01.20-09:58:44.757 info  [caliper] [cli-launch-worker]     Set network configuration path: /home/gopal/workspace/newcalliper/caliper-workspace/networks/networkConfig.yaml
2021.01.20-09:58:44.757 info  [caliper] [cli-launch-worker]     Set SUT type: fabric
2021.01.20-09:58:44.790 info  [caliper] [cli-launch-worker]     Set workspace path: /home/gopal/workspace/newcalliper/caliper-workspace
2021.01.20-09:58:44.792 info  [caliper] [cli-launch-worker]     Set benchmark configuration path: /home/gopal/workspace/newcalliper/caliper-workspace/benchmarks/myAssetBenchmark.yaml
2021.01.20-09:58:44.793 info  [caliper] [cli-launch-worker]     Set network configuration path: /home/gopal/workspace/newcalliper/caliper-workspace/networks/networkConfig.yaml
2021.01.20-09:58:44.793 info  [caliper] [cli-launch-worker]     Set SUT type: fabric
2021.01.20-09:58:44.908 info  [caliper] [worker-orchestrator]   2 workers connected, progressing to worker assignment phase.
2021.01.20-09:58:44.908 info  [caliper] [worker-orchestrator]   Workers currently unassigned, awaiting index assignment...
2021.01.20-09:58:44.910 info  [caliper] [worker-orchestrator]   Waiting for 2 workers to be assigned...
2021.01.20-09:58:44.965 info  [caliper] [worker-orchestrator]   2 workers assigned, progressing to worker initialization phase.
2021.01.20-09:58:44.966 info  [caliper] [worker-orchestrator]   Waiting for 2 workers to be ready...
2021.01.20-09:58:45.991 info  [caliper] [worker-orchestrator]   2 workers ready, progressing to test preparation phase.
2021.01.20-09:58:45.992 info  [caliper] [round-orchestrator]    Started round 1 (readAsset)
2021.01.20-09:58:46.026 info  [caliper] [worker-message-handler]        Initializing Worker#0...
2021.01.20-09:58:46.026 info  [caliper] [fabric-connector]      Initializing gateway connector compatible with installed SDK: 2.2.3
2021.01.20-09:58:46.026 info  [caliper] [IdentityManager]       Adding User1 (admin=false) as User1 for organization Org1MSP
2021.01.20-09:58:46.026 info  [caliper] [worker-message-handler]        Worker#0 initialized
2021.01.20-09:58:46.027 info  [caliper] [worker-message-handler]        Preparing Worker#0 for Round#0
2021.01.20-09:58:46.366 info  [caliper] [connectors/v2/FabricGateway]   Connecting user with identity User1 to a Network Gateway
2021.01.20-09:58:46.360 info  [caliper] [worker-message-handler]        Initializing Worker#1...
2021.01.20-09:58:46.360 info  [caliper] [fabric-connector]      Initializing gateway connector compatible with installed SDK: 2.2.3
2021.01.20-09:58:46.360 info  [caliper] [IdentityManager]       Adding User1 (admin=false) as User1 for organization Org1MSP
2021.01.20-09:58:46.360 info  [caliper] [worker-message-handler]        Worker#1 initialized
2021.01.20-09:58:46.360 info  [caliper] [worker-message-handler]        Preparing Worker#1 for Round#0
2021.01.20-09:58:46.376 info  [caliper] [connectors/v2/FabricGateway]   Connecting user with identity User1 to a Network Gateway
2021.01.20-09:58:46.391 info  [caliper] [connectors/v2/FabricGateway]   Successfully connected user with identity User1 to a Network Gateway
2021.01.20-09:58:46.391 info  [caliper] [connectors/v2/FabricGateway]   Successfully connected user with identity User1 to a Network Gateway
2021.01.20-09:58:46.392 info  [caliper] [connectors/v2/FabricGateway]   Generating contract map for user User1
2021.01.20-09:58:46.392 info  [caliper] [connectors/v2/FabricGateway]   Generating contract map for user User1
2021.01.20-09:58:46.506 info  [caliper] [caliper-worker]        Info: worker 1 prepare test phase for round 0 is starting...
2021.01.20-09:58:46.507 info  [caliper] [caliper-worker]        Info: worker 1 prepare test phase for round 0 is completed
2021.01.20-09:58:46.508 info  [caliper] [worker-message-handler]        Worker#1 prepared for Round#0
2021.01.20-09:58:46.516 info  [caliper] [caliper-worker]        Info: worker 0 prepare test phase for round 0 is starting...
2021.01.20-09:58:46.517 info  [caliper] [caliper-worker]        Info: worker 0 prepare test phase for round 0 is completed
2021.01.20-09:58:46.517 info  [caliper] [worker-message-handler]        Worker#0 prepared for Round#0
2021.01.20-09:58:46.518 info  [caliper] [worker-orchestrator]   2 workers prepared, progressing to test phase.
2021.01.20-09:58:46.519 info  [caliper] [round-orchestrator]    Monitors successfully started
2021.01.20-09:58:46.521 info  [caliper] [worker-message-handler]        Worker#0 is starting Round#0
2021.01.20-09:58:46.523 info  [caliper] [worker-message-handler]        Worker#1 is starting Round#0
2021.01.20-09:58:46.525 info  [caliper] [caliper-worker]        Worker #0 starting workload loop
2021.01.20-09:58:46.528 info  [caliper] [caliper-worker]        Worker #1 starting workload loop
2021.01.20-09:58:51.593 info  [caliper] [default-observer]      [readAsset Round 0 Transaction Info] - Submitted: 0 Succ: 0 Fail:0 Unfinished:0
2021.01.20-09:58:56.523 info  [caliper] [default-observer]      [readAsset Round 0 Transaction Info] - Submitted: 0 Succ: 0 Fail:0 Unfinished:0
2021.01.20-09:59:01.523 info  [caliper] [default-observer]      [readAsset Round 0 Transaction Info] - Submitted: 0 Succ: 0 Fail:0 Unfinished:0
2021.01.20-09:59:06.523 info  [caliper] [default-observer]      [readAsset Round 0 Transaction Info] - Submitted: 0 Succ: 0 Fail:0 Unfinished:0
2021.01.20-09:59:11.524 info  [caliper] [default-observer]      [readAsset Round 0 Transaction Info] - Submitted: 0 Succ: 0 Fail:0 Unfinished:0
2021.01.20-09:59:16.527 info  [caliper] [default-observer]      [readAsset Round 0 Transaction Info] - Submitted: 0 Succ: 0 Fail:0 Unfinished:0
2021.01.20-09:59:17.635 info  [caliper] [connectors/v2/FabricGateway]   disconnecting gateway for user User1
2021.01.20-09:59:17.649 info  [caliper] [worker-message-handler]        Worker#1 finished Round#0
2021.01.20-09:59:17.651 info  [caliper] [connectors/v2/FabricGateway]   disconnecting gateway for user User1
2021.01.20-09:59:17.667 info  [caliper] [worker-message-handler]        Worker#0 finished Round#0
2021.01.20-09:59:22.685 info  [caliper] [default-observer]      Resetting txCount indicator count
2021.01.20-09:59:22.688 info  [caliper] [report-builder]        ### Test result ###
2021.01.20-09:59:22.700 info  [caliper] [report-builder]
+-----------+------+------+-----------------+-----------------+------------------+-----------------+------------------+
| Name      | Succ | Fail | Send Rate (TPS) | Max Latency (s) | Min Latency (s)  | Avg Latency (s) | Throughput (TPS) |
|-----------|------|------|-----------------|-----------------|------------------|-----------------|------------------|
| readAsset | 0    | 0    | 0.0             | 0.00            | 9007199254740.99 | -               | 0.0              |
+-----------+------+------+-----------------+-----------------+------------------+-----------------+------------------+

2021.01.20-09:59:22.703 info  [caliper] [round-orchestrator]    Finished round 1 (readAsset) in 30.115 seconds
2021.01.20-09:59:22.704 info  [caliper] [monitor.js]    Stopping all monitors
2021.01.20-09:59:22.705 info  [caliper] [report-builder]        ### All test results ###
2021.01.20-09:59:22.707 info  [caliper] [report-builder]
+-----------+------+------+-----------------+-----------------+------------------+-----------------+------------------+
| Name      | Succ | Fail | Send Rate (TPS) | Max Latency (s) | Min Latency (s)  | Avg Latency (s) | Throughput (TPS) |
|-----------|------|------|-----------------|-----------------|------------------|-----------------|------------------|
| readAsset | 0    | 0    | 0.0             | 0.00            | 9007199254740.99 | -               | 0.0              |
+-----------+------+------+-----------------+-----------------+------------------+-----------------+------------------+

2021.01.20-09:59:22.802 info  [caliper] [report-builder]        Generated report with path /home/gopal/workspace/newcalliper/caliper-workspace/report.html
2021.01.20-09:59:22.803 info  [caliper] [monitor.js]    Stopping all monitors
2021.01.20-09:59:22.803 info  [caliper] [worker-orchestrator]   Sending exit message to connected workers
2021.01.20-09:59:22.805 info  [caliper] [worker-message-handler]        Worker#0 is exiting
2021.01.20-09:59:22.806 info  [caliper] [worker-message-handler]        Worker#1 is exiting
2021.01.20-09:59:22.811 info  [caliper] [round-orchestrator]    Benchmark finished in 36.82 seconds. Total rounds: 1. Successful rounds: 1. Failed rounds: 0.
2021.01.20-09:59:22.812 info  [caliper] [caliper-engine]        Skipping end command due to benchmark flow conditioning
2021.01.20-09:59:22.812 info  [caliper] [cli-launch-manager]    Benchmark successfully finished
gopal@gopal:~/workspace/newcalliper/caliper-workspace$


