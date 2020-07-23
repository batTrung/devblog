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

export function generateAvatar(value) {
  value = value.toString()
  return value.split(' ').map((str) => { return str ? str[0].toUpperCase() : "" }).join('')
}

export function generateColor(value) {
  value = value.toString()
  const color_array = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark']
  let color_index = color_array % value.length
  let color_user = color_array[color_index]

  return color_user
}
