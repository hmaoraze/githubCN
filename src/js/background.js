chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('GitHubCN 插件已安装');
    // 可以在这里显示欢迎页面
    // chrome.tabs.create({
    //   url: 'https://github.com/JQiue/githubCN',
    // });
  } else if (details.reason === 'update') {
    console.log(`GitHubCN 插件已更新到版本 ${chrome.runtime.getManifest().version}`);
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getTranslationStatus') {
    sendResponse({ active: true });
  }
  return true;
});
