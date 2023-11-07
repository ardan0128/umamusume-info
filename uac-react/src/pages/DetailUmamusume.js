import { useParams } from 'react-router-dom';
import Detailumamusume from '../components/DetailUmamusume';
import { getDetailUmamusume } from '../data/api/Umamusume';
import { useEffect, useState } from 'react';

function DetailUmamusume() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [umamusumeDetail, setUmamusumeDetail] = useState();

  useEffect(() => {
    getDetailUmamusume(params.id).then(res => {
      setLoading(false);
      setUmamusumeDetail(res);
    });
  }, [params.id]);

  return <>{loading ? `loding...` : <Detailumamusume {...umamusumeDetail}></Detailumamusume>}</>;
}

export default DetailUmamusume;
