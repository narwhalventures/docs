define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "Ping",
    "group": "General",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Message",
            "description": "<p>Current status of the API. Should return either &quot;OK&quot; or an error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    message: \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://narwhalapi.theshadow.xyz/"
      }
    ],
    "version": "0.0.0",
    "filename": "src/index.js",
    "groupTitle": "General",
    "name": "Get"
  },
  {
    "type": "get",
    "url": "/giveaway",
    "title": "Giveaways",
    "name": "All_Giveaways",
    "group": "Giveaways",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "giveaways",
            "description": "<p>All the currently active giveaways</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "giveaways.id",
            "description": "<p>ID of the giveaway</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "giveaways.prize",
            "description": "<p>Prize for the giveaway</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "giveaways.endsAt",
            "description": "<p>Timestamp of the giveaway ending</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "giveaways.prizeType",
            "description": "<p>Type of giveaway</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "giveaways.mod",
            "description": "<p>ID of the user who created the giveaway</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "giveaways.time",
            "description": "<p>Time in milliseconds of the giveaway</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fetchedAt",
            "description": "<p>Date this data was fetched at</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/giveaway.js",
    "groupTitle": "Giveaways",
    "sampleRequest": [
      {
        "url": "https://narwhalapi.theshadow.xyz/giveaway"
      }
    ]
  }
] });
