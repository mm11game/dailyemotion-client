const RenderImg = (emotionId) => {
  switch (emotionId) {
    case 1:
      return "../../images/angry.png";
    case 2:
      return "../../images/anxious.png";
    case 3:
      return "../../images/depressed.png";
    case 4:
      return "../../images/flutter.png";
    case 5:
      return "../../images/sad.png";
    case 6:
      return "../../images/smile.png";
  }
};

export default RenderImg;
