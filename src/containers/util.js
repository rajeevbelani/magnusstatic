export function getBlogTypeString (post) {
  if (post.type === 'patient_stories') { return 'Patient Stories' }
  return 'Featured Blog'
}


export function getBlogHeading (post) {
  if (post.title !== null) { return post.title }
  return ' '
}

export function getBlogShortDescription (post) {
  if (post.content !== null) { return post.content.brief.md }
  return ' '
}

export function getBlogDescription (post) {
  if (post.content !== null) { return post.content.description.md }
  return ' '
}

export function getBlogImage (post) {
  if (post.image !== null) { return post.image.url }
  return 'https://cdn2.iconfinder.com/data/icons/office-icons/256/Post-it_Notes-128.png'
}
