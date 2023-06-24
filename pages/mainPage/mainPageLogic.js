import store from "../../store";
const nearCenterArr = [
  "고용",
  "관련유관단체",
  "권익",
  "보육/교육",
  "복지관",
  "여가/문화",
  "의료/건강",
  "이용시설",
  "장애인단체",
];

const openDaumAddressPopup = (selectBoxToCompany) => {
  return new daum.Postcode({
    oncomplete: function (data) {
      const address = data.address;
      selectBoxToCompany.innerText = address;

      fetch(
        "https://dapi.kakao.com/v2/local/search/address.json?query=" + address,
        {
          headers: {
            Authorization: "KakaoAK 75fa87747de5986f0d54c12a967f3d09",
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          const { x, y } = res?.documents[0]?.address;
          store.dispatcher({
            type: "setCompnyXY",
            param: { companyX: x, companyY: y },
          });
          console.log(store.getState(), "getState");
        })
        .catch((err) => {
          console.error(err);
        });
    },
  }).open();
};

export default () => {
  setTimeout(() => {
    console.log("main Logic");
    const likePlaceSelectModal = document.getElementById(
      "likePlaceSelectModal"
    );
    const likePlaceSelectModalCancel = document.getElementById(
      "likePlaceSelectModalCancel"
    );

    const selectBoxToCompany = document.getElementById("selectBoxToCompany");
    const selectBoxToCenter = document.getElementById("selectBoxToCenter");
    const mainPageResultBtn = document.getElementById("mainPageResultBtn");

    selectBoxToCompany.addEventListener("click", () => {
      openDaumAddressPopup(selectBoxToCompany);
      console.log("selectBoxToCompany");
    });
    selectBoxToCenter.addEventListener("click", () => {
      console.log("selectBoxToCenter");
      likePlaceSelectModal.style.display = "block";
    });
    mainPageResultBtn.addEventListener("click", () => {
      location.hash = "#resultPage";
    });
    likePlaceSelectModalCancel.addEventListener("click", () => {
      likePlaceSelectModal.style.display = "none";
    });

    nearCenterArr.forEach((v, i) => {
      const selectBox = document.getElementById("selectBox_" + i);
      selectBox.addEventListener("click", () => {
        console.log("selectBox_" + i, v);
        selectBox.style.backgroundColor = "skyblue";
        store.dispatcher({ type: "setCenter", param: v });
      });
    });
  }, 1000);
};
