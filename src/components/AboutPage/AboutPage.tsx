import * as React from "react";
import "./AboutPage.scss";

interface IAboutPage {}
const AboutPage: React.FunctionComponent<IAboutPage> = () => {
  const [isDisplayed, setIsDisplayed] = React.useState<boolean>(false);

  React.useEffect(() => {
    setBtnListener();
  }, []);

  const setBtnListener = () => {
    const btnElement = document.getElementById("test-btn");
    if (btnElement != null) {
      btnElement.addEventListener("click", () => {
        console.log("btn has been clicked");
      });
    }
  };

  return (
    <div className="">
      About page
      <button id="test-btn">click me</button>
    </div>
  );
};

export default AboutPage;
