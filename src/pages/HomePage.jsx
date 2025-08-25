import BucketSection from "../components/BucketSection";

function HomePage() {
  return (
    <div>
      <header>
        <div>
          <img src="../public/profile.png" alt="프로필" />
          <div>황유진</div>
          <div>" 좌우명 "</div>
        </div>

        <button>마이페이지</button>
      </header>

      <div>
        <button>이번년도 버킷리스트</button>
        <button>성인되면 하고싶은 것</button>
        <button>인생 버킷리스트</button>
      </div>

      <div>
        <div>
          <button>버킷리스트 추가하기</button>
        </div>
        <div>
          <BucketSection title="올해 꼭 하고 싶은 일" content="해외 여행 가기" />
          <BucketSection title="성인이 되면" content="운전면허 따기" />
          <BucketSection title="인생 버킷" content="세계 일주" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
