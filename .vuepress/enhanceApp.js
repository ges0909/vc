import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.component('Timeline', Timeline);
  Vue.component('TimelineItem', TimelineItem);
  Vue.component('TimelineTitle', TimelineTitle);
};
