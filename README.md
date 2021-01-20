# Benchmark
 
2021.01.20-15:28:37.055 info  [caliper] [default-observer]      [readAsset Round 0 Transaction Info] - Submitted: 0 Succ: 0 Fail:0 Unfinished:0
2021.01.20-15:28:37.061 info  [caliper] [report-builder]        ### Test result ###
2021.01.20-15:28:37.090 info  [caliper] [report-builder] 
+-----------+------+------+-----------------+-----------------+-----------------+-----------------+------------------+
| Name      | Succ | Fail | Send Rate (TPS) | Max Latency (s) | Min Latency (s) | Avg Latency (s) | Throughput (TPS) |
|-----------|------|------|-----------------|-----------------|-----------------|-----------------|------------------|
| readAsset | 4282 | 0    | 144.7           | 0.09            | 0.01            | 0.02            | 144.6            |
+-----------+------+------+-----------------+-----------------+-----------------+-----------------+------------------+

2021.01.20-15:28:37.093 info  [caliper] [round-orchestrator]    Finished round 1 (readAsset) in 30.106 seconds
2021.01.20-15:28:37.094 info  [caliper] [monitor.js]    Stopping all monitors
2021.01.20-15:28:37.094 info  [caliper] [report-builder]        ### All test results ###
2021.01.20-15:28:37.095 info  [caliper] [report-builder] 
+-----------+------+------+-----------------+-----------------+-----------------+-----------------+------------------+
| Name      | Succ | Fail | Send Rate (TPS) | Max Latency (s) | Min Latency (s) | Avg Latency (s) | Throughput (TPS) |
|-----------|------|------|-----------------|-----------------|-----------------|-----------------|------------------|
| readAsset | 4282 | 0    | 144.7           | 0.09            | 0.01            | 0.02            | 144.6            |
+-----------+------+------+-----------------+-----------------+-----------------+-----------------+------------------+

2021.01.20-15:28:37.109 info  [caliper] [report-builder]        Generated report with path /home/gopal/workspace/newcalliper/caliper-workspace/report.html
2021.01.20-15:28:37.109 info  [caliper] [monitor.js]    Stopping all monitors
2021.01.20-15:28:37.110 info  [caliper] [worker-orchestrator]   Sending exit message to connected workers
2021.01.20-15:28:37.110 info  [caliper] [round-orchestrator]    Benchmark finished in 89.415 seconds. Total rounds: 1. Successful rounds: 1. Failed rounds: 0.
2021.01.20-15:28:37.111 info  [caliper] [caliper-engine]        Skipping end command due to benchmark flow conditioning
2021.01.20-15:28:37.111 info  [caliper] [worker-message-handler]        Worker#1 is exiting
2021.01.20-15:28:37.111 info  [caliper] [worker-message-handler]        Worker#0 is exiting
2021.01.20-15:28:37.111 info  [caliper] [cli-launch-manager]    Benchmark successfully finished
gopal@gopal:~/workspace/newcalliper/caliper-workspace$ 
