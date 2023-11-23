import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Timeline() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="mt-2 mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          FUNDAMENTOS HISTÓRICOS
        </h1>
      </div>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-20 ms-16">
          <span className="absolute flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full -start-10 -y-3 ring-8 ring-white overflow-hidden">
            <Image src="/imgs/piaget.jpg" alt="Jean Piaget" fill />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Jean Piaget
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            1896
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Psicólogo suíço; teoria do desenvolvimento cognitivo; estágios de
            desenvolvimento infantil; influência marcante na psicologia e
            educação.
          </p>
        </li>
        <li className="mb-20 ms-16">
          <span className="absolute flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full -start-10 -y-3 ring-8 ring-white overflow-hidden">
            <Image src="/imgs/maria.jpg" alt="Maria Montessori" fill />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Maria Montessori
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            1907
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Médica italiana pioneira em educação; desenvolveu método centrado na
            autonomia e aprendizado prático, influenciando educação global.
          </p>
        </li>
        <li className="mb-20 ms-16">
          <span className="absolute flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full -start-10 -y-3 ring-8 ring-white overflow-hidden">
            <Image src="/imgs/john.jpg" alt="John Dewey" fill />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            John Dewey
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            1916
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Filósofo, psicólogo e educador dos EUA; defensor da educação
            progressiva e experiencial; influente na teoria educacional e
            reforma escolar mundial.
          </p>
        </li>
        <li className="mb-20 ms-16">
          <span className="absolute flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full -start-10 -y-3 ring-8 ring-white overflow-hidden">
            <Image src="/imgs/darcy.jpg" alt="Darcy Ribeiro" fill />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Darcy Ribeiro
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            1922
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Antropólogo e político brasileiro; defensor da educação; idealizou
            projetos educacionais, destacou-se na valorização da cultura e
            identidade latino-americanas.
          </p>
        </li>
        <li className="mb-20 ms-16">
          <span className="absolute flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full -start-10 -y-3 ring-8 ring-white overflow-hidden">
            <Image src="/imgs/lev.jpg" alt="Lev Vygotsky" fill />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Lev Vygotsky
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            1924
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Psicólogo russo; teoria sociocultural enfatiza influência cultural
            no desenvolvimento; zona proximal desenvolvimento destaca interação
            social e aprendizado.
          </p>
        </li>
        <li className="mb-20 ms-16">
          <span className="absolute flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full -start-10 -y-3 ring-8 ring-white overflow-hidden">
            <Image src="/imgs/anisio.jpg" alt="Anísio Teixeira" fill />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Anísio Teixeira
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            1931
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Educador brasileiro; pioneiro na educação pública; idealizou escolas
            modernas, defendeu acesso amplo à educação e reformas educacionais
            significativas no Brasil.
          </p>
        </li>
        <li className="mb-20 ms-16">
          <span className="absolute flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full -start-10 -y-3 ring-8 ring-white overflow-hidden">
            <Image src="/imgs/paulo.png" alt="Paulo Freire" fill />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Paulo Freire
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            1980
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Educador brasileiro; pedagogia crítica; alfabetização como
            libertação; engajamento social e educação como instrumentos de
            transformação e conscientização.
          </p>
        </li>
        <li className="mb-20 ms-16">
          <span className="absolute flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full -start-10 -y-3 ring-8 ring-white overflow-hidden">
            <Image src="/imgs/pierre.jpg" alt="Pierre Bourdieu" fill />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Pierre Bourdieu
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            1970
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Sociólogo francês; teoria da reprodução social destaca influência
            cultural e capital simbólico; investigou desigualdades sociais e
            cultura na sociedade contemporânea.
          </p>
        </li>
      </ol>
    </main>
  );
}
