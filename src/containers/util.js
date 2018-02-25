export function getBlogTypeString (post) {
  if (post.type === 'patient_stories') { return 'Patient Stories' } else if (post.type === 'treatment_description') { return '' }
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

export function getBlogLink (post) {
  if (post.type === 'patient_stories') { return `/patientstories/post/${post.slug}/` }
  else if (post.type === 'treatment_description') { return `/treatments/treatment/${post.slug}/` }
  return `/blog/post/${post.slug}/`
}

export function getBlogImage (post) {
  // console.log(`GET BLOG IMAGE :: image  ::  ${post.image}`)
  if (post.image !== null && post.image !== undefined) { return post.image.url }
  return ''
}
