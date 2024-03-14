document.getElementById('detectMotionBtn').addEventListener('click', () => {
    startMotionDetection();
});

function startMotionDetection() {
    if(window.DeviceMotionEvent){ // Only use when device is in motion
        alert("Device motion detected")
        window.addEventListener('devicemotion', handleMotion);
      }else{
        alert("DeviceMotionEvent is not supported");
      }
}

function handleMotion(event) {
    //navigator.geolocation.getCurrentPosition(showPosition); //Does not update in interval
    const outputDiv = document.getElementById('acceleration');
    outputDiv.innerHTML = `${event.accelerationIncludingGravity.x} m/s2`; // checking the speed of x direction to check the movement
    navigator.geolocation.watchPosition(success, error, options);
}

function success(position) {
    showPosition(position);
  }
  
  function error() {
    alert("Sorry, no position available.");
  }
  
  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };

function error(err) {
    console.error(`ERROR(${err.code}): ${err.message}`);
  }


  function success(pos) {
    const crd = pos.coords;
    console.log(crd);
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `Latitude: ${latitude}, Longitude: ${longitude}`;
  }