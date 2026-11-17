const SKILL_OPTIONS = ['React', 'Python', 'Java', 'SQL', 'Data Structures', 'Communication'];
const ROLE_OPTIONS = ['Frontend Developer', 'Backend Developer', 'Data Analyst', 'Full Stack Developer', 'Any Role'];

interface Props {
  skills: string[];
  onToggleSkill: (skill: string) => void;
  targetRole: string;
  onSelectRole: (role: string) => void;
  onContinue: () => void;
}

function Pill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3.5 sm:py-3 rounded-lg text-left text-base font-medium border-2 transition-colors duration-150 ${
        active
          ? 'bg-navy-50 border-navy-700 text-navy-800'
          : 'bg-gray-100 border-transparent text-gray-700 hover:border-navy-200'
      }`}
    >
      {label}
    </button>
  );
}

export default function SkillsPage({
  skills,
  onToggleSkill,
  targetRole,
  onSelectRole,
  onContinue,
}: Props) {
  const canContinue = skills.length > 0 && targetRole !== '';

  return (
    <div className="px-4 sm:px-6">
      <div className="mx-auto max-w-[1100px] py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Your skills and target role</h1>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Pick what you already know and the role you are preparing for.
        </p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <section>
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">Select Your Skills</h2>
            <p className="mt-1 text-sm text-gray-500">Choose all that apply</p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 gap-3">
              {SKILL_OPTIONS.map((s) => (
                <Pill key={s} label={s} active={skills.includes(s)} onClick={() => onToggleSkill(s)} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">Select Target Role</h2>
            <p className="mt-1 text-sm text-gray-500">What kind of job are you aiming for?</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ROLE_OPTIONS.map((r) => (
                <Pill key={r} label={r} active={targetRole === r} onClick={() => onSelectRole(r)} />
              ))}
            </div>
          </section>
        </div>

        <div className="mt-10 flex justify-center sm:justify-start">
          <button
            onClick={onContinue}
            disabled={!canContinue}
            className="w-full sm:w-auto px-10 py-4 sm:py-3.5 rounded-lg bg-navy-800 text-white text-base sm:text-lg font-semibold hover:bg-navy-700 active:bg-navy-900 transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
