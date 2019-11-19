export const selectSites = (sites, attrs) => {
  return sites.filter(site => (
    attrs.every(site.siteFeatures[attr])
  ))
}