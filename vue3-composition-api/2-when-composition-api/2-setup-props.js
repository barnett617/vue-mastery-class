import { watch } from 'vue'
export default {
  props: {
    name: String
  },
  setup(props) {
    watch(() => {
      console.log(props.name)
    })
  }
}