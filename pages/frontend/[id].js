import { useRouter } from 'next/router';
import { REPOS } from '../api/repositories';
import { frontendproblems } from '../api/frontendproblems';
import sdk from '@stackblitz/sdk';
import { useState, useEffect } from 'react';
export default function index({ params }) {
  const router = useRouter();
  const { id } = router.query;
  const filterData = frontendproblems.filter((itemid) => {
    return itemid.id == Number(id);
  });
  const Question = ({ item }) => {
    return (
      <div className="p-5">
        <div className="font-bold text-base text-lg mb-2">{item.title}</div>
        <div className="text-xs">{item.date}</div>
        <div className="font-bold rounded-sm bg-gradient-to-r from-green-700 to-green-500 text-white px-2 py-0.5 text-sm mt-2 mb-2">
          {item.problemDifficulty}
        </div>
        <div>
          <h5 className="font-bold">Requirements</h5>
        </div>
        <div className="text-md">{item.problemStatement}</div>
        <div>
          <h5 className="font-bold ">Companies</h5>
        </div>
        <div className="text-xs">{item.companies}</div>
        <div>
          <h5 className="font-bold">Solution</h5>
        </div>
        <div className="text-xs">{item.solution}</div>
      </div>
    );
  };
  let selectedRepo = REPOS.angular;
  let selectedSolutionsRepo = REPOS.reactjs;
  async function embedProject() {
    sdk.embedGithubProject('embed', selectedRepo.github, {
      height: 490,
      openFile: selectedRepo.openFile,
    });
    // sdk.embedGithubProject('solutions', selectedSolutionsRepo.github, {
    //   height: 490,
    //   openFile: selectedSolutionsRepo.openFile,
    // });
  }
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
  return (
    <>
      <div className="flex ">
        <div className="w-4/6">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <ul
              className="flex flex-wrap border-b border-gray-200 dark:border-gray-700"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li className="mr-2 " role="presentation">
                <button
                  className="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-200 rounded-t-lg py-4 px-4 text-sm font-medium text-center"
                  id="boilerplate-tab"
                  data-tabs-target="#boilerplate"
                  type="button"
                  role="tab"
                  aria-controls="boilerplate"
                  aria-selected="false"
                  aria-current="boilerplate"
                >
                  Boilerplate
                </button>
              </li>
              <li className="mr-2 active" role="presentation">
                <button
                  className="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-200 rounded-t-lg py-4 px-4 text-sm font-medium text-center"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="true"
                >
                  Solutions
                </button>
              </li>
            </ul>
          </div>
          <div id="myTabContent">
            <div
              className="rounded-lg bg-gray-50 dark:bg-gray-800"
              id="boilerplate"
              role="tabpanel"
              aria-labelledby="boilerplate-tab"
            >
              <div id="embed"></div>
            </div>
            {/* <div
              className="rounded-lg bg-gray-50 dark:bg-gray-800"
              id="boilerplate"
              role="tabpanel"
              aria-labelledby="boilerplate-tab"
            >
              <div id="solutions"></div>
            </div> */}
          </div>
        </div>
        <div className="w-2/6 shadow-md">
          <div>
            {filterData[0] ? (
              <Question item={filterData[0]} />
            ) : (
              '<div>Loading..</div>'
            )}
          </div>
        </div>
      </div>
    </>
  );
}
