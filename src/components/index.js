import Vue from 'vue';
import FlockBanner from './Banner.vue';
import Timeline from './Timeline/Timeline.vue';
import TimelineItem from './Timeline/TimelineItem.vue';

const Components = {
  FlockBanner,
  Timeline,
  TimelineItem
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
