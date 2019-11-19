// export const selectSites = (sites, attrs) => {
//   debugger
//   sites.filter(site => {
    
//     attrs.every(attr => site.siteFeatures[attr])
//     debugger
//   })
// }
export const selectSites = (sites, attrs) => {
  let siteFeatures = [];

  sites.map(site => {
    siteFeatures.push(site.siteFeatures)
  })


  debugger

  return siteFeatures;
}

export const selectSiteReviews = (sites, userId) => {
  // reviews = []
  // sites.forEach(site => (
  //   site.reviews.forEach(review => (
  //     review.author === userId ? reviews.push(review)
  //   ))
  // ))
}