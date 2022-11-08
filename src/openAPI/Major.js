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
          // ��û�� ���� �� ������ error �� users �� �ʱ�ȭ�ϰ�
          setError(null); 
          setMajors(null);
          // loading ���¸� true �� �ٲߴϴ�.
          setLoading(true);
          const response = await axios.request(
            'https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=' + apiKey + '&svcType=api&svcCode=MAJOR&contentType=json&gubun=univ_list&univSe=univ&searchTitle=%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4'
          );
          setMajors(response.data); // �����ʹ� response.data �ȿ� ����ֽ��ϴ�.
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };
  
      fetchUnivs();
    }, []);
  
    if (loading) return <div>�ε���..</div>;
    if (error) return <div>������ �߻��߽��ϴ�</div>;
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