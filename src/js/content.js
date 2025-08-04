const translationMap = new Map([
  [`Recent Repositories`, `最近仓库`],
  [`Search or jump to…`, `搜索并跳转至...`],
  [`Issues`, `问题`],
  [`Pull`, `合并`],
  [`request`, `请求`],
  [`s`, ``],
  [`Marketplace`, `市场`],
  [`Explore`, `探索`],
  [`Following`, `关注者`],
  [`Find a repository…`, `查找仓库`],
  [`Latest changes`, `最新变化`],
  [`hours ago`, `小时前`],
  [`days ago`, `天前`],
  [`years ago`, `年前`],
  [`minutes ago`, `分钟前`],
  [`New`, `新建`],
  [`Explore repositories`, `探索存储库`],
  [`Explore more →`, `探索更多 →`],
  [`Set status`, `设置状态`],
  [`Your profile`, `个人信息`],
  [`Your repositories`, `个人仓库`],
  [`Your codespaces`, `你的 codespaces`],
  [`Your projects`, `你的项目`],
  [`Signed in as`, `登陆账户为`],
  [`Feature preview`, `功能预览`],
  [`Upgrade`, `升级`],
  [`Try Enterprise`, `尝试企业版`],
  [`Help`, `帮助`],
  [`Settings`, `设置`],
  [`Sign out`, `退出`],
  [`Overview`, `概述`],
  [`Repositories`, `仓库`],
  [`Projects`, `项目`],
  [`Packages`, `包`],
  [`Popular repositories`, `流行的仓库`],
  [`Edit profile`, `编辑个人信息`],
  [`followers`, ` 被关注`],
  [`following`, ` 关注`],
  [`Public`, `公开`],
  [`Customize your pins`, `定义你的置顶项目`],
  [`Contribution settings`, `贡献设置`],
  [`Pinned`, `置顶`],
  [`Learn how we count contributions`, `了解我们如何计算贡献`],
  [`Code review`, `代码评审`],
  [`Pull requests`, `合并请求`],
  [`Commits`, `提交`],
  [`Contribution activity`, `贡献活动`],
  [`Show more activity`, `显示更多活动`],
  [`Code`, `代码`],
  [`Go to file`, `转至文件`],
  [`Add file`, `添加文件`],
  [`About`, `关于`],
  [`Pin`, `置顶`],
  [`Pin this repository to your profile`, `置顶这个项目到你的个人信息`],
  [`New repository`, `新建仓库`],
  [`Import repository`, `导入仓库`],
  [`New organization`, `新建组织`],
  [`Create a new release`, `创建一个新的版本`],
  [`Publish your first package`, `发布你的第一个包`],
  [`Releases`, `发布`],
  [`Packages `, `包`],
  [`No packages published`, `没有发布任何软件包`],
  [`Languages`, `语言`],
  [`Show more`, `显示更多`],
  [`Recent activity`, `最新动态`],
  [
    `When you take actions across GitHub, we’ll provide links to that activity here.`,
    `当你在 GitHub 上采取行动时，我们会在这里提供该活动的链接。`,
  ],
  [`More`, `更多`],
  [`Subscribe to your news feed`, `订阅你的 feed`],
  [`Blog`, `博客`],
  [`Shop`, `商店`],
  [`Contact GitHub`, `联系 Github`],
  [`Pricing`, `定价`],
  [`Training`, `培训`],
  [`Status`, `状态`],
  [`Security`, `安全`],
  [`Terms`, `团队`],
  [`Privacy`, `隐私`],
  [`Docs`, `文档`],
  [`New project`, `新建项目`],
  [`Activity  overview`, `活动概览`],
  [`Projects`, `项目`],
  [`Security`, `安全`],
  [`Insights`, `统计`],
  [`Create new file`, `创建新的文件`],
  [`Upload files`, `上传文件`],
  [`Code`, `代码`],
  [`Local`, `本地`],
  [`Clone`, `克隆`],
  [`Open with GitHub Desktop`, `在 Github 桌面程序中打开`],
  [`Download ZIP`, `下载压缩包`],
  [`New codespace`, `新建 codespace`],
  [`Less`, `更少`],
  [`Select type`, `选择类型`],
  [`Type`, `类型`],
  [`Language`, `语言`],
  [`Sort`, `排序`],
  [`Private`, `私有`],
  [`Select language`, `选择语言`],
  [`Select order`, `选择顺序`],
  [`Last updated`, `最近更新`],
  [`Create a new repository`, `创建一个新的仓库`],
  [`Owner`, `拥有者`],
  [`Repository name`, `仓库名字`],
  [`Description`, `描述`],
  [`(optional)`, `(可选)`],
  [
    `Anyone on the internet can see this repository. You choose who can commit.`,
    `互联网上的任何人都可以看到这个存储库。你选择谁能够提交。`,
  ],
  [
    `You choose who can see and commit to this repository.`,
    `你可以选择谁可以看到和提交这个版本库。`,
  ],
  [
    `A repository contains all project files, including the revision history. Already have a project repository elsewhere?`,
    `一个仓库包含所有项目文件，包括修订历史。在其他地方已经有一个项目库了？`,
  ],
  [`Import a repository.`, `导入仓库`],
  [
    `Skip this step if you’re importing an existing repository.`,
    `如果你要导入一个已有的版本库，请跳过这一步。`,
  ],
  [
    `Choose which files not to track from a list of templates.`,
    `从一个模板列表中选择哪些文件不需要跟踪。`,
  ],
  [
    `This is where you can write a long description for your project.`,
    `在这里，你可以为你的项目写一个长的描述。`,
  ],
  [
    `A license tells others what they can and can't do with your code.`,
    `许可证告诉别人他们可以和不可以用你的代码做什么。`,
  ],
  [
    `You are creating a public repository in your personal account.`,
    `你正在你的个人账户中创建一个公共库。`,
  ],
  [`Initialize this repository with:`, `用以下方式初始化这个存储库：`],
  [`Create repository`, `创建仓库`],
  [
    `Great repository names are short and memorable. Need inspiration? How about`,
    `伟大的仓库名称是简短而令人难忘的。需要灵感吗？比如 `,
  ],
  [`Your personal account`, `你的个人账户`],
  [`Public profile`, `公开资料`],
  [`Name`, `名字`],
  [`Change username`, `修改用户名`],
  [`Account`, `账户`],
  [`Export account data`, `导出账户数据`],
  [`Appearance`, `外观`],
  [`Accessibility`, `无障碍设施`],
  [`Notifications`, `通知`],
  [`Access`, `访问`],
  [`Personal billing`, `个人帐单`],
  [`Emails`, `邮件`],
  [`Billing and plans`, `账单和计划`],
  [
    `This is a list of SSH keys associated with your account. Remove any keys that you do not recognize.`,
    `这是与你的账户相关的 SSH 密钥的列表，删除任何你不认识的密钥`,
  ],
  [`Organizations`, `组织`],
  [`You are not a member of any organizations.`, `你不是任何组织的成员  `],
  [`Archives`, `归档`],
  [`Security log`, `安全日志`],
  [`Sponsorship log`, `赞助日志`],
  [`No sponsorship activity in this time period`, `这段时间内没有赞助活动`],
  [`Sign in to GitHub`, `登录到 Github`],
  [`Username or email address`, `用户名或邮箱`],
  [`Password`, `密码`],
  [`Sign in`, `登录`],
  [`New to GitHub?`, `刚来 Github？`],
  [`Create an account`, `创建一个账户`],
  [`Forgot password?`, `忘记密码？`],
  [`Create an account`, ``],
  [
    `Label issues and pull requests for new contributors`,
    `为新的贡献者标记问题和合并请求`,
  ],
  [`Filters`, `过滤`],
  [`New Issue`, `新问题`],
  [`There aren’t any open issues.`, `没有任何公开的问题。`],
  [`Signing in…`, `登录中...`],
  [`Edit repository details`, `编辑仓库详情信息`],
  [`Website`, `网站`],
  [`Cancer`, `取消`],
  [`Save changes`, `保存修改`],
  [`Protect this branch`, `保护这个分支`],
  [`Get started with GitHub Actions`, `开始使用 Github Actions`],
  [
    `Build, test, and deploy your code. Make code reviews, branch management, and issue triaging work the way you want. Select a workflow to get started.`,
    `构建、测试和部署你的代码。使代码审查、分支管理和问题分流以你想要的方式进行。选择一个工作流程来开始。`,
  ],
  [`Browse all categories`, `浏览所有类型`],
  [`Automation`, `自动化`],
  [`Deployment`, `部署`],
  [`Continuous integration`, `持续集成`],
  [`Reporting`, `报告`],
  [`General`, `常规`],
  [`Public email`, `公开的邮箱`],
  [`Bio`, `个人简历`],
  [`URL`, `网站`],
  [`Twitter username`, `Twitter 用户名`],
  [`Company`, `公司`],
  [`Location`, `地址`],
  [`Contributions & Activity`, `贡献和活动`],
  [`Successor settings`, `继承人设置`],
  [`You have not designated a successor.`, `你还没有指定继承人`],
  [`Delete account`, `删除账户`],
  [
    `Once you delete your account, there is no going back. Please be certain.`,
    `一旦你删除了你的账户，就不能够找回了，请慎重`,
  ],
  [`Display current local time`, `显示当前的本地时间`],
  [`Keyboard shortcuts`, `快捷键`],
  [`Subscriptions`, `订阅`],
  [`Verified domains`, `验证的域名`],
  [`There are no verified domains.`, `没有经过验证的域名`],
  [`Password and authentication`, `密码和身份验证`],
  [`Change password`, `修改密码`],
  [`Old password`, `旧密码`],
  [`New password`, `新密码`],
  [`Confirm new password`, `确认新的密码`],
  [`Two-factor authentication`, `两步验证`],
  [`Confirm new password`, `确认新的密码`],
  [`Confirm access`, `确认访问`],
  [`Confirm`, `确认`],
  [`Who has access`, `谁有权限`],
  [`Code and automation`, `代码和自动化`],
  [`Default branch`, `默认分支`],
  [`Branch protection rules`, `分支保护规则`],
  [`Protected tags`, `保护标签`],
  [`Environments`, `环境变量`],
  [`Code security and analysis`, `代码安全性和分析`],
  [`Integrations`, `集成`],
  [`Email notifications`, `邮件通知`],
  [`Collaborators`, `合作者`],
  [`Contributors`, `贡献者`],
  [`Community Standards`, `社区标准`],
  [`Traffic`, `流量`],
  [`Code frequency`, `代码频率`],
  [`Dependency graph`, `依赖图`],
  [`Contributors`, `贡献者`],
  [`You can`, `你可以`],
  [`@mention`, `@`],
  [
    `other users and organizations to link to them.`,
    `其他用户和组织来链接它们`,
  ],
  [`Save`, `保存`],
  [`Cancel`, `取消`],
  [`Welcome to the all-new projects`, `欢迎来到全新的项目`],
  [`No open projects`, `没有开放的项目`],
  [`Add a bio`, `添加个人简介`],
  [`Loading more...`, `正在加载中`],
  [
    `Your popular repositories will now be shown instead of your pins.`,
    `你的热门仓库现在将显示，而不是你的置顶`,
  ],
  [`Unpin`, `不置顶`],
  [`Your pins have been updated.`, `你的置顶已经更新了`],
  [`Advanced search`, `高级搜索`],
  [`Branches`, `分支`],
  [`Social Preview`, `社交预览`],
  [
    `Upload an image to customize your repository’s social media preview.`,
    `上传图片来定制你仓库的社交媒体预览`,
  ],
  [`Pull Requests`, `合并请求`],
  [`Danger Zone`, `危险区`],
  [`Change repository visibility`, `修改仓库的可见性`],
  [`Transfer ownership`, `转让所有权`],
  [`This repository is currently public.`, `这个仓库当前是公开的`],
  [`Archive this repository`, `归档这个仓库`],
  [
    `Mark this repository as archived and read-only.`,
    `将此版本库标记为归档和只读`,
  ],
  [`Delete this repository`, `删除这个仓库`],
  [
    `Once you delete a repository, there is no going back. Please be certain.`,
    `一旦你删除了这个仓库，就不能够撤回了，请确认`,
  ],
  [`Are you absolutely sure?`, `你真的确定吗？`],
  [`Change visibility`, `修改可见性`],
  [`Change to private`, `修改为私有`],
  [`Transfer`, `转移`],
  [`Edit status`, `编辑状态`],
  [`Busy`, `忙`],
  [`Clear status`, `清除状态`],
  [`Never`, `从不`],
  [`Your main branch isn't protected`, `你的 main 分支不是受保护的`],
  [
    `Protect this branch from force pushing or deletion, or require status checks before merging.`,
    `保护这个分支不被强行推送或删减，或要求在合并前进行状态检查 `,
  ],
  [`Learn more`, `学习更多`],
  [`Branch protection rule`, `分支保护规则`],
  [`Protect your most important branches`, `保护你最重要的分支`],
  [`Achievements`, `成就`],
  [`Send feedback`, `发送反馈`],
  [`Choose a license`, `选择许可证`],
  [`Learn more.`, `学习更多`],
  [`Import your project to GitHub`, `导入你得项目到 Github`],
  [`Inbox`, `收件箱`],
  [`Prev`, `上页`],
  [`Next`, `下页`],
  [`Saved`, `保存`],
  [`Done`, `完成`],
  [`Manage notifications`, `管理通知`],
  [`See more`, `查看更多`],
  [`Include in the home page`, `显示在页面上`],
  [`Discussions`, `讨论`],
  [`Users`, `用户`],
  [`This repository is currently private.`, `这个仓库当前是私有的`],
  [`Lists`, `列表`],
  [`Create list`, `创建列表`],
  [`Pushes`, `推送`],
  [
    `Limit how many branches and tags can be updated in a single push`,
    `限制一次推送中可以更新多少个分支和标签`,
  ],
  [`I want to make this repository private`, `我想要让这个仓库变为私有`],
  [`I have read and understand these effects`, `我已经阅读并理解了这些影响`],
  [`New issue`, `新建问题`],
  [`Labels`, `标签`],
  [`New milestone`, `新建里程碑`],
  [`Milestones`, `里程碑`],
  [`You haven’t created any Milestones.`, `你还没有创建任何里程碑。`],
  [`Edit`, `编辑`],
  [`Delete`, `删除`],
  [`Close`, `关闭`],
  [`Success`, `完成`],
  [`Dashboard`, `仪表盘`],
  [`to search`, `搜索`],
  [`Create your first project`, `创建您的第一个项目`],
  [
  `Ready to start building? Create a repository for a new idea or bring over an existing repository to keep contributing to it.`,
  `准备好开始构建了吗？为新的想法创建一个存储库，或导入一个存储库以继续为它做出贡献。`,
  ],
  [`Filter`, `筛选`],
  [`Events`, `活动`],
  [`Activity you want to see on your feed`, `您希望在推送中看到的活动`],
  [`Stars`, `星`],
  [`main`, `主干`],
  [`Default`, `默认值`],
  [`Tags`, `标签`],
  [`Watch`, `查看`],
  [`Fork`, `复刻`],
  [`Starred`, `标星`],
  [`Switch branches/tags`, `查看所有分支/标签`],
  [`Profile picture`, `简介图片`],
  [`SSH and GPG keys`, `SSH和GPG密钥`],
  [`Cancel changes`, `取消更改`],
  [`Commit changes...`, `提交更改...`],
  [`or`, `或是`],
  [`Continue with Google`, `继续使用谷歌登录`],
  [`Sign in with a passkey`, `使用通行密钥登录`],
  [`Authentication failed.`, `身份验证失败。`],
  [`Retry passkey`, `重试通行密钥`],
  [`Contact GitHub Support`, `联系 GitHub 支持团队`],
  [`Manage cookies`, `管理Cookie`],
  [`Manage cookie preferences`, `管理Cookie偏好设置`],
  [`Reset all`, `全部重置`],
  [`Do not share my personal information`, `不要分享我的个人信息`],
  [`Reset your password`, `重置您的密码`],
  [
    `Enter your user account's verified email address and we will send you a password reset link.`, 
    `请输入您用户账户已验证的电子邮件地址，我们将向您发送密码重置链接。`
  ],
  [`Email`, `电子邮件`],
  [`Enter your email address`, `输入您的电子邮件地址`],
  [`Verify your account`, `验证您的账户`],
  [`Send password reset email`, `发送密码重置邮件`],
  [`Sign up to GitHub`, `注册 GitHub 账号`],
  [
    `Password should be at least 15 characters OR at least 8 characters including a number and a lowercase letter.`, 
    `密码长度至少为 15 个字符，或者至少为 8 个字符且包含一个数字和一个小写字母。`
  ],
  [`Username`, `用户名`],
  [
    `Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen.`, 
    `用户名只能包含字母数字字符或单个连字符，且不能以连字符开头或结尾。`
  ],
  [`Your Country/Region`, `您的国家/地区`],
  [
    `For compliance reasons, we're required to collect country information to send you occasional updates and announcements.`, 
    `出于合规原因，我们需要收集国家/地区信息，以便向您发送不定期的更新和通知。`
  ],
  [`Email preferences`, `电子邮件偏好设置`],
  [`Receive occasional product updates and announcements`, `接收不定期的产品更新和通知`],
  [`Create account`, `创建账户`],
  [`{number} years ago`, `{number}年前`],
  [`{number} minutes ago`, `{number}分钟前`],
  [`years ago`, `年前`],
  [`minutes ago`, `分钟前`],
  [`README`, `项目介绍文件`],
  [`No releases published`, `未发布任何版本`],
  [`Report repository`, `举报仓库`],
  [`Already have an account?`, `已经有账户了吗？`],
  [`Sign in →`, `登录 →`],
  [`Sign up`, `注册`],
  [`License`, `许可证`],
  [`Pages`, `页面`],
  [`GitHub Pages`, `GitHub 页面`],
  [`forked from`, `来自分支`],
  [`No new commits to fetch. Enjoy your day!`, `没有可拉取的新提交。祝您今天愉快！`],
  [`This branch is not behind the upstream`, `该分支未落后于上游分支`],
  [`Sync fork`, `同步分支`],
  [`Clone using the web URL.`, `使用git链接进行克隆。`],
  [`forks`, `分支`],
  [`Readme`, `项目介绍文件`],
  [`Actions`, `Github工作流`],
  [`Suggested for this repository`, `为此仓库推荐`],
  [`Wiki`, `维基`],
  [`Your stars`, `你点过的星`],
  [`Free`, `免费`],
  [`Preview`, `预览`],
  [`Automate your workflow from idea to production`, `将你的工作流程从构思到生产实现自动化`],
  [
    `GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub.`, 
    `GitHub Actions 让你轻松实现所有软件工作流程的自动化，如今它还具备世界级的持续集成/持续部署（CI/CD）能力。你可以直接从 GitHub 进行代码的构建、测试和部署。`
  ],
  [
    `Learn more about getting started with Actions.`, 
    `了解更多关于 Actions 入门的信息`
  ],
  [`Add a comment`, `评论`],
  [`Write`, `编辑`],
  [
    `Use Markdown to format your comment`, 
    `使用 Markdown 语法来优化你的评论`
  ],
  [`Comment`, `发送评论`],
  [`Close issue`, `关闭问题`],
  [`GitHub, Inc.`, `GitHub 公司`],
  [`Home`, `主页`],
  [`Top repositories`, `高频仓库`],
  [`Ask Copilot`, `询问 Copilot人工智能`],
  [`comment`, `评论`],
  [`One moment please...`, `请稍等片刻……`],
  [`Feed`, `动态`],
  [`Branch`, `分支`],
  [`Block or Report`, `屏蔽或举报`],
  [`Block user`, `屏蔽用户`],
  [
    `Prevent this user from interacting with your repositories and sending you notifications. Learn more about`, 
    `屏蔽用户，防止用户与您的仓库互动并发送您通知。了解更多信息`
  ],
  [`Report abuse`, `举报滥用`],
  [`This will permanently delete the`, `这将永久删除`],
  [`repository, wiki, issues, comments, packages, secrets, workflow runs, and remove all collaborator associations.`, `仓库、维基、议题、评论、包、密钥、工作流运行，并移除所有协作者关联。`],
  [`To confirm, type`, `为确认，请输入`],
  [`in the box below`, `在下方的框中`],
  [`Allow edits by maintainers`, `允许维护者进行编辑`],
  [`Create pull request`, `创建拉取请求`],
  [`Open a pull request that is ready for review`, `打开一个可供审核的拉取请求`],
  [`Create draft pull request`, `创建草稿拉取请求`],
  [`Cannot be merged until marked ready for review`, `在标记为可供审核之前，无法合并`],
  [`Remember, contributions to this repository should follow our GitHub`, `请记住，对本仓库的贡献应遵循我们的 GitHub`],
  [`Open a pull request to contribute your changes upstream.`, `发起一个拉取请求，将您的更改贡献到上游。`],
  [`Open pull request`, `发起拉取请求`],
  [`Contribute`, `贡献`],
  [`I want to delete this repository`, `我想删除这个仓库`],
  [`Unexpected bad things will happen if you don’t read this!`, `如果不读这个，会发生意想不到的糟糕事情！`],
]);

const CONFIG = {
  debounceDelay: 100,
  maxRetries: 3,
  retryDelay: 500
};

let isProcessing = false;
let pendingMutations = [];
let retryCount = 0;

const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

const normalizeText = (text) => {
  return text
    ?.replace(/^\s+|\s+$/g, '')
    .replace(/\s+/g, ' ')
    .trim();
};

const translateTextNode = (node) => {
  const originalText = normalizeText(node.textContent);
  if (originalText && translationMap.has(originalText)) {
    node.textContent = translationMap.get(originalText);
  }
};

const translateElement = (element) => {
  const attributes = ['data-label', 'placeholder', 'value', 'data-signin-label', 'data-disable-with'];
  
  attributes.forEach(attr => {
    if (element.hasAttribute && element.hasAttribute(attr)) {
      const originalValue = normalizeText(element.getAttribute(attr));
      if (originalValue && translationMap.has(originalValue)) {
        element.setAttribute(attr, translationMap.get(originalValue));
      }
    }
  });
};

const processTranslations = () => {
  if (isProcessing) return;
  
  isProcessing = true;
  
  try {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
      {
        acceptNode: (node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            return NodeFilter.FILTER_ACCEPT;
          }
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node;
            if (element.hasAttribute && (
              element.hasAttribute('data-label') ||
              element.hasAttribute('placeholder') ||
              element.hasAttribute('value') ||
              element.hasAttribute('data-signin-label') ||
              element.hasAttribute('data-disable-with')
            )) {
              return NodeFilter.FILTER_ACCEPT;
            }
          }
          return NodeFilter.FILTER_SKIP;
        }
      }
    );

    let node;
    while (node = walker.nextNode()) {
      if (node.nodeType === Node.TEXT_NODE) {
        translateTextNode(node);
      } else {
        translateElement(node);
      }
    }
    
    retryCount = 0;
  } catch (error) {
    console.warn('Translation error:', error);
    if (retryCount < CONFIG.maxRetries) {
      retryCount++;
      setTimeout(processTranslations, CONFIG.retryDelay);
    }
  } finally {
    isProcessing = false;
  }
};

const debouncedProcessTranslations = debounce(processTranslations, CONFIG.debounceDelay);

const observer = new MutationObserver((mutations) => {
  const hasRelevantChanges = mutations.some(mutation => 
    mutation.type === 'childList' && mutation.addedNodes.length > 0 ||
    mutation.type === 'characterData'
  );
  
  if (hasRelevantChanges) {
    debouncedProcessTranslations();
  }
});

const initObserver = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startTranslation);
  } else {
    startTranslation();
  }
};

const startTranslation = () => {
  processTranslations();
  
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
    attributeFilter: ['data-label', 'placeholder', 'value', 'data-signin-label', 'data-disable-with']
  });
};

initObserver();
