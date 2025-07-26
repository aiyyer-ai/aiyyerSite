window.onload = (event) => {
//in case I want to make something run at launch

}

function openInfo(div) {
      let grid = document.getElementById(`appHolder`);
      grid.style.width = grid.clientWidth + "px";
      let appInfo = document.getElementById(`${div.id}Info`);
      let allTabs = document.querySelectorAll(".appInfo");
      let useTransition = true;
      Array.from(allTabs).filter((tab) => { return tab.id != appInfo.id }).forEach((tab) => {
            if(tab.style.display.length > 0 && tab.style.display != `none`) {
                  useTransition = false;
                  appInfo.style.minHeight = tab.clientHeight + "px";
            }
            tab.style.display = `none`;
            tab.style.maxHeight = 0 + "px";
      });
      if(appInfo.style.display != `block`) {
            let newWidth = grid.clientWidth;
            let maxHeight = window.innerHeight;
            appInfo.style.display = `block`;
            appInfo.style.width = newWidth + "px";
            if(useTransition) {
                  setTimeout(() => {
                        appInfo.style.maxHeight = maxHeight + "px";
                  }, 1);
            } else {
                  setTimeout(() => {
                        appInfo.style.minHeight = 0 + "px";
                        appInfo.style.maxHeight = maxHeight + "px";
                  }, 1);
            }
      } else {
            appInfo.style.maxHeight = 0 + "px";
            setTimeout(() => {
                  appInfo.style.display = `none`;
            }, 500);
            
      }
}