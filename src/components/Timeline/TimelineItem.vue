<template>
  <div
    :style="{ 'width': itemWidth + 'px' }"
  >
    <div
      class="bubble"
      :class="{ 'nodata': item.image_count === 0, 'selected': selectedDate === item.date }"
    />
    <p
      class="bubble-label"
      :class="[`label__${position}`]"
    >
      {{ item.label }}
      {{ position }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: 'top',
      validator (position) {
        return ['top', 'bottom'].indexOf(position) > -1
      }
    },
    item: {
      type: Object,
      default: () => ({})
    },
    itemWidth: {
      type: Number,
      default: 100
    }
  }
}
</script>

<style scoped>
.bubble-label{
  color: darkcyan;
}
.label__top {
  top: 0;
}
.label__bottom {
  bottom: 0;
}
.bubble {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: transform .1s;
  background-color: white;
  border: 3px solid darkcyan;
}
.timeline-bubble:hover {
  -ms-transform: scale(1.3); /* IE 9 */
  -webkit-transform: scale(1.3); /* Safari 3-8 */
  transform: scale(1.3);
  cursor: pointer;
  transition: transform .1s;
}
</style>
