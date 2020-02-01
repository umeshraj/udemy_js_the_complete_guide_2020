class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    locateUserBtn.addEventListener("click", this.locateUserHandler);
    addressForm.addEventListener("submit", this.findAddressHandler);
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert("Location feature is not available. Manually enter address");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      successResult => {
        const coordinates = {
          lat: successResult.coords.latitude + Math.random() * 50,
          lng: successResult.coords.longitude + Math.random() * 50
        };
        console.log(coordinates);
      },
      error => {
        alert("Could not locate you. Manually enter address");
      }
    );
  }

  findAddressHandler() {}
}

new PlaceFinder();
