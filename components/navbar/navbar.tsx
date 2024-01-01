import Logo from "./Logo";
import ThemeToogle from "./theme-toogle";

type TProps = {};

export default function Navbar({}: TProps) {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <ThemeToogle />
    </div>
  );
}
