import { Component } from 'react';
import Jeon from "../assets/Jeon-Jungkook.jpeg"
import Jung from "../assets/Jung-Hoseok.jpeg"
import Namjoon from "../assets/Kim-Namjoon.jpeg"
import Soekjin from "../assets/Kim-Soekjin.jpeg"
import Taehyung from "../assets/Kim-Taehyung.jpeg"
import Yoongi from "../assets/Min-Yoongi.jpeg"
import Park from "../assets/Park-Jimin.jpeg"
import "./Backgroundimage.css"

class BackgroundImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      images: [
        Jeon,
        Jung,
        Namjoon,
        Soekjin,
        Taehyung,
        Yoongi,
        Park,
        // Add more image URLs as needed
      ],
    };
  }

  // Function to change the background image every 5 seconds
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        return {
          currentImageIndex: (prevState.currentImageIndex + 1) % this.state.images.length,
        };
      });
    }, 5000);
  }

  // Clear the interval when the component is unmounted
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const currentImage = this.state.images[this.state.currentImageIndex];

    // const style = {
    //   background: `url(${currentImage}) center/cover no-repeat`,
    //   transition: 'background 1s ease-in-out', // Add a smooth transition effect
    //   width: '50vw',
    //   height: '100vh',
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // };

    return <div className='background-image' style={{background: `url(${currentImage}) center/cover no-repeat`}}></div>;
  }
}

export default BackgroundImage;
