import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, Tôi là{' '}
        <span className={s.purple}>Nguyễn Ngọc Thiện </span>
        đến từ <span className={s.purple}> Thái Nguyên, Việt Nam.</span>
        <br />
        Tôi là sinh viên chuyên ngành Kỹ thuật Robot và Trí tuệ nhân tạo{' '}
        <br />
        Trường Đại học Giao thông vận tải Hà Nội
        <br />
        <br />
        Ngoài lập trình, một số hoạt động khác mà tôi thích làm!
      </p>
      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Chơi Game
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Đọc Sách
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Du lịch
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
