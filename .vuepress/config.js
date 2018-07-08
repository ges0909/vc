module.exports = {
  base: '/',
  title: 'Curriculum Vitae',
  description: "Gerrit Schrader",
  serviceWorker: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: '1',
        link: '/timeline-1/'
      },
      {
        text: '2',
        link: '/timeline-2/'
      },
      {
        text: '3',
        link: '/timeline-3/'
      },
      {
        text: 'About',
        link: '/about/'
      }
    ]
  },
  sidebarDepth: 1
};
