<template>
  <div class="hello">
    <FlockBanner position="bottom">
      This is a banner!
    </FlockBanner>
    <timeline>
      <timeline-item
        v-for="item in itemList"
        :item="item"
        :label="item.label"
        :key="item.date"
        position="top"
      />
    </timeline>
  </div>
</template>

<script>
// https://docs.google.com/spreadsheets/d/1O16kYj6jyOaiL0lQWk8JZ7C2qoQQa7GMhAFh8qFAmyM/edit?usp=sharing
// https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html
// https://vuejs.org/v2/cookbook/unit-testing-vue-components.html
// https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html
export default {
  name: 'HelloWorld',
  data () {
    return {
      itemList: [
        {
          date: '19-02-2019',
          label: '19 Nov'
        },
        {
          date: '20-02-2019',
          label: '20 Nov'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
