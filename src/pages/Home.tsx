import {useState} from "react";
import {ArrowRight, ImageIcon} from "lucide-react";

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='min-h-screen w-full flex flex-col relative overflow-hidden bg-black'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-32 -left-40 w-96 h-96 bg-gray-800 opactiy-40 rounded-full filter blur-3xl' />
        <div className='absolute top-2/3 -right-20 w-96 h-96 bg-gray-700 opacity-30 rounded-full filter blur-3xl' />

        <div
          className='absolute inset-0 bg-grid-white/[0.03]'
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <header className='relative z-10 flex justify-between items-center p-6 md:p-8'>
        <div className='flex items-center'>
          <ImageIcon className='text-white mr-2' />
          <span className='text-white text-xl font-bold'>AI Dashboard</span>
        </div>
      </header>

      <div className='relative flex-1 flex flex-col items-center justify-center px-4 md:px-8'>
        <div className='text-center max-w-4xl mx-auto'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            Воплотите свои идеи в изображения с помощью искуственного интеллекта
          </h1>

          <p className='text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto'>
            Создавайте уникальные визуализации из текстовых описаний за считанные секунды.
          </p>

          <button
            className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md transition-all duration-300 ease-in-out ${
              isHovered
                ? 'bg-white text-black shadow-lg'
                : 'bg-black text-white border border-white'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className='mr-2'>Начать создавать</span>
            <ArrowRight
              className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
              size={20}
            />
          </button>
        </div>

        <div className='mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto w-full'>
          {[
            {
              title: "Текст в изображения",
              description: "Опишите что вы хотите увидеть, и наша система моментально создаст соответствующую визуализацию"
            },
          {
            title: "Разнообразие стилей",
            description: "Фотореализм, живопись, комиксы, абстракция — выбирайте любой художественный стиль"
          },
          {
            title: "Простота использования",
            description: "Интуитивно понятный интерфейс делает процесс генерации изображений доступным для каждого"
          }
            ].map((feature, index) => (
              <div key={index} className='bg-gray-900 rounded-md p-6 border border-gray-800 hover:border-gray-700 transition-colors'>
                <h3 className='text-xl font-semibold text-white mb-2'>{feature.title}</h3>
                <p className='text-gray-400'>{feature.description}</p>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;