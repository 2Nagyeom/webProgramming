// import * as echarts from 'echarts/core';
import * as echarts from "echarts";


export default () => {
    const routePath = decodeURI(location.hash);
    var hashArray = routePath.split('/');
    var guName = hashArray[1];
    var initialLat = Number(hashArray[2]);
    var initialLng = Number(hashArray[3]);

    var dom = document.getElementById('chart-container');
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    var app = {};

    var option;

    option = {
        title: {
            text: '종합지수차트'
        },
        legend: {
            data: ['치안 위험', '복지 시설', '선호 시설', '편의 시설']
        },
        radar: {
            // shape: 'circle',
            indicator: [
                { name: '치안 위험', max: 6500 },
                { name: '복지 시설', max: 16000 },
                { name: '선호 시설', max: 30000 },
                { name: '편의 시설', max: 38000 },

            ]
        },
        series: [
            {
                name: '수치 조절 그래프',
                type: 'radar',
                data: [
                    {
                        value: [4200, 3000, 20000, 35000],
                        name: '수치조절'
                    }
                ]
            }
        ]
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);

    setTimeout(() => {
        const continueBtn = document.getElementById('continueBtn')
        continueBtn.addEventListener('click', () => {
            location.hash = `#categoryPage/${initialLat}/${initialLng}/${guName}`
        })
    }, 1000);
}


