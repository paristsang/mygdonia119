var map;
var markerLayer = L.layerGroup();
var waypoints = [];
var userLocationMarker; // Holds the user's location marker

	
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map
    map = L.map('map', {
        minZoom: 2,
        maxZoom: 18
    }).setView([52.22977, 21.01178], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    markerLayer.addTo(map);

    // Load predefined waypoints
    const predefinedWaypoints = [
        
    {
        name: "ΜΝ1",
        lat: 40.720996,
        lon: 23.098996,
        description: "MN1-Κωδ. ΙΓΜΕ: 74315, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: SUR",
		photo: "img/as1.png", // Replace with actual photo path,
		datapoints: [
  {x:50, y:7},
  {x:60, y:8},
  {x:70, y:8},
  {x:80, y:9},
  {x:90, y:9},
  {x:100, y:9},
  {x:110, y:10},
  {x:120, y:11},
  {x:130, y:14},
  {x:140, y:14},
  {x:150, y:15}
]
		
    },
    {
        name: "10/Γ5",
        lat: 40.708614,
        lon: 23.043560,
        description: "10-Γ5 - Κωδ. ΙΓΜΕ: 74001, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: IRR"
		
    },
    {
        name: "M144B",
        lat: 40.650511,
        lon: 23.210689,
        description: "Μ144Β - Κωδ. ΙΓΜΕ: 74201, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: IRR"
    },
    {
        name: "Μ51",
        lat: 40.650000,
        lon: 23.246001,
        description: "Μ51 - Κωδ. ΙΓΜΕ: 74313, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: IRR"
    },
    {
        name: "Μ66Ν",
        lat: 40.660319,
        lon: 23.242514,
        description: "Μ66Ν - Κωδ. ΙΓΜΕ: 74004, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: SUR"
    },
    {
        name: "Μ188Α",
        lat: 40.655660,
        lon: 23.312948,
        description: "Μ188Α - Κωδ. ΙΓΜΕ: 112030, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΒΟΛΒΗΣ, Τύπος Χρήσης Νερού: SUR"
    },
    {
        name: "Μ159Α",
        lat: 40.665664,
        lon: 23.126928,
        description: "Μ159Α - Κωδ. ΙΓΜΕ: 116021, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: IRR"
    },
    {
        name: "Μ120",
        lat: 40.706997,
        lon: 23.180002,
        description: "Μ120 - Κωδ. ΙΓΜΕ: 74310, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: IRR"
    },
    {
        name: "Μ57Β",
        lat: 40.676996,
        lon: 23.231995,
        description: "Μ57Β - Κωδ. ΙΓΜΕ: 74314, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: IRR"
    },
    {
        name: "Μ19Γ",
        lat: 40.777126,
        lon: 23.038549,
        description: "Μ19Γ - Κωδ. ΙΓΜΕ: 51037, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: IRR"
    },
    {
        name: "Μ20Β",
        lat: 40.782733,
        lon: 23.010191,
        description: "Μ20Β - Κωδ. ΙΓΜΕ: 50104, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: IRR"
    },
    {
        name: "KOP1",
        lat: 40.714106,
        lon: 23.099208,
        description: "ΚΟΡ1 - Κωδ. ΙΓΜΕ: 116023, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: IRR"
    },
    {
        name: "M193",
        lat: 40.668848,
        lon: 23.342236,
        description: "Μ193 - Κωδ. ΙΓΜΕ: 75004, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΒΟΛΒΗΣ, Τύπος Χρήσης Νερού: IRR"
    },
    {
        name: "M180",
        lat: 40.681747,
        lon: 23.348287,
        description: "Μ180 - Κωδ. ΙΓΜΕ: 75009, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΒΟΛΒΗΣ, Τύπος Χρήσης Νερού: IRR"
    },
    {
        name: "AS1",
        lat: 40.801669,
        lon: 23.019761,
        description: "ΑS1 - Κωδ. ΙΓΜΕ: 187006, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: IRR"
    },

        // Add the rest of the waypoints as necessary
    ];

    predefinedWaypoints.forEach(wp => {
        addWaypointFromData(wp.lat, wp.lon, wp.description, wp.name);
    });

    // Watch for user location changes
    map.locate({ setView: true, maxZoom: 16, watch: true });

    // Map click event to add a marker
    map.on('click', function(e) {
        updateCoordinates(e.latlng);
        addClickLocationMarker(e.latlng);
    });

    // Handle location found events
    map.on('locationfound', function(e) {
        updateCoordinates(e.latlng, e.accuracy);
        updateUserLocationMarker(e.latlng);
    });

    // Add custom location control button
    map.addControl(new customControl());
	
	
	
});
	// Variable to store the currently selected waypoint for more details

// Load predefined waypoints
const predefinedWaypoints = [
 {
        name: "ΜΝ1",
        lat: 40.720996,
        lon: 23.098996,
        description: "MN1-Κωδ. ΙΓΜΕ: 74315, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: SUR",
		photo: "img/as1.png", // Replace with actual photo path,
		xArray: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
        yArray: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
    },
    {
        name: "10/Γ5",
        lat: 40.708614,
        lon: 23.043560,
        description: "10-Γ5 - Κωδ. ΙΓΜΕ: 74001, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: IRR"
    },
    {
        name: "M144B",
        lat: 40.650511,
        lon: 23.210689,
        description: "Μ144Β - Κωδ. ΙΓΜΕ: 74201, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: IRR"
    },
    {
        name: "Μ51",
        lat: 40.650000,
        lon: 23.246001,
        description: "Μ51 - Κωδ. ΙΓΜΕ: 74313, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: IRR"
    },
    {
        name: "Μ66Ν",
        lat: 40.660319,
        lon: 23.242514,
        description: "Μ66Ν - Κωδ. ΙΓΜΕ: 74004, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: SUR"
    },
    {
        name: "Μ188Α",
        lat: 40.655660,
        lon: 23.312948,
        description: "Μ188Α - Κωδ. ΙΓΜΕ: 112030, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΒΟΛΒΗΣ, Τύπος Χρήσης Νερού: SUR"
    },
    {
        name: "Μ159Α",
        lat: 40.665664,
        lon: 23.126928,
        description: "Μ159Α - Κωδ. ΙΓΜΕ: 116021, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: IRR"
    },
    {
        name: "Μ120",
        lat: 40.706997,
        lon: 23.180002,
        description: "Μ120 - Κωδ. ΙΓΜΕ: 74310, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: IRR"
    },
    {
        name: "Μ57Β",
        lat: 40.676996,
        lon: 23.231995,
        description: "Μ57Β - Κωδ. ΙΓΜΕ: 74314, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: IRR"
    },
    {
        name: "Μ19Γ",
        lat: 40.777126,
        lon: 23.038549,
        description: "Μ19Γ - Κωδ. ΙΓΜΕ: 51037, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: IRR"
    },
    {
        name: "Μ20Β",
        lat: 40.782733,
        lon: 23.010191,
        description: "Μ20Β - Κωδ. ΙΓΜΕ: 50104, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: IRR"
    },
    {
        name: "KOP1",
        lat: 40.714106,
        lon: 23.099208,
        description: "ΚΟΡ1 - Κωδ. ΙΓΜΕ: 116023, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: IRR"
    },
    {
        name: "M193",
        lat: 40.668848,
        lon: 23.342236,
        description: "Μ193 - Κωδ. ΙΓΜΕ: 75004, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΒΟΛΒΗΣ, Τύπος Χρήσης Νερού: IRR"
    },
    {
        name: "M180",
        lat: 40.681747,
        lon: 23.348287,
        description: "Μ180 - Κωδ. ΙΓΜΕ: 75009, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΒΟΛΒΗΣ, Τύπος Χρήσης Νερού: IRR"
    },
    {
        name: "AS1",
        lat: 40.801669,
        lon: 23.019761,
        description: "ΑS1 - Κωδ. ΙΓΜΕ: 187006, Υδροφόρο Σύστημα: ΥΠΟΣΥΣΤΗΜΑ ΚΟΡΩΝΕΙΑΣ, Τύπος Χρήσης Νερού: IRR",
		photo: "img/as1.png" // Replace with actual photo path
    },
    // Add more waypoints as needed...
];


// Populate the dropdown list with waypoints
document.addEventListener('DOMContentLoaded', function() {
    const waypointSelect = document.getElementById('waypointSelect');
    predefinedWaypoints.forEach((wp, index) => {
        const option = document.createElement('option');
        option.value = index; // Use index as value for easier referencing
        option.textContent = wp.name;
        waypointSelect.appendChild(option);
    });
});

// Populate the form fields when a waypoint is selected
function populateForm() {
    const selectedIndex = document.getElementById('waypointSelect').value;
    if (selectedIndex !== "") {
        const selectedWaypoint = predefinedWaypoints[selectedIndex];
        document.getElementById('latitude').value = selectedWaypoint.lat;
        document.getElementById('longitude').value = selectedWaypoint.lon;
        document.getElementById('description').value = selectedWaypoint.description;
		// Populate the new text areas for xArray and yArray
        document.getElementById('xArrayDisplay').value = selectedWaypoint.xArray.join(', ');
        document.getElementById('yArrayDisplay').value = selectedWaypoint.yArray.join(', ');
    } else {
        // Clear the form if no waypoint is selected
        document.getElementById('latitude').value = "";
        document.getElementById('longitude').value = "";
        document.getElementById('description').value = "";
    }
}

function focusOnWaypoint() {
    const selectedIndex = document.getElementById('waypointSelect').value;
    if (selectedIndex !== "") {
        const selectedWaypoint = predefinedWaypoints[selectedIndex];
        map.setView([selectedWaypoint.lat, selectedWaypoint.lon], 16); // Adjust the zoom level as needed
    } else {
        alert("Please select a waypoint to focus on.");
    }
}
function photoWaypoint() {
    const selectedIndex = document.getElementById('waypointSelect').value;
    const photoContainer = document.getElementById('photoContainer');
    const waypointPhoto = document.getElementById('waypointPhoto');

    if (selectedIndex !== "") {
        const selectedWaypoint = predefinedWaypoints[selectedIndex];
        if (selectedWaypoint.photo) {
            waypointPhoto.src = selectedWaypoint.photo;
            photoContainer.style.display = 'block';
        } else {
            alert("No photo available for the selected waypoint.");
            photoContainer.style.display = 'none';
        }
    } else {
        alert("Please select a waypoint to view its photo.");
        photoContainer.style.display = 'none';
    }
}
// Example function for recording a new waypoint
function addWaypoint() {
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    const description = document.getElementById('description').value;

    if (!lat || !lon || !description) {
        alert('Please ensure all fields are filled.');
        return;
    }

    // Logic for adding the waypoint to your map or marker list
    console.log(`Recorded waypoint at ${lat}, ${lon} with description: ${description}`);
}

// Function to create or update the chart for the selected waypoint

function chartWaypoint() {
    const waypointSelect = document.getElementById('waypointSelect').value;
    const selectedWaypoint = predefinedWaypoints.find(wp => wp.name === waypointSelect.value);

    if (!selectedWaypoint) {
        alert('Please select a waypoint to view its chart.');
        return;
    }

    if (!selectedWaypoint.xArray || !selectedWaypoint.yArray) {
        alert('No data available for the selected waypoint.');
        return;
    }

    // Define the data for Plotly
    const data = [{
        x: selectedWaypoint.xArray,
        y: selectedWaypoint.yArray,
        mode: 'markers',
        marker: {
            color: 'rgb(0, 0, 255)',
            size: 8
        }
    }];

    // Define the layout for the chart
    const layout = {
        title: `Data Plot for ${selectedWaypoint.name}`,
        xaxis: {
            title: 'X Axis',
            range: [Math.min(...selectedWaypoint.xArray) - 10, Math.max(...selectedWaypoint.xArray) + 10]
        },
        yaxis: {
            title: 'Y Axis',
            range: [Math.min(...selectedWaypoint.yArray) - 5, Math.max(...selectedWaypoint.yArray) + 5]
        }
    };

    // Render the chart using Plotly
    Plotly.newPlot('myPlot', data, layout);
}



// Example: Initialize the map and add waypoints (you already have this part)
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map and set up other necessary functionalities...
});

function updateCoordinates(latlng, accuracy = null) {
    document.getElementById('latitude').value = latlng.lat.toFixed(5);
    document.getElementById('longitude').value = latlng.lng.toFixed(5);
    if (accuracy !== null) {
        document.getElementById('accuracy').value = accuracy.toFixed(2);
    }
    fetchElevation(latlng.lat, latlng.lng);
}

function fetchElevation(lat, lng) {
    fetch(`https://api.open-elevation.com/api/v1/lookup?locations=${lat},${lng}`)
        .then(response => response.json())
        .then(data => {
            const elevation = data.results[0].elevation;
            document.getElementById('elevation').value = elevation.toFixed(2);
        })
        .catch(error => {
            console.error('Error fetching elevation:', error);
        });
}

function updateUserLocationMarker(latlng) {
    if (userLocationMarker) {
        map.removeLayer(userLocationMarker); // Remove the previous marker if it exists
    }
    userLocationMarker = L.circle(latlng, {
        color: 'blue',
        fillColor: '#30f',
        fillOpacity: 0.5,
        radius: 5
    }).addTo(map);
}

function addClickLocationMarker(latlng) {
    var marker = L.marker([latlng.lat, latlng.lng]).addTo(markerLayer);
    marker.bindPopup("Coordinates: " + latlng.lat.toFixed(5) + ", " + latlng.lng.toFixed(5)).openPopup();
}

function addWaypoint() {
    var lat = document.getElementById('latitude').value;
    var lng = document.getElementById('longitude').value;
    var description = document.getElementById('description').value;

    if (!lat || !lng || !description) {
        alert('Please ensure all fields are filled and a location is selected on the map.');
        return;
    }

    var marker = L.marker([parseFloat(lat), parseFloat(lng)]).addTo(markerLayer);
    marker.bindPopup(description).openPopup();
    waypoints.push({ latitude: lat, longitude: lng, description: description });
    document.getElementById('description').value = ''; // Clear the textarea after submitting
}

function downloadWaypoints() {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(waypoints));
    var dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "waypoints.json");
    dlAnchorElem.click();
}

function uploadWaypoints() {
    var fileInput = document.getElementById('uploadJson');
    var file = fileInput.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (event) {
            try {
                var uploadedWaypoints = JSON.parse(event.target.result);
                uploadedWaypoints.forEach(function(wp) {
                    addWaypointFromData(wp.latitude, wp.longitude, wp.description);
                });
            } catch (e) {
                alert('Error parsing JSON!');
            }
        };
        reader.readAsText(file);
    } else {
        alert('Please select a file to upload.');
    }
}

function addWaypointFromData(lat, lng, description) {
    var marker = L.marker([parseFloat(lat), parseFloat(lng)]).addTo(markerLayer);
    marker.bindPopup(description).openPopup();
    waypoints.push({ latitude: lat, longitude: lng, description: description });
}

function getCurrentPosition() {
    map.locate({setView: true, maxZoom: 8});
}

var cameraEnabled = false;
var localStream = null;

document.getElementById('toggleCamera').addEventListener('click', function() {
    if (!cameraEnabled) {
        enableCamera();
    } else {
        disableCamera();
    }
});

function enableCamera() {
    var video = document.getElementById('video');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: { exact: "environment" }
            }
        })
        .then(function(stream) {
            video.srcObject = stream;
            localStream = stream;
            video.style.display = 'block';
            document.getElementById('capturePhoto').style.display = 'inline';
            document.getElementById('toggleCamera').textContent = 'Disable Camera';
            cameraEnabled = true;
        })
        .catch(function(error) {
            console.log("Something went wrong when accessing the camera!", error);
        });
    }
}


function disableCamera() {
    if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
    }
    var video = document.getElementById('video');
    video.style.display = 'none';
    document.getElementById('capturePhoto').style.display = 'none';
    document.getElementById('toggleCamera').textContent = 'Enable Camera';
    cameraEnabled = false;
}

function capturePhoto() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var video = document.getElementById('video');
    context.drawImage(video, 0, 0, 320, 240);
    document.getElementById('savePhotoButton').style.display = 'inline';
}

function savePhoto() {
    var canvas = document.getElementById('canvas');
    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    var lat = document.getElementById('latitude').value;
    var lng = document.getElementById('longitude').value;
    var description = "Photo taken at: " + lat + ", " + lng;

    var marker = L.marker([parseFloat(lat), parseFloat(lng)]).addTo(markerLayer);
    marker.bindPopup("<img src='" + image + "' style='width:200px;'>").openPopup();
    waypoints.push({ latitude: lat, longitude: lng, description: description, image: image });
    document.getElementById('savePhotoButton').style.display = 'none';
}

// Sidebar functionality

const menuItems = document.querySelectorAll(".menu-item");
const sidebar = document.querySelector(".sidebar");
const buttonClose = document.querySelector(".close-button");

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const target = e.target;

    if (
      target.classList.contains("active-item") ||
      !document.querySelector(".active-sidebar")
    ) {
      document.body.classList.toggle("active-sidebar");
    }

    // show content
    showContent(target.dataset.item);
    // add active class to menu item
    addRemoveActiveItem(target, "active-item");
  });
});

// close sidebar when click on close button
buttonClose.addEventListener("click", () => {
  closeSidebar();
});

// remove active class from menu item and content
function addRemoveActiveItem(target, className) {
  const element = document.querySelector(`.${className}`);
  target.classList.add(className);
  if (!element) return;
  element.classList.remove(className);
}

// show specific content
function showContent(dataContent) {
  const idItem = document.querySelector(`#${dataContent}`);
  addRemoveActiveItem(idItem, "active-content");
}

// close when click esc
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeSidebar();
  }
});

// close sidebar when click outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".sidebar")) {
    closeSidebar();
  }
});

// close sidebar
function closeSidebar() {
  document.body.classList.remove("active-sidebar");
  const element = document.querySelector(".active-item");
  const activeContent = document.querySelector(".active-content");
  if (!element) return;
  element.classList.remove("active-item");
  activeContent.classList.remove("active-content");
}

// Custom Locate Button functionality
// Create a variable to hold the routing control
let routingControl;

// Function to get directions to the selected waypoint
function getDirectionsToWaypoint() {
    const selectedIndex = document.getElementById('waypointSelect').value;
    
    if (selectedIndex === "") {
        alert("Please select a waypoint to get directions.");
        return;
    }

    const selectedWaypoint = predefinedWaypoints[selectedIndex];

    if (userLocationMarker) {
        // Check if the routing control already exists and remove it if necessary
        if (routingControl) {
            map.removeControl(routingControl);
        }

        // Create a new routing control
        routingControl = L.Routing.control({
            waypoints: [
                userLocationMarker.getLatLng(), // Start from user's current location
                L.latLng(selectedWaypoint.lat, selectedWaypoint.lon) // End at the selected waypoint
            ],
            routeWhileDragging: true,
            createMarker: function(i, waypoint, n) {
                // Only add markers at the start and end points
                return L.marker(waypoint.latLng);
            },
            show: true,
            autoRoute: true
        }).addTo(map);
    } else {
        alert("User location not found. Ensure location tracking is enabled.");
    }
}

// Button in the sidebar to trigger getDirectionsToWaypoint()
document.querySelector('#getDirectionsButton').addEventListener('click', getDirectionsToWaypoint);


map.on('locationfound', function(e) {
    if (userLocationMarker) {
        map.removeLayer(userLocationMarker);
    }
    userLocationMarker = L.marker(e.latlng).addTo(map)
        .bindPopup('You are here')
        .openPopup();

    // Pan to the user's location
    map.setView(e.latlng, 8);
});

map.on('locationerror', function(e) {
    alert("Location access denied or unavailable.");
});

map.locate({ setView: true, maxZoom: 8 });

const customControl = L.Control.extend({
  options: {
    position: "topleft",
    className: "locate-button leaflet-bar",
    html: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>',
    style:
      "margin-top: 0; left: 0; display: flex; cursor: pointer; justify-content: center; font-size: 2rem;",
  },
  onAdd: function (map) {
    this._map = map;
    const button = L.DomUtil.create("div");
    L.DomEvent.disableClickPropagation(button);

    button.title = "locate";
    button.innerHTML = this.options.html;
    button.className = this.options.className;
    button.setAttribute("style", this.options.style);

    L.DomEvent.on(button, "click", this._clicked, this);

    return button;
  },
  _clicked: function (e) {
    L.DomEvent.stopPropagation(e);
    this._checkLocate();
    return;
  },
  _checkLocate: function () {
    return this._locateMap();
  },
  _locateMap: function () {
    const locateActive = document.querySelector(".locate-button");
    const locate = locateActive.classList.contains("locate-active");
    locateActive.classList[locate ? "remove" : "add"]("locate-active");

    if (locate) {
      this.removeLocate();
      this._map.stopLocate();
      return;
    }

    this._map.on("locationfound", this.onLocationFound, this);
    this._map.on("locationerror", this.onLocationError, this);

    this._map.locate({ setView: true, enableHighAccuracy: true });
  },
  onLocationFound: function (e) {
    this.addCircle(e).addTo(this.featureGroup()).addTo(map);
    this.addMarker(e).addTo(this.featureGroup()).addTo(map);
  },
  onLocationError: function (e) {
    this.addLegend("Location access denied.");
  },
  featureGroup: function () {
    return new L.FeatureGroup();
  },
  addLegend: function (text) {
    const checkIfDescriotnExist = document.querySelector(".description");

    if (checkIfDescriotnExist) {
      checkIfDescriotnExist.textContent = text;
      return;
    }

    const legend = L.control({ position: "bottomleft" });

    legend.onAdd = function () {
      let div = L.DomUtil.create("div", "description");
      L.DomEvent.disableClickPropagation(div);
      const textInfo = text;
      div.insertAdjacentHTML("beforeend", textInfo);
      return div;
    };
    legend.addTo(this._map);
  },
  addCircle: function ({ accuracy, latitude, longitude }) {
    return L.circle([latitude, longitude], accuracy / 2, {
      className: "circle-test",
      weight: 2,
      stroke: false,
      fillColor: "#136aec",
      fillOpacity: 0.15,
    });
  },
  addMarker: function ({ latitude, longitude }) {
    return L.marker([latitude, longitude], {
      icon: L.divIcon({
        className: "located-animation",
        iconSize: L.point(17, 17),
        popupAnchor: [0, -15],
      }),
    }).bindPopup("You are here :)");
  },
  removeLocate: function () {
    this._map.eachLayer(function (layer) {
      if (layer instanceof L.Marker) {
        const { icon } = layer.options;
        if (icon?.options.className === "located-animation") {
          map.removeLayer(layer);
        }
      }
      if (layer instanceof L.Circle) {
        if (layer.options.className === "circle-test") {
          map.removeLayer(layer);
        }
      }
    });
  },
});

map.addControl(new customControl());

