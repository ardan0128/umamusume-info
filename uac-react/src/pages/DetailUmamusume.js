import { useParams } from 'react-router-dom';
import Detailumamusume from '../components/DetailUmamusume';
import { getDetailUmamusume } from '../data/api/Umamusume';
import { useEffect, useState } from 'react';

function DetailUmamusume() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [umamusumeDetail, setUmamusumeDetail] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    getDetailUmamusume(params.id).then(res => {
      setLoading(false);
      setUmamusumeDetail(res);
      setImage(require(`${process.env.REACT_APP_PUBLIC_IMAGES}/${res.id}.png`));
    });
  }, [params.id]);

  return <>{loading ? `loding...` : <Detailumamusume {...umamusumeDetail} image={image}></Detailumamusume>}</>;
}

export default DetailUmamusume;
