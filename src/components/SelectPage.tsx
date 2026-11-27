import { BRANCHES, companiesForBranch, type Selection } from '@/data';

interface Props {
  selection: Selection;
  onChange: (update: Partial<Selection>) => void;
  onContinue: () => void;
}

export default function SelectPage({ selection, onChange, onContinue }: Props) {
  const canContinue = selection.branch !== '' && selection.company !== '';
  const companies = selection.branch ? companiesForBranch(selection.branch) : [];

  const pickBranch = (b: string) => {
    // If the current company is not valid for the new branch, clear it.
    if (selection.branch !== b) {
      onChange({ branch: b, company: '' });
    } else {
      onChange({ branch: b });
    }
  };

  return (
    <div className="px-4 sm:px-6">
      <div className="mx-auto max-w-[1100px] py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Tell us about yourself</h1>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Pick your branch first, then choose from the companies that hire that branch.
        </p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Branch */}
          <section>
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">Select Branch</h2>
            <p className="mt-1 text-sm text-gray-500">Your engineering branch</p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 gap-3">
              {BRANCHES.map((b) => (
                <button
                  key={b}
                  onClick={() => pickBranch(b)}
                  className={`px-4 py-3.5 sm:py-3 rounded-lg text-left text-base font-medium border-2 transition-colors duration-150 ${
                    selection.branch === b
                      ? 'bg-navy-50 border-navy-700 text-navy-800'
                      : 'bg-gray-100 border-transparent text-gray-700 hover:border-navy-200'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </section>

          {/* Company */}
          <section>
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">Select Target Company</h2>
            <p className="mt-1 text-sm text-gray-500">
              {selection.branch ? 'Where do you want to get placed?' : 'Pick a branch to see companies'}
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selection.branch ? (
                companies.map((c) => (
                  <button
                    key={c}
                    onClick={() => onChange({ company: c })}
                    className={`px-4 py-3.5 sm:py-3 rounded-lg text-left text-base font-medium border-2 transition-colors duration-150 ${
                      selection.company === c
                        ? 'bg-navy-50 border-navy-700 text-navy-800'
                        : 'bg-gray-100 border-transparent text-gray-700 hover:border-navy-200'
                    }`}
                  >
                    {c}
                  </button>
                ))
              ) : (
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500 text-sm sm:text-base">
                  Choose a branch to see matching companies.
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
