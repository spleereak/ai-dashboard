import {ImageIcon, User} from "lucide-react";
import {StatCard} from "@/components/StatCard.tsx";

function Dashboard() {
  return (
    <div className='flex-1 flex flex-col overflow-auto'>
      <header className='border-b border-gray-200 p-6 flex justify-between items-center'>
        <h1 className='text-xl font-medium'>Dashboard</h1>
        <div className='flex items-center bg-black text-white rounded-full px-3 py-1'>
          <span className='mr-2'>User</span>
          <span className='bg-white rounded-full p-1'>
            <User size={16} className='text-black' />
          </span>
        </div>
      </header>

      <main className='p-6 flex-1'>
        <h2 className='text-2xl font-medium mb-6'>Добро пожаловать в AI Dashboard</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-10'>
          <StatCard
            icon={<ImageIcon size={36} className='text-gray-500' />}
            value={0}
            label='Изображения, сгенерированные вами'
          />
          <StatCard
            icon={
              <div className='w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center'>
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" fill="none" className="text-gray-500">
                  <circle cx="12" cy="12" r="10" strokeWidth="1" />
                  <path d="M12 6v6l4 2" strokeWidth="1" />
                </svg>
              </div>
            }
            value={5}
            label="Количество оставшихся токенов"
          />
        </div>

        <div>
          <h3 className='text-xl font-medium mb-4'>Последние сгенерированные изображения</h3>
          <div className='text-gray-600'>
            Ничего не найдено!
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard;