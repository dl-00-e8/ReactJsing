import React from 'react';
import useSWR from 'swr';
import axios from 'axios';

function University() {
    const apiKey = '';
    let uri = 'https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=' + apiKey + '&svcType=api&svcCode=SCHOOL&contentType=json&gubun=univ_list';
    const fetcher = url => axios.get(uri).then(response => response.data);
    const {data, error} = useSWR('/api/data', fetcher);

    if(error) return (<div>Failed to load</div>);
    if(!data) return (<div>Loading...</div>);
    return (
        <ul>
        {data && data.dataSearch.content.map((univ) => (
          <li>
            {univ.schoolName} 
          </li>
        ))}
      </ul>
    );

};

export default University;


/*
region
100260	����Ư����
100267	�λ걤����
100269	��õ������
100271	����������
100272	�뱸������
100273	��걤����
100275	���ֱ�����
100276	��⵵
100278	������
100280	��û�ϵ�
100281	��û����
100282	����ϵ�
100283	���󳲵�
100285	���ϵ�
100291	��󳲵�
100292	���ֵ�
 */