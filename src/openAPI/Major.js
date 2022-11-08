import React, {useState, useEffect} from 'react';
import axios from 'axios';

function University() {
    const [majors, setMajors] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const apiKey=  '';
    
    useEffect(() => {
      const fetchUnivs = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 users 를 초기화하고
          setError(null); 
          setMajors(null);
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);
          const response = await axios.request(
            'https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=' + apiKey + '&svcType=api&svcCode=MAJOR&contentType=json&gubun=univ_list&univSe=univ&searchTitle=%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4'
          );
          setMajors(response.data); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };
  
      fetchUnivs();
    }, []);
  
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!majors) return null;
    return (
      <ul>
        {majors && majors.dataSearch.content.map((major) => (
          <li>
            {major.mClass}
          </li>
        ))}
      </ul>
    );
  }
  
  export default University;