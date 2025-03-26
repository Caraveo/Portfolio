module.exports = {
  apps: [{
    name: 'artist-portfolio',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
} 