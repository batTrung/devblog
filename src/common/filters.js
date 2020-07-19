export function truncatechars(value, num_chars) {
  if (!value) return ''
  value = value.toString()
  let is_add_dot = value.length > num_chars ? true : false
  return is_add_dot ? value.slice(0, num_chars).concat('...') : value
}

export function truncatewords(value, num_word) {
  if (!value) return ''
  value = value.toString()
  let valueList = value.trim().split(/\s+/)

  let is_add_dot = valueList.length > num_word ? true : false
  return is_add_dot ? valueList.slice(0, num_word).join(' ').concat('...') : value
}

