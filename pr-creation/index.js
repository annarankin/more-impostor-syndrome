(async () => {
  const github = require('@actions/github');
  const simpleGit = require('simple-git');
  const fs = require('fs')

  const octokit = github.getOctokit(process.env.GITHUB_TOKEN)
  const git = simpleGit();

  const now = new Date().getTime()
  const branchname = `beep-boop-${now}`
  const repoOwner = 'annarankin'
  const repoName = 'more-impostor-syndrome'

  const mainBranchInfo = await octokit.repos.getBranch({
    owner: repoOwner,
    repo: repoName,
    branch: 'main'
  })
  const baseCommitName = mainBranchInfo.data.commit.sha

  await git.checkoutBranch(branchname, baseCommitName)
  fs.writeFileSync(`./${branchname}.txt`, "HALLO WORLED")
  await git.add([`./${branchname}.txt`])
  await git.commit('Testing creating a commit')
  await git.push('origin', branchname)

  octokit.pulls.create({
    owner: repoOwner,
    repo: repoName,
    title: `Test PR: ${branchname}`,
    head: branchname,
    base: 'main',
    body: 'This is a test, this is only a test'
  })
})()