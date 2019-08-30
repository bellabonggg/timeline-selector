<template>
  <div class="timeline-wrapper">
    <h1> test </h1>
    <div class="timeline-line">
      <slot class="timeline-slot" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemPerView: {
      type: Number,
      default: 10
    },
    styles: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>
.timeline-wrapper {
  display: flex;
  flex-direction: row;
  border: 1px solid burlywood;
  padding: 20px;
}
.timeline-line {
  display: flex;
  flex-direction: row;
  position: relative;
  border: 1px solid burlywood;
  margin: 10px;
}
.timeline-line:before {
  content: '';
  position: absolute;
  top: 10px;
  border-top: 2px solid darkcyan;
  width: 100%;
  z-index: -10;
}
</style>
