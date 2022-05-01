class Github {
  constructor() {
    this.client_id = "d2b317e8b2687a67231a";
    console.log(this.client_id)
    this.client_secret = "4e491a826e88706d47e1c552c8925979240cd7bd";
    console.log(this.client_secret)
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    console.log(profile.user);

    return {
      profile
    };
  }
}
