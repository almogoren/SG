import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2'

export class CdkDemoAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

// Create a vpc
const vpc = new ec2.Vpc(this, 'vpc', {
maxAzs: 1,
ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/32')

})
  }
}
   // 👇 Create a SG for a web server
   const webserverSG = new ec2.SecurityGroup(this, 'web-server-sg', {
    vpc,
    allowAllOutbound: true,
    description: 'security group for a web server',
  });

  webserverSG.addIngressRule(
    ec2.Peer.anyIpv4(),
    ec2.Port.tcp(22),
    'allow SSH access from anywhere',
  );

  webserverSG.addIngressRule(
    ec2.Peer.anyIpv4(),
    ec2.Port.tcp(80),
    'allow HTTP traffic from anywhere',
  );

  webserverSG.addIngressRule(
    ec2.Peer.anyIpv4(),
    ec2.Port.tcp(443),
    'allow HTTPS traffic from anywhere',
  );

  webserverSG.addIngressRule(
    ec2.Peer.ipv4('123.123.123.123/16'),
    ec2.Port.allIcmp(),
    'allow ICMP traffic from a specific IP range',
  );
}