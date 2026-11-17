import { GraduationCap } from 'lucide-react';
import type { Page } from '@/data';

interface Props {
  onNavigate: (page: Page) => void;
}

export default function Header({ onNavigate }: Props) {
  return (
    <header className="bg-navy-800 text-white sticky top-0 z-10 shadow-sm">
      <div className="mx-auto max-w-[1100px] flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 hover:opacity-90 transition-opacity duration-150"
        >
          <span className="bg-white/10 rounded-lg p-1.5 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </span>
          <span className="text-lg sm:text-xl font-bold tracking-tight">SkillGap AI</span>
        </button>
        <button
          onClick={() => onNavigate('about')}
          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-150 text-sm sm:text-base font-semibold"
        >
          About
        </button>
      </div>
    </header>
  );
}
