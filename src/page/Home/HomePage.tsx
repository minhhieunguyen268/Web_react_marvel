
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../style/styles.css';

const marvelHeroes = [
  {
    img: 'https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABaAm9ikezHWeiJVLFrHz35HKqm_KFvh74oNzZmPK5AGKzPUlxh51Tvv1bvXTqFPXEF6KfZe1jAQ_eHjeBu4UYJ5Cx1SPtx5UZH_2.jpg?r=b47',
    name: 'Iron Man',
    desc: 'Thiên tài, tỷ phú, nhà phát minh Tony Stark với bộ giáp công nghệ cao.',
  },
  {
    img: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/85ac4c84-0e99-4e94-a3a5-954c0f0bb57a/compose?aspectRatio=1.78&format=webp&width=1200',
    name: 'Captain America',
    desc: 'Steve Rogers – biểu tượng của lòng dũng cảm và công lý với chiếc khiên bất tử.',
  },
  {
    img: 'https://e0.pxfuel.com/wallpapers/110/144/desktop-wallpaper-thor-and-background-angry-thor.jpg',
    name: 'Thor',
    desc: 'Thần Sấm xứ Asgard, người sở hữu chiếc búa Mjolnir huyền thoại.',
  },
  {
    img: 'https://simkl.net/fanart/91/9189844a12776d0e8_0.jpg',
    name: 'Black Widow',
    desc: 'Nữ điệp viên Natasha Romanoff với kỹ năng cận chiến và tình báo siêu đẳng.',
  },
  {
    img: 'https://i.pinimg.com/736x/a1/9c/96/a19c963a91db6f187db9a275a2afae32.jpg',
    name: 'Hulk',
    desc: 'Bruce Banner biến hình thành quái vật xanh khổng lồ khi tức giận.',
  },
];

export default function HomePage() {
  return (
    <div style={{ width: '100%', overflow: 'hidden', margin: '60px 0', padding: 0 }}>
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {marvelHeroes.map((hero, idx) => (
          <SwiperSlide key={idx}>
            <div
              style={{
                width: '100%',
                aspectRatio: '16/9',
                backgroundImage: `url(${hero.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                color: '#fff',
                position: 'relative',
              }}
            >
              <div
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  padding: '20px',
                  maxWidth: '600px',
                  margin: '40px',
                }}
              >
                <h2 style={{ marginBottom: 8 }}>{hero.name}</h2>
                <p style={{ fontSize: 16 }}>{hero.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}