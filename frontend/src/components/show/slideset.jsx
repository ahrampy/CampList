import React from "react";

class SlideSet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide() {
    const lastIndex = this.props.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide() {
    const lastIndex = this.props.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render() {
    return (
      <div className="slideset">
        <div className="left-arrow">
          <Arrow
            direction="left"
            clickFunction={this.previousSlide}
            glyph="&#9664;"
          />
        </div>

        <div className="slideset-img-container">
          <ImageSlide url={this.props.imgUrls[this.state.currentImageIndex]} />
        </div>

        <div className="right-arrow">
          <Arrow
            direction="right"
            clickFunction={this.nextSlide}
            glyph="&#9654;"
          />
        </div>
      </div>
    );
  }
}

const ImageSlide = ({ url }) => {
  return (
    <div className="image-slide">
      <img className="home-photo2" src={`${url}`} alt="" />
    </div>
  );
};

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
    {glyph}
  </div>
);

export default SlideSet;
