import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    this.toggleButton = toggleButton
    this.toggleButton.addEventListener('click', this.handleClick.bind(this))
  }

  async handleClick(event) {
    event.preventDefault()
    console.log(this.followState)
// How can we just console.log the data-follow-state?, above prints out a lot

    if(this.followState === 'Followed') {
      this.unfollow()
    }else{
      this.follow()
    }

  }

  async follow() {
    this.followState = 'Followed'
    // this.render()
    // this.followState('Followed')
  }

  async unfollow() {
    this.followState = 'Unfollowed'
    // this.render()
    // this.followState('Unfollowed')
  }

  render() {
    console.log('render')
    // switch (this.followState) {
    //   case 'Followed':
        
    //     break
    //   case 'Unfollowed':

    //     break
    // }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}