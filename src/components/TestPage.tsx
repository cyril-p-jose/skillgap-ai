import { QUESTIONS, type AnswerMap, type Question } from '@/data';
import WhatsAppShareButton from '@/components/WhatsAppShareButton';

interface Props {
  answers: AnswerMap;
  onAnswer: (id: number, value: 'Yes' | 'No' | 'Learning') => void;
  onSubmit: () => void;
}

const OPTIONS: Array<'Yes' | 'No' | 'Learning'> = ['Yes', 'No', 'Learning'];

function QuestionCard({
  question,
  index,
  selected,
  onAnswer,
}: {
  question: Question;
  index: number;
  selected: 'Yes' | 'No' | 'Learning' | undefined;
  onAnswer: (id: number, value: 'Yes' | 'No' | 'Learning') => void;
}) {
  return (
    <div className="bg-gray-100 rounded-xl border border-gray-200 p-5 sm:p-6">
      <p className="text-sm font-semibold text-navy-700">Question {index + 1} of {QUESTIONS.length}</p>
      <p className="mt-2 text-base sm:text-lg font-medium text-gray-900 leading-relaxed">{question.text}</p>
      <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
        {OPTIONS.map((opt) => (
          <button
            key={opt}
            onClick={() => onAnswer(question.id, opt)}
            className={`px-3 py-3.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold border-2 transition-colors duration-150 ${
              selected === opt
                ? 'bg-navy-800 border-navy-800 text-white'
                : 'bg-white border-gray-300 text-gray-700 hover:border-navy-400'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function TestPage({ answers, onAnswer, onSubmit }: Props) {
  const answered = QUESTIONS.filter((q) => answers[q.id]).length;
  const progress = Math.round((answered / QUESTIONS.length) * 100);
  const allAnswered = answered === QUESTIONS.length;

  return (
    <div className="px-4 sm:px-6">
      <div className="mx-auto max-w-[1100px] py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Quick Skill Test</h1>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Answer honestly — Yes, No, or Learning (still learning it).
        </p>

        {/* Progress bar */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-sm font-medium text-gray-600">
            <span>Progress</span>
            <span>{answered} of {QUESTIONS.length} answered</span>
          </div>
          <div className="mt-2 h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-navy-700 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-6 space-y-4 sm:space-y-5 max-w-3xl">
          {QUESTIONS.map((q, i) => (
            <QuestionCard key={q.id} question={q} index={i} selected={answers[q.id]} onAnswer={onAnswer} />
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:justify-start">
          <button
            onClick={onSubmit}
            disabled={!allAnswered}
            className="w-full sm:w-auto px-10 py-4 sm:py-3.5 rounded-lg bg-navy-800 text-white text-base sm:text-lg font-semibold hover:bg-navy-700 active:bg-navy-900 transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Get My Report
          </button>
        </div>
        {!allAnswered && (
          <p className="mt-3 text-center sm:text-left text-sm text-gray-500">Answer all 5 questions to see your report.</p>
        )}

        <div className="mt-6 flex justify-center sm:justify-start">
          <WhatsAppShareButton text="I just took a free placement skill check on SkillGap AI. Try it too!" />
        </div>
      </div>
    </div>
  );
}
