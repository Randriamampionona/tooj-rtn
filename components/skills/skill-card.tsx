import Image from "next/image";

type TProps = {
  skill: {
    id: string;
    name: string;
    icon: string;
    rate: number;
  };
};

export default function SkillCard({ skill }: TProps) {
  return (
    <div className="relative group flex flex-col items-center justify-center w-full max-w-[4rem] bg-accent/30 rounded-md p-2 hover:scale-110 transition-all duration-150 cursor-default overflow-hidden shadow">
      <div>
        <Image
          alt={skill.name}
          src={skill.icon}
          width={32}
          height={32}
          style={{ objectFit: "cover" }}
        />
      </div>
      <p className="text-xs text-muted-foreground select-none">{skill.name}</p>

      <div className="absolute bottom-0 left-0 right-0 w-0 group-hover:w-full group-hover:h-1 transition-all duration-500">
        <div
          className="h-full bg-orange-600"
          style={{ width: `${skill.rate}%` }}
        />
      </div>
    </div>
  );
}
