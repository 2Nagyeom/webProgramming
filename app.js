import catgoriPage from "./pages/catgoriPage";
import categoryPageLogic from "./pages/catgoriPage/categoryPageLogic";
import mainPage from "./pages/mainPage";
import mainPageLogic from "./pages/mainPage/mainPageLogic";
import mapPage from "./pages/mapPage";
import resultDetailPage from "./pages/resultDetailPage";
import resultDetailPageLogic from "./pages/resultDetailPage/resultDetailPageLogic";
import resultPage from "./pages/resultPage";
import resultPageLogic from "./pages/resultPage/resultPageLogic";
import splashPage from "./pages/splashPage";

const container = document.getElementById('root');

async function router() {
  const routePath = location.hash;
  if(routePath.split('/').length >= 5){
    return;
  }

  if (routePath === '') {
    splashPage(container)
    setTimeout(() => {
      location.hash = '#mainPage';
    }, 1000);
  }else if(routePath.indexOf('#mainPage') >= 0){
    mainPage(container)
    mainPageLogic()
  }else if (routePath.indexOf('#resultPage') >= 0) {
    resultPage(container)
    resultPageLogic()
  }else if (routePath.indexOf('#resultDetailPage') >= 0) {
    resultDetailPage(container)
    resultDetailPageLogic()
  } else if (routePath.indexOf('#categoryPage') >= 0) {
    catgoriPage(container);
    categoryPageLogic()
  }
}

window.addEventListener('hashchange', router);
router();


// 
