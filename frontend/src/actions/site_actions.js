import * as APIUtil from '../util/site_api_util'

export const RECEIVE_SITE = "RECEIVE_SITE";
export const RECEIVE_SITES = "RECEIVE_SITES";
export const RECEIVE_USER_SITES = "RECEIVE_USER_SITES";
export const RECEIVE_NEW_SITE = "RECEIVE_NEW_SITE";

export const receiveSite = site => ({
  type: RECEIVE_SITE,
  site
})

export const receiveSites = sites => ({
  type: RECEIVE_SITES,
  sites
});

export const receiveUserSites = sites => ({
  type: RECEIVE_USER_SITES,
  sites
});

export const receiveNewSite = site => ({
  type: RECEIVE_NEW_SITE,
  site
});

export const fetchSite = id => dispatch => (
  APIUtil.getSite(id)
    .then(site => dispatch(receiveSite(site)))
    .catch(err => console.log(err))
);

export const fetchSites = () => dispatch => (
  APIUtil.getSites()
    .then(sites => dispatch(receiveSites(sites)))
    .catch(err => console.log(err))
);

export const fetchUserSites = id => dispatch => (
  APIUtil.getUserSites(id)
    .then(sites => dispatch(receiveUserSites(sites)))
    .catch(err => console.log(err))
);

export const createNewSite = data => dispatch => (
  APIUtil.postNewSite(data)
    .then(site => dispatch(receiveNewSite(site)))
    .catch(err => console.log(err))
);