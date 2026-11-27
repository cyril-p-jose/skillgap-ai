import { rolesForBranch, skillsForBranchRole } from '@/data';

interface Props {
  branch: string;
  skills: string[];
  onToggleSkill: (skill: string) => void;
  onClearSkills: () => void;
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
  branch,
  skills,
  onToggleSkill,
  onClearSkills,
  targetRole,
  onSelectRole,
  onContinue,
}: Props) {
  const roles = rolesForBranch(branch);
  const skillOptions = targetRole ? skillsForBranchRole(branch, targetRole) : [];
  const canContinue = skills.length > 0 && targetRole !== '';

  const pickRole = (r: string) => {
    if (targetRole !== r) {
      onSelectRole(r);
      onClearSkills();
    }
  };

  return (
    <div className="px-4 sm:px-6">
      <div className="mx-auto max-w-[1100px] py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Your skills and target role</h1>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Pick a role for your {branch} branch, then choose the skills you already have.
        </p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <section>
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">Select Target Role</h2>
            <p className="mt-1 text-sm text-gray-500">Roles relevant to your branch</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {roles.map((r) => (
                <Pill key={r} label={r} active={targetRole === r} onClick={() => pickRole(r)} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">Select Your Skills</h2>
            <p className="mt-1 text-sm text-gray-500">
              {targetRole ? 'Choose all that apply' : 'Pick a role to see relevant skills'}
            </p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 gap-3">
              {targetRole ? (
                skillOptions.map((s) => (
                  <Pill key={s} label={s} active={skills.includes(s)} onClick={() => onToggleSkill(s)} />
                ))
              ) : (
                <div className="col-span-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500 text-sm sm:text-base">
                  Choose a role to see the skills that matter for it.
                </div>
              )}
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
