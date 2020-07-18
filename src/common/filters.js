export function truncatechars(value, num_chars) {
  if (!value) return ''
  value = value.toString()
  let is_add_dot = value.length > num_chars ? true : false
  return is_add_dot ? value.slice(0, num_chars).concat('...') : value
}
