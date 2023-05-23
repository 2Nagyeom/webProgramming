import catgoriPage from "./pages/catgoriPage";
import mypage from "./pages/mypage";
import mapPage from "./pages/mapPage";

// root 를 가져와서 container 에 할당
const container = document.getElementById('root');

const store = {
  currentPage: 1,
  feeds: [],
};


function router() {
  const routePath = location.hash;
  console.log(routePath, 'routePath');
  if (routePath === '') {
    mapPage(container)
  } else if (routePath.indexOf('#catgoriPage') >= 0) {
    catgoriPage(container);
  } else if (routePath.indexOf('#mypage') >= 0) {
    mypage(container)
  }
}

window.addEventListener('hashchange', router);

router();
