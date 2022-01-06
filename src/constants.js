const constant = {
  defaultSiteUrl: "https://geniusapc.com",

  personalInfo: {
    name: "Prince Arthur",
    username: "Geniusapc",
    location: "Lagos, Nigeria",
    socailLinks: [
      {
        id: 1,
        icon: ["fab", "linkedin"],
        name: "LinkedIn",
        socailLink:true,
        link: "https://linkedin.com/in/geniusapc",
      },
      {
        id: 2,
        icon: ["fab", "github-square"],
        name: "Github",
        socailLink:false,
        link: "https://github.com/geniusapc",
      },
      {
        id: 3,
        icon: ["fab", "twitter"],
        name: "Twitter",
        socailLink:true,
        link: "https://twitter.com/geniusapc",
      },
      {
        id: 4,
        icon: ["fab", "facebook-square"],
        name: "Facebook",
        socailLink:true,
        link: "https://facebook.com/youngenius1",
      },
    ],

    role:"FullStack Developer", 

    aboutMe: `Geniusapc is a fullstack developer with hands-on 
              experience building web applications that is secured, 
              scalable and high performing. He is also an ethical hacking and 
              networking enthusiast`,

    hobby:[
      "Playing Chess",
      "Swimming"
    ]
  },
};

export default constant;
