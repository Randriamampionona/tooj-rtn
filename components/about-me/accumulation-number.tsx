type TProps = {};

const data = [
  {
    id: "exp",
    num: 4,
    text: "Years of experience",
    style: {
      top: "-2rem",
      right: "2.5rem",
    },
  },
  {
    id: "personal-project",
    num: 7,
    text: "personal projects",
    style: {
      bottom: "-1rem",
      right: "2rem",
    },
  },
  {
    id: "real-project",
    num: 5,
    text: "real-world projects",
    style: {
      bottom: "45%",
      left: "-4rem",
    },
  },
];

export default function AccumulationNumber({}: TProps) {
  return (
    <div className="absolute flex items-center justify-start space-x-4 mb-2 w-[25rem] h-[25rem]">
      {data.map((item) => (
        <div
          key={item.id}
          className="absolute flex items-center min-w-[7rem] max-w-[8.5rem] backdrop-blur space-x-2 border border-slate-100/20 bg-slate-100/20 dark:bg-transparent rounded p-2 select-none cursor-default"
          style={item.style}
        >
          <span className="relative font-extrabold text-4xl text-foreground">
            {item.num}{" "}
            <sup className="absolute -top-1 -left-1 text-sm font-light text-muted-foreground">
              +
            </sup>{" "}
          </span>
          <p className="leading-tight text-foreground line-clamp-2 text-sm">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}
