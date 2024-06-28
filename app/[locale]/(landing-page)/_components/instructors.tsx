"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstructorItem from "./instructor-item";

const instructors = [
  {
    imageSrc: '/vet-1.jpg',
    title: 'Ông Tần Nguyễn xây dựng nghiệp từ hai bàn tay trắng.',
    name: 'Phương châm sống của ông là nếu không có khát vọng, thì sẽ không thay đổi được gì.',

  },
  {
    imageSrc: '/vet-2.jpg',
    title: 'CEO Tần Nguyễn biết ơn thời gian khó đã tôi luyện sự khát khao và bền chí.',
    name: 'Những kiến thức về khởi nghiệp mà ông chia sẻ khiến nhiều bạn trẻ yêu thích.Ông cũng truyền động lực làm giàu với các khóa học định hướng phát triển',

  },
  {
    imageSrc: '/vet-3.jpg',
    title: 'Ông Tần Nguyễn là doanh nhân tích cực với các hoạt động vì cộng đồng.',
    name: 'Các hoạt động từ thiện của GFB và nhà sáng lập Tần Nguyễn phân bổ nhiều lĩnh vực',

  },
  {
    imageSrc: '/vet-4.jpg',
    title: 'Ông Tần Nguyễn xem việc làm thiện nguyện là nỗ lực để tri ân cuộc đời.',
    name: 'Trong định hướng phát triển tương lai, CEO Tần Nguyễn chia sẻ tiếp tục duy trì và đẩy mạnh các hoạt động từ thiện',

  },
  {
    imageSrc: '/vet-5.jpg',
    title: 'Diễn giả chuyên về đầu tư, tài chính, chứng khoán Tần Nguyễn',
    name: 'Nguyễn Văn Tần, sinh năm 1973, được biết đến với tên gọi Tần Nguyễn trên mạng xã hội. Ông là một YouTuber và TikToker thường xuyên chia sẻ lời khuyên và trả lời câu hỏi cho cộng đồng',

  },
  {
    imageSrc: '/vet-6.jpg',
    title: 'Đội ngũ hỗ trợ',
    name: 'Đội ngũ hỗ trợ của chúng tôi luôn túc trực từ 6-18h từ thứ 2 đến thứ 7',

  }
];

const Instructors = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <div className='px-32 pt-8 mt-16'>
      <div className='flex justify-center'>
        <h1 className='text-3xl font-bold drop-shadow-custom bg-gradient-to-r from-[#a8c0ff] to-[#3f2b96] bg-clip-text text-transparent'>Những hình ảnh thực tế</h1>
      </div>
      <div className="pt-4 mt-2">
        <Slider {...settings}>
          {instructors.map((instructor, index) => (
            <InstructorItem
              key={index}
              imageSrc={instructor.imageSrc}
              title={instructor.title}
              name={instructor.name}

            />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Instructors
