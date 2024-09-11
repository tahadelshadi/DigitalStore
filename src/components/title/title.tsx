const Title = ({ title }: { title: String }) => {
  return (
    <div className="h-4 border-b-2 text-left mb-10">
      <span className="bg-white text-xl pr-5 items-center">{title}</span>
    </div>
  );
};

export default Title;
