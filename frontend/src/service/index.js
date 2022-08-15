import ip_addressing from "../assets/pdf/certificates/udemy/ip_addressing.pdf";
import linux from "../assets/pdf/certificates/udemy/linux.pdf";
import nginx from "../assets/pdf/certificates/udemy/nginx.pdf";

import cloud_Executive_Briefing from "../assets/pdf/certificates/pluralsite/Cloud_Executive_Briefing.pdf";
import fundamental_Cloud_Concepts_for_AWS from "../assets/pdf/certificates/pluralsite/Fundamental_Cloud_Concepts_for_AWS.pdf";
import introduction_to_Security_and_Architecture_on from "../assets/pdf/certificates/pluralsite/Introduction_to_Security_and_Architecture_on.pdf";
import nodejs_The_Big_Picture from "../assets/pdf/certificates/pluralsite/Node.js_The_Big_Picture.pdf";
import understanding_AWS_Core_Services from "../assets/pdf/certificates/pluralsite/Understanding_AWS_Core_Services.pdf";

import intro_to_fargate from "../assets/pdf/certificates/awsBuilder/intro_to_fargate.pdf";
import intro_to_containers from "../assets/pdf/certificates/awsBuilder/intro_to_containers.pdf";
import aws_cloud_practitioner from "../assets/pdf/certificates/awsBuilder/aws_cloud_practitioner.pdf";

import aws_cp from "../assets/img/certifications/aws-cp.png";
import lift_nodejs from "../assets/img/certifications/lift-nodejs.png";

const udemy = [
  { id: 1, name: "IP Subnetting -  Zero to hero", link: ip_addressing },
  { id: 2, name: "NGINX, Apache, SSL Encryption", link: nginx },
  { id: 4, name: "Linux for cloud and devops", link: linux },
];

const pluralsite = [
  { id: 1, name: "Node.js: The Big Picture", link: nodejs_The_Big_Picture },
  { id: 2, name: "Fundamental Cloud Concepts for AWS", link: fundamental_Cloud_Concepts_for_AWS },
  { id: 3, name: "Cloud: Executive Briefing", link: cloud_Executive_Briefing },
  {
    id: 4,
    name: "Introduction to Security and Architecture on AWS",
    link: introduction_to_Security_and_Architecture_on,
  },
  { id: 5, name: "Understanding AWS Core Services", link: understanding_AWS_Core_Services },
];

const awsBuilder = [
  { name: "Introduction to AWS Farget", link: intro_to_fargate },
  { name: "Introductio to Container", link: intro_to_containers },
  { name: "AWS Cloud Practioner Essentials", link: aws_cloud_practitioner },
];

const major = [
  {
    id: 1,
    name: "Nodejs",
    link: "https://www.credly.com/badges/604dc5b5-c3ef-4dcb-afd9-469374af0b4a/public_url",
    icon: lift_nodejs,
  },
  {
    id: 2,
    name: "AWS",
    link: "https://www.credly.com/badges/6d196f2c-867a-4217-b531-2e46817bd90b/public_url",
    icon: aws_cp,
  },
];

const stacks = [
  { name: "Javascript", icon: ["fab", "js"] },
  { name: "Nodejs", icon: ["fab", "node"] },
  { name: "Reactjs", icon: ["fab", "react"] },
  { name: "Python", icon: ["fab", "python"] },
  { name: "Linux", icon: ["fab", "linux"] },
  { name: "AWS", icon: ["fab", "aws"] },
];

const certificates = { pluralsite, udemy, awsBuilder, major };

const certOfCompletion = [
  {
    name: "Udemy",
    certificates: certificates.udemy,
  },
  {
    name: "Pluralsite",
    certificates: certificates.pluralsite,
  },
  {
    name: "AWS Skill Builder",
    certificates: certificates.awsBuilder,
  },
];

export { certificates, certOfCompletion, stacks };
