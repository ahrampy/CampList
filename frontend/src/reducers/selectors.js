export const selectSites = (sites, attrs) => {
  return sites.filter(site => (
    attrs.every(attr => site.siteFeatures[attr])
  ))
}

export const selectSiteReviews = (sites, userId) => {
  // reviews = []
  // sites.forEach(site => (
  //   site.reviews.forEach(review => (
  //     review.author === userId ? reviews.push(review)
  //   ))
  // ))
}