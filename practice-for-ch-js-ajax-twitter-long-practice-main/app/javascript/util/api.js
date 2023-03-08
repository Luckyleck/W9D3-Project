const csrfToken = document.querySelector("meta[name=csrf-token]").content;
// export const foo = "bar";

async function customFetch(url, options = {}) {
  options.headers = {
    "X-CSRF-Token" : csrfToken,
    ...options.headers
  };

  return await fetch(url, options);
}


export function followUser(id) {

  customFetch(`/users/${id}/follow`, {
    method: "POST",
    credentials: 'include'
  })
}


export function unfollowUser(id) {


  customFetch(`/users/${id}/follow`, {
    method: "DELETE",
    credentials: 'include'

  })
}




//how are we supposed to call followState(newState) correctly?