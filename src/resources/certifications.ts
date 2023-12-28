const awsSkillBuilder = [
  {
    title: 'Introduction to AWS Farget',
    link: '/pdf/certificates/awsBuilder/intro_to_fargate.pdf',
  },
  {
    title: 'Introduction to Container',
    link: '/pdf/certificates/awsBuilder/intro_to_containers.pdf',
  },
  {
    title: 'AWS Cloud Practioner Essentials',
    link: '/pdf/certificates/awsBuilder/aws_cloud_practitioner.pdf',
  },
];

const udemy = [
  { title: 'IP Subnetting -  Zero to hero', link: '/pdf/certificates/udemy/ip_addressing.pdf' },
  { title: 'NGINX, Apache, SSL Encryption', link: '/pdf/certificates/udemy/nginx.pdf' },
  { title: 'Linux for cloud and devops', link: '/pdf/certificates/udemy/linux.pdf' },
];

const pluralsite = [
  {
    title: 'Node.js: The Big Picture',
    link: '/pdf/certificates/pluralsite/Node.js_The_Big_Picture.pdf',
  },
  {
    title: 'Fundamental Cloud Concepts for AWS',
    link: '/pdf/certificates/pluralsite/fundamental_Cloud_Concepts_for_AWS.pdf',
  },
  {
    title: 'Cloud: Executive Briefing',
    link: '/pdf/certificates/pluralsite/cloud_Executive_Briefing.pdf',
  },
  {
    title: 'Introduction to Security and Architecture on AWS',
    link: '/pdf/certificates/pluralsite/introduction_to_Security_and_Architecture_on.pdf',
  },
  {
    title: 'Understanding AWS Core Services',
    link: '/pdf/certificates/pluralsite/understanding_AWS_Core_Services.pdf',
  },
];

const certifications = {
  majorCert: [
    {
      title: 'Nodejs',
      imgSrc: '/img/certifications/lift-nodejs.png',
      href: 'https://www.credly.com/badges/604dc5b5-c3ef-4dcb-afd9-469374af0b4a/public_url',
    },
    {
      title: 'AWS Cloud Practitioner',
      imgSrc: '/img/certifications/aws-cp.png',
      href: 'https://www.credly.com/badges/6d196f2c-867a-4217-b531-2e46817bd90b/public_url',
    },
    {
      title: 'Cloud DevOps Engineer',
      imgSrc: '/img/certifications/aws-cp.png',
      href: 'https://confirm.udacity.com/X7Q4DDAW',
    },
  ],
  minor: [
    { provider: 'AWS Skill Builder', cert: awsSkillBuilder },
    { provider: 'Udemy', cert: udemy },
    { provider: 'Pluralsite', cert: pluralsite },
  ],
};
export default certifications;
