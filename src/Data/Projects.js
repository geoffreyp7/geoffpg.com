import newyShipGuideFeatureImage from '../assets/project-gifs/nsg.png';
import datingSiteFeatureImage from '../assets/project-gifs/ads.png';
import smartHomeAutomationImage from '../assets/project-gifs/sha.png';

export default {
  projects: [
    {
      title: 'Newy Ship Guide',
      description: 'The Port of Newcastle is a shipping hot spot, with many ships coming and going everyday. '
      + ' A lot of people love to know about the ships and when they can spot one. '
      + 'Unfortunately the only way to find out was a fairly unfriendly webpage. '
      + 'So I developed a much nicer site using React (have a look for yourself). '
      + 'The site has a basic back end (running on AWS EC2) which is running a bash script to regularly source the '
      + 'latest information from the old site. The info is then displayed nicely on the front end. '
      + 'The site is served from an S3 bucket for cheap, yet highly available hosting. '
      + 'The site is responsive. ',
      technologies: [
        'React',
        'EC2',
        'S3',
      ],
      featureImage: newyShipGuideFeatureImage,
      status: 'beta',
      url: 'http://www.newyshipguide.com',
      github: 'https://github.com/geoffreyp7/shipwatch',
    },
    {
      title: 'The Worm',
      description: 'Currently in development. '
      + 'Inspired by "the worm" that sometimes makes appearances (particularly during political debates) on TV, '
      + 'this project aims to bring it to anyone, anywhere. Have you ever wondered what others are thinking of a presentation? '
      + '(maybe even your own), what about whether certain demographics like what is being said? This project aims to reveal '
      + 'all that and more. The web app is being built with an Angular front end and .Net Core on the back end. MySQL '
      + '(via Entity Framework Core) is in use as the database. The SignalR websocket library is used to provide real-time feedback. '
      + 'The first (beta) release of the app is tentatively planned around april.'
      ,
      technologies: [
        'Angular',
        'ASP.Net Core',
        'SignalR',
      ],
      featureImage: '',
      status: 'in development',
      url: '',
      github: '',
    },
    {
      title: 'Dating Site',
      description: 'Developed as part of the online course "Build an app with ASPNET Core and Angular from scratch". '
      + 'A fully functioning dating site built using Angular and .Net Core. '
      + 'Includes user authentication and messaging system. '
      ,
      technologies: [
        'Angular',
        'ASP.Net Core',
      ],
      featureImage: datingSiteFeatureImage,
      status: 'Complete',
      url: '',
      github: 'https://github.com/geoffreyp7/ASPNET_Core_Course_DatingApp',
    },
    {
      title: 'Smart Home Automation',
      description: 'Developed a prototype smart home system as a team as part of a university course. I was responsible for the development of the software running on Arduinos, A mobile app, backend, and the interfacing of the Arduinos with the App via the backend. The principle method of communication was websockets',
      technologies: [
        'Unity',
        'Websockets',
        'EC2',
        'C and Python on Arduino Yun'
      ],
      featureImage: smartHomeAutomationImage,
      status: 'Complete',
      url: '',
      github: '',
    },
  ],
};
