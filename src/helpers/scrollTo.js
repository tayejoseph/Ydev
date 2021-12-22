const scrollTo = (id = '', position) => {
  const dom = document.getElementById(id)
  if (dom || position) {
    window.scrollTo({ top: position || dom.offsetTop, behavior: 'smooth' })
  }
}

export default scrollTo
