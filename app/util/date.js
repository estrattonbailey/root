import format from 'date-fns/distance_in_words'

export default date => {
  date = format(new Date(date), new Date())
  return date.substr(0, 1).toUpperCase() + date.substr(1) + ' ago'
}
