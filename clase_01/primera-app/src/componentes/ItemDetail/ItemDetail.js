import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Card, Icon, CardTitle, Button} from 'react-materialize';

const ItemDetail = ({producto})=>{
  
    return <>
        <Row>
                <h4 className="center">{producto.title}</h4>
            <Col m={6} s={12}>
                <Card
                actions={[
                    <Button large node="button" type="submit" waves="light" >Comprar</Button>
                ]}
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image={producto.pictureUrl}>Card Title</CardTitle>}
                revealIcon={<Icon>more_vert</Icon>}>
                  <ul>
                      <li><h5>Precio ${producto.price}</h5></li>
                  </ul>
                 {producto.description}
                </Card>
            </Col>
            </Row>
    </>
}

export default ItemDetail;