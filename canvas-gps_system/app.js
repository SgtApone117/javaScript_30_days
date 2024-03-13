document.getElementById('detectMotionBtn').addEventListener('click', () => {
    startMotionDetection();
});

function startMotionDetection() {
    console.log(window.DeviceOrientationEvent);
    if(window.DeviceMotionEvent)
    {
        window.addEventListener('devicemotion', handleMotion, true);
    }
    else
    {
        alert("Not Moving");
    }
}

function handleMotion(event) {
    // Check if motion is detected (e.g., acceleration values)
    // For simplicity, let's assume motion is always detected
    // Fetch GPS data when motion is detected
    //navigator.geolocation.getCurrentPosition(showPosition);
    //console.log(event);
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