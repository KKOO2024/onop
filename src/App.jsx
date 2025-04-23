import './App.css';
import ProfileCard from './components/ProfileCard';
import profileImg from './assets/images/9s0.png';

function App() {
  return (
    <div className="main-container">
      <h1 className="title">구서영의 리액트</h1>

      <ProfileCard
        image={profileImg}
        name="구서영"
        description="GSITM 부트캠프 10기"
      />

      <div className="link-area">
      <a
          className="link-button"
          href="https://mic-alpha.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ✨ 0423_ mic
        </a>
      <a
          className="link-button"
          href="https://311-seven.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
         ✨ 0423_ 311
        </a>
      <a
          className="link-button"
          href="https://travel-rpcz.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ✨ 0423_ 여가
        </a>
        <a
          className="link-button"
          href="https://gom-b9b9.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ✨ 0423_ 곰돌이
        </a>
        <a
          className="link-button"
          href="https://day2-uxzk.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ✨ 0423_ 사과
        </a>
        
        <a
          className="link-button"
          href="https://test-zeta-jade-49.vercel.app/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          ✨ 0422_수습 국원
        </a>
        <a
          className="link-button"
          href="https://homework-ten-beta.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ✨ 0422_개발자 지원서 숙제
        </a>
      </div>
    </div>
  );
}

export default App;
