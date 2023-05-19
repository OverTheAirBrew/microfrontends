module.exports = {
  baseBranch: 'main',
  // TODO: Investigate if the order is important
  plugins: [
    'npm',
    'conventional-commits',
    // 'first-time-contributor',
    // 'all-contributors',
    'released',
    'protected-branch',
    // 'microsoft-teams', // uses env MICROSOFT_TEAMS_WEBHOOK_URL
  ],
  prereleaseBranches: [],
};
