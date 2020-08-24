'use strict';

const branch = process.env['GIT_BRANCH'];

let config;
let common = {
    "branches": [
      {
        "name": "develop",
        "channel": "dev",
        "prerelease": true
      },
      "master"
    ],
    "fallbackTags": {
      "dev": "latest"
    }
};

if (branch === 'origin/master') {
    config = { ...common,
        "verifyConditions": [
          "semantic-release-vsce"
        ],
        "plugins": [
          "@semantic-release/commit-analyzer",
          "@semantic-release/release-notes-generator",
          "@semantic-release/changelog",
          "@semantic-release/github",
          "semantic-release-vsce"
        ]
    };
} else {
    config = { ...common,
        "verifyConditions": [
            "semantic-release-vsce"
        ],
        "plugins": [
          "@semantic-release/commit-analyzer",
          "@semantic-release/release-notes-generator",
          "@semantic-release/changelog",
          "@semantic-release/github",
          [
            "@semantic-release/npm",
            {
              "npmPublish": false
            }
          ]
        ]

    };
}
module.exports = config;

