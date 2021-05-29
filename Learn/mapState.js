class vuex {
  constructor(state) {
    this.state = state
  }
  $store = this
}
// function vuex(obj) {
//   this.state = obj
//   this.$store = this
// }
const vx = new vuex({
  name: 'zs',
  age: 20,
  sex: 'male',
  o: {},
})
console.log(vx.$store.state)

/**
 *
 * @returns {Function} res
 */
function mapState(states) {
  const res = {}
  normalizeMap(states).forEach(({ key, val }) => {
    res[key] = function () {
      return this.$store.state[key]
    }
  })
  return res
}
/**
 *
 * @param {Array|Object} map states
 * @returns {Object}
 */
function normalizeMap(map) {
  return Array.isArray(map)
    ? map.map((key) => ({ key, val: key }))
    : Object.keys(map).map((key) => ({ key, val: map[key] }))
}

// console.log(normalizeMap({
//   name: 'zs',
//   age: 20,
//   sex: 'male',
//   o: {},
// }));

let res = { ...mapState(vx.$store.state) }
