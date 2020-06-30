import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Row, Col } from '../style/grid';
import { GlobalStyle } from '../style/global';

const GET_POSTS = gql`
  {
    homes {
      id
      title
      desc
      img {
        url
      }
    }
  }
`;

const Home = () => {
  const { data } = useQuery(GET_POSTS);
  if (data && data.homes) {
    return (
      <Row>
        <GlobalStyle />
        {data.homes.map(post => (
          <Col key={post.id}>
            <h1>{post.title}</h1>
            <h2>{post.desc}</h2>

            {post.img.map(im => (
              <Col key={im.url}>
                <img src={`https://admin.tomekkonieczny.com/${im.url}`} />
              </Col>
            ))}
          </Col>
        ))}
      </Row>
    );
  }
  return <div>Loading...</div>;
};

export default Home;
