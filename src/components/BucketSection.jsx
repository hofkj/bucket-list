function BucketSection({ title, content }) {
  return (
    <section>
      <div>{title}</div>
      <div>{content}</div>

      <div>
        <button>수정하기</button>
        <button>삭제하기</button>
      </div>
    </section>
  );
}

export default BucketSection;