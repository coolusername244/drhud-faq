'use client';
import { useState } from 'react';

type Faq = {
  question: string;
  answer: JSX.Element;
};

type FaqsArray = Faq[];

const faqs: FaqsArray = [
  {
    question: 'Varför finns Dr Hud?',
    answer: (
      <>
        <p>
          7 av 10 svenskar går idag runt med ett obehandlat hudproblem, och idag
          behöver man vänta upp till 6 månader för att få kvalificerad hjälp,
          trots remiss.
        </p>
        <p>
          Vi startade Dr Hud för att vi anser att hudpatienter förtjänar en
          bättre vårdupplevelse. Flera av oss har själva drabbats av hudproblem,
          långa väntetider och felaktiga bedömningar, och vi är tyvärr inte
          ensamma.
        </p>
        <p>
          Teamet, som består av både hudläkare och personer med mångårig
          erfarenhet från vård och digital hälsa, har som mål att erbjuda en
          tjänst som är bättre för såväl patienter, läkare och vårdsystemet i
          sin helhet.
        </p>
      </>
    ),
  },
  {
    question: 'Hur kvalificerade är era läkare?',
    answer: (
      <p>
        Hudläkarna som hjälper dig via Dr Hud tjänst är utbildade dermatologer
        med svensk läkarlegitimation. Samtliga har mångårig erfarenhet från
        privata och/eller publika specialistmottagningar.
      </p>
    ),
  },
  {
    question: 'Kan jag använda Dr Hud för alla hudåkommor?',
    answer: (
      <>
        <p>
          Våra hudläkare kan bedöma {'>'} 3000 olika hudbesvär digitalt. Även de
          problem som kräver fysiskt besök (biopsi) och behandling kommer inom
          kort att kunna remitteras via tjänsten.
        </p>
        <p>
          Värt att veta är att tjänsten även kan användas för problem såsom
          insektsbett, hår-/håravfall, naglar, svettningar och sår.
        </p>
      </>
    ),
  },
  {
    question: 'Varför behöver jag ladda upp bilder?',
    answer: (
      <p>
        Bilder utgör tillsammans med dina svar i frågeformulären underlag för
        din bedömning. Skulle bilderna vara bristfälliga kommer läkaren be dig
        ta nya sådana.
      </p>
    ),
  },
  {
    question: 'Kan jag ställa frågor till läkaren?',
    answer: (
      <p>
        Självklart. Frågor ställer du enklast i samband med att du skickar in
        ditt ärende. Skulle något fortfarande vara oklart efter att du fått ditt
        svar har du en vecka på dig att svara, via email eller direkt via
        plattformen.
      </p>
    ),
  },
  {
    question: 'Vad händer om jag behöver recept?',
    answer: (
      <p>
        Recept erbjuds på Dr Hud sedan november 2023. Samtliga ärenden som
        bedöms via Dr Hud kan tillskrivas recept, givet att hudläkaren bedömer
        att sådan ordination är lämplig för den åkomma du sökt för.
      </p>
    ),
  },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState<number | null>(null);
  const [maxHeight, setMaxHeight] = useState<number | null>(null);

  const toggleAnswerVisibility = (index: number) => {
    const newMaxHeight = isVisible === index ? null : index;
    setMaxHeight(newMaxHeight);
    setIsVisible(newMaxHeight);
  };

  const isArrowRotated = (index: number) => {
    return isVisible === index ? 'rotate-180' : '';
  };

  return (
    <section id="faq" className="my-20 mx-5 mt-40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-[3.0rem] leading-[3.5rem] md:text-6xl mb-20 text-gray-800 font-semibold">
          Vanliga frågor
        </h2>
        <div className="divide-y">
          {faqs.map((faq, i) => {
            return (
              <div key={i}>
                <div
                  role="button"
                  onClick={() => toggleAnswerVisibility(i)}
                  className="my-5 flex justify-between text-gray-700 cursor-pointer"
                >
                  <div className="font-medium text-xl">{faq.question}</div>
                  <div>
                    <svg
                      className={`transition-transform transform ${isArrowRotated(
                        i,
                      )}`}
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div
                  className={`text-gray-700 overflow-hidden transition-all ${
                    maxHeight === i ? 'max-h-96 duration-500' : 'max-h-0'
                  }`}
                >
                  <div className="flex flex-col gap-4">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
