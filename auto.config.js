module.exports = {
  baseBranch: 'main',
  // TODO: Investigate if the order is important
  plugins: [
    [
      'protected-branch',
      {
        requiredStatusChecks: ['Build'],
      },
    ],
    'npm',
    'conventional-commits',
    // 'first-time-contributor',
    // 'all-contributors',
    'released',
    // 'microsoft-teams', // uses env MICROSOFT_TEAMS_WEBHOOK_URL
  ],
  prereleaseBranches: [],
};
