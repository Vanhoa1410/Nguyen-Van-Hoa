import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const BannerBottom = () => {
  const { theme } = useTheme()
  return (
    <div className={cn('mt-16 bg-green-100', theme === 'dark' && 'bg-slate-500')}>
      <div className='px-32 flex justify-center py-16'>
        <div>
          <Image height={350} width={450} alt='banner' src='/tanfooter.png' />
        </div>
        <div className='flex flex-col gap-4 w-[400px]'>
          <h1 className='font-bold text-4xl' style={{ color: 'black' }}>Bán các khóa học dạy kinh doanh làm giàu bền vững với CEO Tần Nguyễn</h1>

          <p style={{ color: 'black' }}>Kinh doanh là nghệ thuật chiến lược, sức sáng tạo không giới hạn để tạo ra giá trị và thay đổi thế giới. Đam mê kết nối cộng đồng và nâng cao chất lượng cuộc sống, mỗi bước đi là một hành trình vươn lên, với lòng quyết tâm và khát vọng vượt bậc</p>
          <div className='flex items-center gap-2'>
            <Button className='w-min bg-yellow-400 hover:bg-yellow-300'>Bắt đầu khóa học kinh doanh ngay</Button>
            <Button className='w-min bg-yellow-400 hover:bg-yellow-300'>Đăng nhập</Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BannerBottom
