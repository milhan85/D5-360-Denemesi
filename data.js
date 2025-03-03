var APP_DATA = {
  "scenes": [
    {
      "id": "0-salon",
      "name": "Salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 717,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9037144722347179,
          "pitch": 0.13314211194348857,
          "rotation": 0,
          "target": "1-mutfak-geii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-mutfak-geii",
      "name": "Mutfak Geçişi",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 0.12825125383372615,
          "pitch": -0.004415072069036796,
          "rotation": 0,
          "target": "0-salon"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "D5'ten Panoramaya Denemesi",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
