# SG
Security Group in AWS CDK 

We created a VPC, by configuring the Vpc class. We set the natGateways prop to 0 to avoid getting charged unnecessarily.

We created a security group for a web server within a VPC, allowing specific types of traffic to reach the web server while blocking all other traffic.
