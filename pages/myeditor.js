import sdk from '@stackblitz/sdk';
import { useState, useEffect } from 'react';
export default function Myeditor() {
  const REPOS = {
    angular: {
      github: 'gothinkster/angular-realworld-example-app',
      openFile: 'README.md',
    },
    vite: {
      github: 'vitejs/vite/tree/main/packages/create-vite/template-vanilla',
      openFile: 'index.html',
    },
  };

  let selectedRepo = REPOS.vite;
  async function embedProject() {
    sdk.embedGithubProject('embed', selectedRepo.github, {
      height: 400,
      openFile: selectedRepo.openFile,
    });
  }

  /**
   * Open the project in a new window on StackBlitz
   */
  function openProject() {
    sdk.openGithubProject(selectedRepo.github, {
      openFile: selectedRepo.openFile,
    });
  }

  function setRepo(element) {
    selectedRepo = REPOS[element.value];
    // if already embedded, update the embed
    if (document.getElementById('embed')?.nodeName === 'IFRAME') {
      embedProject();
    }
  }
  useEffect(() => {
    embedProject();
  }, []);

  // window.demo = {
  //   embedProject,
  //   openProject,
  //   setRepo,
  // };

  return (
    <div>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg"
              id="boilerplate-tab"
              data-tabs-target="#boilerplate"
              type="button"
              role="tab"
              aria-controls="boilerplate"
              aria-selected="false"
            >
              Boilerplate
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Solutions
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div
          class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="boilerplate"
          role="tabpanel"
          aria-labelledby="boilerplate-tab"
        >
          <div id="embed"></div>
        </div>
      </div>
    </div>
  );
}
