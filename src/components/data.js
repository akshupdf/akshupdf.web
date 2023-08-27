import bio from '../images/akshupdf.mp4'
import acord from '../images/acord.mp4'
import sri from '../images/sri.mp4'
import cart from '../images/cart.mp4'

export const VIDEOS = [
    {
      id: 1,
      code: (
        <iframe
          title="vid1"
          width="560"
          height="315"
          src={bio}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      id: 2,
      code: (
        <iframe
          title="vid2"
          width="560"
          height="315"
          src={sri}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      id: 3,
      code: (
        <iframe
          title="vid3"
          width="560"
          height="315"
          src={acord}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      id: 4,
      code: (
        <iframe
          title="vid4"
          width="560"
          height="315"
          src={cart}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
  ];
  