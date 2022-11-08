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
100260	서울특별시
100267	부산광역시
100269	인천광역시
100271	대전광역시
100272	대구광역시
100273	울산광역시
100275	광주광역시
100276	경기도
100278	강원도
100280	충청북도
100281	충청남도
100282	전라북도
100283	전라남도
100285	경상북도
100291	경상남도
100292	제주도
 */