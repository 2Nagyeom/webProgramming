// import * as echarts from 'echarts/core';
import * as echarts from "echarts";
import store from "../../store";

export default () => {
  const routePath = decodeURI(location.hash);
  var hashArray = routePath.split("/");
  var guName = hashArray[1];
  var initialLat = Number(hashArray[2]);
  var initialLng = Number(hashArray[3]);

  setTimeout(() => {
    const continueBtn = document.getElementById("continueBtn");
    continueBtn.addEventListener("click", () => {
      location.hash = `#categoryPage/${initialLat}/${initialLng}/${guName}`;
    });

    const { resultRating = [] } = store.getState();
    console.log(resultRating,'resultRating');
    var dom = document.getElementById("chart-container");
    var myChart = echarts.init(dom, null, {
      renderer: "canvas",
      useDirtyRect: false,
    });

    var option = {
      title: {
        text: "종합지수차트",
      },
      legend: {
        data: ["거리", "치안 안전 점수", "선호 시설", "그외 복지 시설"],
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: "거리", max: 15 },
          { name: "치안 안전 점수", max: 10 },
          { name: "선호 시설", max: 10 },
          { name: "그외 복지 시설", max: 10 },
        ],
      },
      series: [
        {
          name: "수치 조절 그래프",
          type: "radar",
          data: [
            {
              value: resultRating,
              name: "수치조절",
            },
          ],
        },
      ],
    };

    if (option && typeof option === "object") {
      myChart.setOption(option);
    }

    window.addEventListener("resize", myChart.resize);
  }, 1000);
};
