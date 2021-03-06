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
    "title": "All Giveaways",
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
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n    giveaways: [\n      {\n        id: '12345',\n        prize: 'A prize',\n        endsAt: 123456789,\n        prizeType: 'type',\n        mod: '12345',\n        time: 123456789,\n      },\n      {   \n        id: '12345',\n        prize: 'A prize',\n        endsAt: 123456789,\n        prizeType: 'type',\n        mod: '12345',\n        time: 123456789,\n      }\n    ],\n    fetchedAt: '2020-01-01T00:00:00.000Z'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/giveaway.js",
    "groupTitle": "Giveaways",
    "sampleRequest": [
      {
        "url": "https://narwhalapi.theshadow.xyz/giveaway"
      }
    ]
  },
  {
    "type": "get",
    "url": "/giveaway/:id",
    "title": "Get a giveaway",
    "name": "Get_a_giveaway",
    "group": "Giveaways",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the giveaway</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The giveaway's data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>ID of the giveaway</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.prize",
            "description": "<p>Prize for the giveaway</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.endsAt",
            "description": "<p>Timestamp of the giveaway ending</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.prizeType",
            "description": "<p>Type of giveaway</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.mod",
            "description": "<p>ID of the user who created the giveaway</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.time",
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
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n    data: {\n        id: '12345',\n        prize: 'A prize',\n        endsAt: 123456789,\n        prizeType: 'type',\n        mod: '12345',\n        time: 123456789,\n     },\n    fetchedAt: '2020-01-01T00:00:00.000Z'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>The error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Giveaway not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/giveaway.js",
    "groupTitle": "Giveaways",
    "sampleRequest": [
      {
        "url": "https://narwhalapi.theshadow.xyz/giveaway/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/stats",
    "title": "Bot Stats",
    "name": "Bot_Stats",
    "group": "Stats",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "guilds",
            "description": "<p>The current guild count</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "users",
            "description": "<p>The current user count</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/stats.js",
    "groupTitle": "Stats",
    "sampleRequest": [
      {
        "url": "https://narwhalapi.theshadow.xyz/stats"
      }
    ]
  },
  {
    "type": "get",
    "url": "/status",
    "title": "Process Status",
    "name": "Process_Status",
    "group": "Stats",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "discord",
            "description": "<p>The statuses from Discord</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "process",
            "description": "<p>The statuses from the process manager</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/stats.js",
    "groupTitle": "Stats",
    "sampleRequest": [
      {
        "url": "https://narwhalapi.theshadow.xyz/status"
      }
    ]
  }
] });
